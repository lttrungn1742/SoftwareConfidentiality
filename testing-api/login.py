import requests

s = requests.session()


endpoint = "http://localhost:8080"

def login(username = 'N18DCAT097', password = '20000417'):
    path = "/api/login"

    response = s.post(endpoint+path, 
                json={'username' : username,'password' : password})
    try:
        print(response.text)
    except:
        print(response.text)


login()