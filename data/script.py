import os 
from hashlib import sha512
dir_path = os.path.dirname(os.path.realpath(__file__))

file = open(f'{dir_path}/Report.csv','r').read()


for line in file.split('\n'):
    data = line.split(';')
    birdate = data[3].split('/')[::-1]
    print(f"('{data[1]}', '{data[2]}', '{'-'.join(birdate)}', '{data[4]}', '{data[6]}', '{sha512(''.join(birdate).encode()).hexdigest()}'),")
    print(birdate)
    break