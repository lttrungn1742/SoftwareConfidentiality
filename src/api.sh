#!/bin/bash

scp -r api cloud:/home/ubuntu/
ssh cloud /bin/bash <<EOF
    cd /home/ubuntu/api
    docker rm -f api
    docker build . -t api
	docker run --rm -d -p 8080:80 --name api api
EOF