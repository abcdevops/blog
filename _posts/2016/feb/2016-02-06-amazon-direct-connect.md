---
layout: post
title: ABCDevOps - Amazon Direct Connect
date: 2016-02-06
og_image: /images/posts/amazon-direct-connect.jpg
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

## Direct Connect

AWS Direct Connect makes it easy to establish a dedicated network connection from your premises to AWS. Using AWS Direct Connect, you can establish private connectivity between AWS and your datacenter, office, or co location environment, which in many cases can reduce your network costs, increase bandwidth throughput, and provide a more consistent network experience than using Internet-based connections.

AWS Direct Connect lets you establish a dedicated network connection between your network and one of the AWS Direct Connect locations. Using industry standard 802.1q VLANs this dedicated connections can be partitioned into multiple virtual interfaces. This allows you to use the same connection to access public resources such as objects stored in Amazon S3 using public IP address space, and private resources such as Amazon EC2 instances running within an Amazon Virtual Private Cloud (VPC) using private IP space, while maintaining network separation between the public and private environments. Virtual interfaces can be reconfigured at any time to meet your changing needs.


## Main advantage of Direct Connect over VPN?

Bandwidth & a more consistent network experience! So if you had a side to side VPN you know that they can drop out your VPN can just terminate you need to reconnect your VPN. So you have less reliability. However the main advantage of direct connect is bandwidth you can get a huge amount of bandwidth suppose to using a side to side VPN.

A VPC VPN Connection utilizes IPSec to establish encrypted network connectivity between your intranet and Amazon VPC over the internet VPN Connections can be configured in minutes and are a good solution if you have an immediate need, have low to modest bandwidth requirements, and you can tolerate the inherent variability in Internet-based connectivity. AWS Direct Connect does not involve the Internet; instead, it uses dedicated, private network connections between your intranet and Amazon VPC.

## Direct Connect Benefits

1. Reduce costs when using large volumes of traffic.
2. Increase reliability
3. Increase the amount of bandwidth the you can use to communicate to AWS.

## Direct Connect Connection

Available in 10Gbps, 1Gbps and you can get it below 1Gbps can be purchased through AWS Direct Connect Partners and uses Ethernet VLAN trunking (802.1Q).