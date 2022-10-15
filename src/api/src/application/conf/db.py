# import mysql.connector, os

# con = mysql.connector.connect(
#   host="database",
#   user="root",
#   password=os.getenv('passwdMysql'),
#   database='data'
# )
# cursor = con.cursor()



# def login(username, password):
#   sql = f"select username from users where username='{username}' and passwd='{password}'"
#   try:
#     cursor.execute(sql)
#     result = [row[0] for row in cursor.fetchall()]
#     return result[0]
#   except Exception as e:
#     return None
  
 