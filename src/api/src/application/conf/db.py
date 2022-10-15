import mysql.connector, os
from mysql.connector.errors import InterfaceError
import logging, json

logging.basicConfig(level=logging.DEBUG, format=f'%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')

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
    except:
        con.reconnect(attempts=1, delay=0)
        return execute_query(query)

def login(username, password):
  sql = f"select username from users where username='{username}' and passwd='{password}'"
  
  return [row[0] for row in execute_query(sql)][0]

  
 