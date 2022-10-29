import json, datetime
import boto3

client = boto3.client('wafv2')

def get_rules():
    response = client.get_web_acl(
        Name='waf',
        Scope='REGIONAL',
        Id='7c0502d1-e612-4f63-ad82-5e891277ca79'
    )

    return [rule['Name'] for rule in response['WebACL']['Rules']]


def get_sampled_requests(rule):
    now = datetime.datetime.now()

    yesterday = datetime.datetime.now() - datetime.timedelta(1)
    response = client.get_sampled_requests(
        WebAclArn='arn:aws:wafv2:ap-southeast-1:128294669461:regional/webacl/waf/7c0502d1-e612-4f63-ad82-5e891277ca79',
        RuleMetricName=rule,
        Scope='REGIONAL',
        TimeWindow={
            'StartTime': yesterday,
            'EndTime': now
        },
        MaxItems=500
    )
    lists = []
    for request in response['SampledRequests']:
        _datetime =  datetime.datetime.strftime(request['Timestamp'], "%y/%m/%d %X")
        ruleName = request['RuleNameWithinRuleGroup']
        action = request['Action']

        request = request['Request']
        user_agent = "None"

        for header in request['Headers']:
            if header['Name'] == "User-agent":
                user_agent = header['Value']
                break

        lists.append(
            {
                "IP": request['ClientIP'],
                "Country": request['Country'],
                "URI" : request['URI'],
                "Method": request['Method'],
                "User-Agent": user_agent,
                "Timestamp":_datetime,
                "RuleNameWithinRuleGroup": ruleName,
                "Action": action
            }
        )
    return lists

def lambda_handler():
    data = []
    for rule in get_rules():
        data += get_sampled_requests(rule)
    
    # return {
    #     'statusCode': 200,
    #     'body': json.dumps(data, indent=4)
    # }

    open('data.json','w').write(json.dumps(data, indent=4))

lambda_handler()