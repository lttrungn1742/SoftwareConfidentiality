all:
	make db 
	make web
db:
	docker-compose up -d db
	sleep 30
web:
	docker-compose up -d 
q:
	docker-compose exec db mysql -u root -p data
l:
	docker-compose logs -f
d:
	docker-compose down 
b:
	docker-compose build