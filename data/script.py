import os 
dir_path = os.path.dirname(os.path.realpath(__file__))

file = open(f'{dir_path}/Report.csv','r').read()

def format_date(s):
    return '-'.join(s.split('/')[::-1])

for line in file.split('\n'):
    data = line.split(';')
    print(f"('{data[1]}', '{data[2]}', '{format_date(data[3])}', '{data[4]}', '{data[6]}'),")