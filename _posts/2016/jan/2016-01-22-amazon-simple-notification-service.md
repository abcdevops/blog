---
layout: post
title: ABCDevOps - Amazon Simple Notification Service
date: 2016-01-22
og_image: /images/posts/amazon-simple-notification-service.jpg
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

## Simple Notification Service

Amazon Simple Notification Service (Amazon SNS) is a web service that makes it easy to set up, operate, and send notifications from the cloud. It provides developers with a highly scalable, flexible, and cost-effective capability to publish messages from an application and immediately deliver them to subscribers or other applications.

Amazon SNS follows the “publish-subscribe” (pub-sub) messaging paradigm, with notifications being delivered to clients using a “push” mechanism that eliminates the need to periodically check or “poll” for new information and updates. With simple APIs requiring minimal up-front development effort, no maintenance or management overhead and pay-as-you-go pricing, Amazon SNS gives developers an easy mechanism to incorporate a powerful notification system with their applications.

Push notifications to Apple, Google, Fire OS, and Windows devices, as well as Android devices in China with Baidu Cloud Push.

Besides pushing cloud notifications directly to mobile devices, Amazon SNS can also deliver notifications by SMS text message or email, to Amazon Simple Queue Service (SQS) queues, or to any HTTP endpoint.

To prevent messages from being lost, all messages published to Amazon SNS are stored redundantly across multiple availability zones.

## SNS is arranged by Topics

SNS allows you to group multiple recipients using topics. A topic is an “access point” for allowing recipients to dynamically subscribe for identical copies of the same notification. One topic can support deliveries to multiple endpoints types – for example, you can group together IOS, Android and SMS recipients. When you publish once to a topic, SNS delivers appropriately formatted copies of your message to each subscriber.

Different Benefits of SNS
---
  1. Instantaneous, push-based delivery (no polling)
  2. Simple APIs and easy integration with applications
3. Flexible message delivery over multiple transport protocols
4. Inexpensive, pay-as-you-go model with no up-front costs
5. Web-based AWS Management Console offers the simplicity of a point-and-click interface

Difference between SNS vs SQS
---
Both Messaging Services in AWS
1. SNS – SNS is push Service
2. SQS – SQS is pull Service

SNS Pricing
---
1. Users Pay $0.50 per 1 million Amazon SNS Requests.
2. $0.06 per 100,000 Notification deliveries over HTTP.
3. $0.75 per 100 Notification deliveries over SMS.
4. $2.00 per 100,000 Notification deliveries over Email.





