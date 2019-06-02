---
layout: post
title: Amazon DynamoDB - NoSQL database for faster response time
date: 2016-02-17
og_image: /images/posts/amazon-dynamoDB.jpg
description: |
  Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key-value and document data structures
tags:
- sqs
- amazon
- aws
- service
- pricing
---

## DynamoDB 

Amazon DynamoDB is a fast and flexible No-SQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed database and supports both document and key-value data models. It’s flexible data model and reliable performance make it a great fit for mobile, web, gaming, ad-tech, IoT, and many other applications.

DynamoDB Configuration
---
1. It’s always going to be stored on SSD storage. So there is no magnetic storage you going to get very good and very high IOPS from it.
2. It is Spread Across 3 different geographically distinct data centers. So if you write a database you write a record to a particular a AZ that is going to be replicated across to your other two AZ and in terms of that replication you can choose between two options;
    
<span>Eventual Consistent Reads</span>
<span>Strongly Consistent Reads</span>

## Difference Between Eventual Consistent Reads and Strongly Consistent Reads

## Eventual Consistent Reads :-

Consistency across all copies of data is usually reached within a second. Repeating a read after a short time should return the updated data. (Best Read Performance). So this means that when you run a read query against your database you might be querying at two unavailability zone that has not yet had that data that is been from the initial write which should be another AZ has not been replicated across. So let say you are writing your data to AZ-(A) and then when you going to read the database it might not be the in AZ-(B) depending on the length of the time between that write and that read that would be Eventual Consistent.  

## Strongly Consistent Reads :-    

A strongly consistent read returns a result that reflects all writes that received a successful response prior to the read. So with Strongly Consistent Reads you would not get the same read performance you get with the Eventual Consistent Reads but you do more less guarantee reflect that after somebody has written record to AZ-(A) nobody would be able to read that record in AZ-(B) into has been replicated across. So just keep that in mind when you designing your application whether or not (We are talking about millisecond you know we are not talking within a seconds) so it’s really up to you and your application team is to which one the you would choose most people choose the default which is you know we can afford for my data to be out of date or not replicated within a second so that its Eventual Consistent Reads.

Pricing
---
1. Provisioned Throughput Capacity
    
<span>Write Throughput $0.0065 per hour for every 10 units.</span>
<span>Read Throughput $0.0065 per hour for every 50 units.</span>

2. Storage costs of $0.25Gb per month.

## Pricing Example

Let’s assume that your application needs to perform 1 million writes and 1 million reads per day, while storing 3GB of data.

First, you need to calculate how many writes and reads per second you need. 1 million evenly spread writes per day is equivalent to 1,000,000 (writes) /24 (hours) /60 (minutes) /60 (seconds) = 11.6 writes per second.

A DynamoDB Write Capacity Unit can handle 1 write per second, so you need 12 Writes Capacity Units. Similarly, to handle 1 million strongly consistent reads per day, you need 12 Read Capacity Units.

Using on-demand pricing in the US East (N. Virginia) Region. You got 12 Write Capacity Units would cost $0.1872 per day and 12 Read Capacity Units would cost $0.0374 per day. So your total cost of provisioned throughput capacity is $0.1872 + $ 0.03474 = $0.2246 per day. Storage costs $0.25 per GB per month.

Assuming a 30-day month, your 3GB would cost you 3 * $0.25/30 = $0.025 per day. Combining these numbers, the total cost of your DynamoDB table would be $0.2246 (for provisioned throughput capacity) + $0.025 (for storage) = $0.2496 per day or $7.50 per month.

    

