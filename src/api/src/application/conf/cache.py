import logging
import redis, os, datetime
from application.conf import db

REDIS_POOL = redis.ConnectionPool(host=os.getenv('CACHE_HOST'), port=6379, db=0)

limit_failed_count = int(os.getenv('LIMIT_FAILED_COUNT', 60))
rate_limit = int(os.getenv('RATE_LIMIT', 30))

def getFailedCount(IP_ADDRESS):
    brute_key = "brute_%s" % IP_ADDRESS
    r = redis.Redis(connection_pool=REDIS_POOL)
    try:
        failed_count = int(r.get(brute_key), 10)
    except:
        failed_count = 0
    return failed_count

def detection(IP_ADDRESS):
    failed_count = getFailedCount(IP_ADDRESS)
    return failed_count >= limit_failed_count

def setFailedCount(IP_ADDRESS):    
    brute_key = "brute_%s" % IP_ADDRESS
    r = redis.Redis(connection_pool=REDIS_POOL)
    try:
        failed_count = int(r.get(brute_key))
    except Exception as err:
        failed_count = 0
        logging.info(err)
    # Increse failed count
    failed_count += 1
    
    logging.info(f'source: {IP_ADDRESS}, count: {failed_count}, time: {datetime.datetime.now().timestamp() + 1800}')
    r.set(brute_key, failed_count, 1800)


def protection(IP_ADDRESS):
    setFailedCount(IP_ADDRESS)

def getRateLimit(IP_ADDRESS):
    rate_key = "rate_limit_%s" % IP_ADDRESS
    r = redis.Redis(connection_pool=REDIS_POOL)
    try:
        count = int(r.get(rate_key), 10)
    except:
        count = 0
    return count


def detection_rate_limit(IP_ADDRESS):
    count = getRateLimit(IP_ADDRESS)
    return count >= rate_limit