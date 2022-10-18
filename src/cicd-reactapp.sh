#!/bin/bash

scp -r reactapp cloud:/home/ubuntu/
ssh cloud /bin/bash <<EOF
    cd /home/ubuntu/reactapp
    # Continuous Integration
    docker build . --file build/Dockerfile-prd  -t "dast_app_image"
    # wait for copy and stop container
    docker run --rm -d --name dast_app "dast_app_image" sleep 30
    docker cp dast_app:/app html_src
    # Continuous Delivery
    aws s3 sync --delete html_src s3://lttrung-dast-bucket/public
    # Clean cache
    aws cloudfront  create-invalidation --distribution-id E21U7PULRELFOQ --paths "/*"
EOF