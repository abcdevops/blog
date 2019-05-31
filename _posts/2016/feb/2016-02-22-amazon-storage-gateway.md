---
layout: post
title: ABCDevOps - Amazon Storage Gateway
date: 2016-02-22
og_image: /images/posts/amazon-storage-gateway.jpg
top_story: true
description: |
  
tags:
- sqs
- amazon
- aws
- service
- pricing
---
## Storage Gateway

AWS Storage Gateway is a service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization’s on-premises IT environment and AWS’s storage infrastructure. The service enables you to securely store data to the AWS cloud for scalable and cost-effective storage.

AWS Storage Gateway software appliance is available for download as a virtual machine (VM) image that you install on a host in your data center. Once you’ve installed your gateway and associated it with your AWS account through our activation process, you can use the AWS Management Console to create either gateway-cached or gateway-stored volumes that can be mounted as iSCSI devices by your on-premises applications.

## Storage Gateway in two different models Gateway-cached and Gateway-stored

## Gateway-cached :-
Gateway-cached volumes allow you to utilize Amazon S3 for your primary data, while retaining some portion of it locally in a cache for frequently accessed data. These volumes minimize the need to scale your on-premises storage infrastructure, while still providing your applications with low-latency access to their  frequently accessed data. You can create storage volumes up to 32 TBs in size and mount them as iSCSI devices from your on-premises application servers. Data written to these volumes is stored in Amazon S3, with only a cache of recently written and recently read data stored locally on your on-premises storage hardware.

## Gateway-stored :- 

Gateway-stored volumes store your primary data locally, while asynchronously backing up that data to AWS. These volumes provide your on-premises applications with low-latency access to their entire data sets, while providing durable, off-site backups. You can create storage volumes up to 1TB in size and mount them as iSCSI devices from your on-premises applications servers. Data written to your gateway-stored volumes is stored on your on-premises storage hardware, and asynchronously backed up to Amazon S3 in the form of Amazon EBS snapshots.

## Storage Gateway Pricing

With AWS Storage Gateway, you pay only for what you use. AWS Storage Gateway has four pricing components: gateway usage (per GB per month) so the number of gateway using per month, snapshot storage usage (per GB per month), volume storage usage (per GB per month), and data transfer out (per GB per month).

