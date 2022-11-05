
from slack_sdk import WebClient
import os, logging, json


token = os.getenv('SLACK_TOKEN')
client = WebClient(token=token)

logger = logging.getLogger(__name__)


def raise_exception(err, request):
    try:
        IP_ADDRESS = request.headers['X-Forwarded-For']
    except:
        IP_ADDRESS = request.remote_addr
    message = [
    {
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": f"Exception in application"
			}
		},
		{
			"type": "divider"
		},
        {
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": f" <@U040EGGTZEZ> ```{err}```"
				}
			]
		},
        {
            "type": "divider"
        },
        {
			"type": "section",
			"fields": [
                {
					"type": "mrkdwn",
					"text": f"IP address: ```{IP_ADDRESS}```"
				},
                {
					"type": "mrkdwn",
					"text": f"URI: ```{request.path}```"
				}
			]
		},
        {
            "type": "divider"
        },
        {
			"type": "section",
			"fields": [
                {
					"type": "mrkdwn",
					"text": f"Payload ```{json.dumps(request.json, indent=4)}```"
				}
			]
		},
        {
            "type": "divider"
        }
    ]
    
    channel = "C04AB72EMLY"
    client.chat_postMessage(blocks=message, channel=channel)
    


def brute_force(request):
    try:
        IP_ADDRESS = request.headers['X-Forwarded-For']
    except:
        IP_ADDRESS = request.remote_addr
    message = [
    {
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": f"Brute Force"
			}
		},
		{
			"type": "divider"
		},
        {
			"type": "section",
			"fields": [
                {
					"type": "mrkdwn",
					"text": f"IP address: ```{IP_ADDRESS}```"
				},
                {
					"type": "mrkdwn",
					"text": f"URI: ```{request.path}```"
				}
			]
		},
        {
            "type": "divider"
        },
        {
			"type": "section",
			"fields": [
                {
					"type": "mrkdwn",
					"text": f"Payload ```{json.dumps(request.json, indent=4)}```"
				}
			]
		},
        {
            "type": "divider"
        }
    ]
    
    channel = "C048N08RV9Q"
    client.chat_postMessage(blocks=message, channel=channel)