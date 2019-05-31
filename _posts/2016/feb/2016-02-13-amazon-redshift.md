---
layout: post
title: ABCDevOps - Amazon Redshift
date: 2016-02-13
og_image: /images/posts/amazon-redshift.jpg
top_story: true
description: |
  
tags:
- sqs
- amazon
- aws
- service
- pricing
---

## Amazon Redshift

Amazon Redshift is a fast and powerful, fully managed, petabyte-scale data warehouse service in the cloud. Customers can start small for just $0.25 per hour with no commitments or upfront costs and scale to a petabyte or more for $1,000 per terabyte per year, less than a tenth of most other data warehousing solutions.

Configuration of Redshift
---
1. You start with the Single Node which is 160Gb.
2. Then you can scale to Multi-Nodes

    <span>Leader Node (manages client connections and receives queries).</span>
    <span>Compute Node (store data and perform queries and computations). So with Redshift you can have up to 128 Compute Nodes but you can just start with the single node which combines the leader node and compute node into one row but you can then scale out.</span>

10 Times Faster
---
1. ##### Columnar Data Storage:- 
Instead of storing data as a series of rows, Amazon Redshift organizes the data by column. Unlike row-based systems, which are ideal for transaction processing, column-based systems are ideal for data warehousing and analytics, where queries often involve aggregates performed over large data sets. Since only the columns involved in the queries are processed and columnar data is stored sequentially on the storage media, column-based systems require far fewer I/Os, greatly improving query performance.

2. ##### Advanced Compression:-
Columnar data stores can be compressed much more than row-based data storesbecause similar data is stored sequentially on disk. Amazon Redshift employs multiple compression techniques and can often achieve significant compression relative to traditional relational data stores. In addition, Amazon Redshift doesn’t require indexes or materialized views and so uses less space than traditional relational database systems. When loading data into an empty table, Amazon Redshift automatically samples your data and selects the most appropriate compression scheme.

3. ##### Massively Parallel Processing (MPP):- 
Amazon Redshift automatically distributes data and query load across all nodes. Amazon Redshift makes it easy to add nodes to your data warehouse and enables you to maintain fast query performance as your data warehouse grows.

Pricing
---
1. Compute Node Hours (total number of hours you run across all your compute  nodes for the billing period. You are billed for 1 unit per node per hour, so a 3-node data warehouse cluster running persistently for an entire month would incur 2,160 instance hours. You will not be charged for leader node hours; only compute nodes will incur charges.)
2. Backup
3. Data transfer (only within a Virtual Private Cloud, not outside it)

Security
---
1. Encrypted in transit using SSL
2. Encrypted at rest using AES-256 encryption

    <span>By default RedShift takes care of keys management.</span>
    <span>Manage your own keys through Hardware Security Models.</span>
    <span>AWS Key Management Service.</span>

Availability
---
1. Currently only available in 1AZ.
2. If you do lose AZ you can restore snapshots to new AZ’s so that’s the way you can get some kind of redundancy that is not automatic that is a manual process.

