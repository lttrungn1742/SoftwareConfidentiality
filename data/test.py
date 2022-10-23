import requests

s = requests.session()

endpoint = 'http://localhost:8080/api/login'


response = s.post(endpoint, json={'username':'N18DCAT097','password':'20000417'})

print(response.json()['accessToken'])


print(s.get('http://localhost:8080/api/getProfile', headers={
    'authorization':response.json()['accessToken']
}).json())

