all:
	docker build . -t api
	docker run --rm -d -p 8080:80 --name api api