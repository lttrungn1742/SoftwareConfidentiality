import requests, time

s = requests.session()

endpoint = 'http://localhost:8080/api/login'
# endpoint = "https://api.trunglt.info/api/login"

for _ in range(100):
    response = s.post(endpoint, json={'username':'a','password':'a'},
                headers={'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'})

    print(response.text)
    



response = s.post(endpoint, 
                json={'username':'N18DCAT097','password':'a' * 1000 * 1000 * 10}, 
                headers={'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'})

print(response.text)


# # print(s.get('http://localhost:8080/api/getProfile', headers={
# #     'authorization':response.json()['accessToken']
# # }).json())

# import datetimem
