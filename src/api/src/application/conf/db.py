import mysql.connector, os
from mysql.connector.errors import InterfaceError
import logging, json

logging.basicConfig(level=logging.INFO, format=f'%(message)s')

con = mysql.connector.connect(host="db", user="root", password=os.getenv('MYSQL_ROOT_PASSWORD'), database='data')
cursor = con.cursor()


def execute_query_fetchone(query):
    try:
        cursor.execute(query)
        return cursor.fetchone()
    except InterfaceError as err:
        logging.debug(err)
        con.close()
        con.reconnect(attempts=1, delay=0)
        return execute_query_fetchone(query)
    except Exception as err:
        logging.debug(err)
        return [None]
       
def execute_query(query):
    try:
        cursor.execute(query)
        return cursor.description, cursor.fetchall()
    except InterfaceError as err:
        logging.debug(err)
        con.close()
        con.reconnect(attempts=1, delay=0)
        return execute_query(query)
    except Exception as err:
        logging.info(err)


def login(username, password):
  result = execute_query_fetchone(f"select username from users where username='{username}' and passwd='{password}'")[0]
  logging.info(" The username is logged - %s"% result)
  return result
  
def getSubjects():
  try:
      description, rv = execute_query("select * from subjects")  
      row_headers=[element[0] for element in description]
      response = json.dumps([dict(zip(row_headers,result)) for result in rv])
      return response
  except Exception as err:
      logging.info(err)
      return None

def getStudents():
  try:
      description, rv = execute_query("select * from students")  
      row_headers=[element[0] for element in description]
      response = json.dumps([dict(zip(row_headers,result)) for result in rv])
      return response
  except Exception as err:
      logging.info(err)
      return None