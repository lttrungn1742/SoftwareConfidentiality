# import requests, time

# s = requests.session()

# endpoint = 'http://localhost:8080/api/login'

# for _ in range(100):
#     response = s.post(endpoint, json={'username':'a','password':'a'})

#     print(response.json())

# # response = s.post(endpoint, json={'username':'N18DCAT097','password':'20000417'})

# # print(response.json())


# # print(s.get('http://localhost:8080/api/getProfile', headers={
# #     'authorization':response.json()['accessToken']
# # }).json())

from hashlib import sha512

print(sha512("admin".encode()).hexdigest())