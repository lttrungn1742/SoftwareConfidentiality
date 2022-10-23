import mysql.connector, os
from mysql.connector.errors import InterfaceError
import logging, json
from hashlib import sha512
from flask import escape

logging.basicConfig(level=logging.INFO, format=f'%(message)s')

con = mysql.connector.connect(host=os.getenv('DB_HOST'),  user=os.getenv('MYSQL_USER'),password=os.getenv('MYSQL_ROOT_PASSWORD'),database='data' )
cursor = con.cursor()

sanitize_row = lambda row: (escape(element) for element in row)
toJson = lambda headers, data: json.dumps([dict(zip(headers, sanitize_row(element) if element != None else "")) for element in data])


def execute_query_fetchone(query, val=()):
    try:
        cursor.execute(query, val)
        return cursor.description, cursor.fetchone()
    except InterfaceError as err:
        logging.debug(err)
        con.close()
        con.reconnect(attempts=1, delay=0)
        return execute_query_fetchone(query)
    except Exception as err:
        logging.debug(err)
        return [None]
       
def execute_query(query, val=()):
    try:
        cursor.execute(query, val)
        return cursor.description, cursor.fetchall()
    except InterfaceError as err:
        logging.debug(err)
        con.close()
        con.reconnect(attempts=1, delay=0)
        return execute_query(query)
    except Exception as err:
        logging.info(err)


def login(username, password):
  result = execute_query_fetchone(f"select id from students where id=%s and password=%s", (username, sha512(password.encode()).hexdigest()))
  
  logging.info(f" The username is logged - {result[1]}")
  return None if result[1] == None else result[1][0]
  
def getSubjects():
  try:
      description, rv = execute_query("select * from subjects")  
      response = toJson([element[0] for element in description]  , rv)
      return response
  except Exception as err:
      logging.info(err)
      return None

def getStudents():
  try:
      query = """select students.id, 
                    students.name, 
                    DATE_FORMAT(birthDate , '%d/%m/%Y') as birthd,
                    idClass, class.name as nameClass, idFaculty, 
                    faculty.name as nameFaculty 
                from students, faculty, class 
                where class.id=idClass and faculty.id=idFaculty"""
      description, rv = execute_query(query)  
      
      response = toJson([element[0] for element in description]  , rv)

      return response
  except Exception as err:
      logging.info(err)
      return None

def getAcademy(idStudent):
  try:
      query = """select idStudent, 
                students.name as nameStudent,
                idSubject,
                subjects.name as nameSubject,
                time,
                score
                from academy, students, subjects
                where 
                    academy.idStudent=%s and
                    students.id=academy.idStudent and
                    subjects.id=academy.idSubject"""
      description, rv = execute_query(query, (idStudent, ))  
      
      response = toJson([element[0] for element in description]  , rv)

      return response
  except Exception as err:
      logging.info(err)
      return None

def getProfile(username):
    query = """select students.id, 
                    students.name, 
                    DATE_FORMAT(birthDate , '%d/%m/%Y') as birthd,
                    idClass, 
                    class.name as nameClass, 
                    idFaculty, 
                    faculty.name as nameFaculty,
                    numberPhone,
                    address,
                    identiyCard
                from 
                    students, 
                    faculty, 
                    class 
                where 
                    class.id=idClass and 
                    faculty.id=idFaculty and
                    students.id=%s
                limit 1"""
    description, rv  = execute_query_fetchone(query, (username, ))
    
    response = toJson([element[0] for element in description]  , [rv])

    return response

def updateProfile(id, name, address, indentity, numberPhone):
    try:
        sql = """   UPDATE students 
                    SET 
                        address = %s,
                        name = %s,
                        identiyCard = %s,
                        numberPhone = %s
                    WHERE id = %s"""

        cursor.execute(sql, (address, name, indentity, numberPhone, id))

        con.commit()
        return "Success"
    except mysql.connector.errors.DataError as err:
        logging.info(err)
        return str(err)
    
    except Exception as err:
        logging.info(err)
        return str(err)