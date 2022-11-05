FROM python:3-alpine as builder

# Install packages
RUN apk add --update --no-cache supervisor 
# RUN apk add --update --no-cache supervisor nginx


# RUN addgroup -g 82 -S www-data ; \
#     adduser -u 82 -D -S -G www-data www-data 
# Upgrade pip
RUN python -m pip install --upgrade pip

# Install dependencies
COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt

# Setup app
RUN mkdir -p /app

ENV DB_HOST=dast-db.ccmgacqdchfg.ap-southeast-1.rds.amazonaws.com
ENV MYSQL_ROOT_PASSWORD=DASTadmin
ENV MYSQL_USER=admin
ENV DEBUG=False
ENV LIMIT_FAILED_COUNT=60
ENV CACHE_HOST=redis-001.ldhquy.0001.apse1.cache.amazonaws.com
ENV SLACK_TOKEN=xoxb-4030150203985-4184537502672-YIbv8evHetCqYXTr1qg5dwpo

# Switch working environment
WORKDIR /app

# Add application
COPY src .

# Setup supervisor
COPY config/supervisord.conf /etc/supervisord.conf
# COPY config/nginx.conf /etc/nginx/nginx.conf
# COPY config/default.conf /etc/nginx/conf.d/default.conf

# Disable pycache
ENV PYTHONDONTWRITEBYTECODE=1

# Run supervisord
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]