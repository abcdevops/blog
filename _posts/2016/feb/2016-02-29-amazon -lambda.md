---
layout: post
title: ABCDevOps - Amazon Lambda
date: 2016-02-29
og_image: /images/posts/amazon-lambda.jpg
main_image: /images/ginvoicing-main.jpg
top_story: true
description: |
  
tags:
- sqs
- amazon
- aws
- service
- pricing
---
## What is Lambda?

AWS Lambda is a compute service that runs your code in response to events and automatically manages the underlying compute resources. So you don’t have to worry about server infrastructure all you have to worry about is code and you can design your code respond automatically to events.

AWS Lambda can automatically run code in response to modifications to objects in Amazon S3 buckets, messages arriving in Amazon Kinesis streams, or table updates in Amazon DynamoDb.

Lambda runs your code on high-availability compute infrastructure and performs all the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code and security patch deployment, and code monitoring and logging.

All you need to do is supply the code.

## What Events Trigger Lambda?

You can use AWS Lambda to respond to table updates in Amazon DynamoDB, modifications to objects in Amazon S3 buckets, messages arriving in an Amazon Kinesis stream, AWS API calls logs created by AWS Cloud Trail, and custom events from mobile applications, web applications, or other web services.

## Lambda Pricing

So pricing is broken down into two bits Requests based and Duration based. So if we start with requests you get first 1 million requests are free to the Lambda service and then you are paying $0.20 per 1 million requests thereafter.

Duration is calculated from the time your code begins executing until it returns or otherwise terminates, and it’s rounded up to the nearest 100ms. The price depends on the amount of memory you allocate to your function. You are charged $0.00001667 for every GB-second used.

In terms of your free tier

1M free requests per month and 400,000 GB-seconds of compute time per month. The memory size you choose for your Lambda functions determines how long they can run in the free tier. The Lambda free tier does not automatically expire at the end of your 12 month AWS Free Tier term, but is available in both existing and new AWS customers indefinitely.


