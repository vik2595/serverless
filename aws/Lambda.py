import boto3, json

def lambda_handler(event, context):
    client = boto3.resource('dynamodb')
    # Enter YOUR table name instead of 'serverless 
    table = client.Table('serverless')
    if isinstance(event, dict):
        try:
            data = json.loads(event['body'])
            response = table.put_item(Item=data)
        except Exception as e:
            print(e)
    else:
        try:
            response = table.put_item(Item=event)
        except Exception as e:
            print(e)
    # For CORS (Cross-origin resource sharing) mechanism
    return {
    "statusCode": 200,
    'headers': {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST'
    },
    }