---
layout: post
title: ABCDevOps - Amazon ElastiCache
date: 2016-02-15
og_image: /images/posts/amazon-elasticache.jpg
top_story: true
description: |
  
tags:
- sqs
- amazon
- aws
- service
- pricing
---

## ElastiCache :- 

ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud. The service improves the performance  of web applications by allowing you to retrieve information from fast, managed, in-memory caches, instead of relying entirely on slower disk-based database. ElastiCache supports two open-source in-memory caching engines:

## ElastiCache – Use Cases

Amazon ElastiCache can be used to significantly improve latency and throughput for many read-heavy application workloads (such as social networking, gaming, media sharing and Q&A portals) or compute-intensive workloads (such as a recommendation engine). Caching improves application performance by storing critical pieces of data in memory for low-latency access. Cached information may include the results of I/O-intensive database queries or the results of computationally-intensive calculations. If data does not change regularly and it’s ok the cache you would use ElastiCache can take load of your database service running computation service your are running and that’s by you would use it.

ElastiCache Use Two Different Engines
---

1. ##### Memcached

    <span>A widely adopted memory object caching system. ElastiCache is protocol complaint with Memcached, so popular tools that you use today with existing Memcached environments will work seamlessly with the service.
    </span>

2. ##### Redis

    <span>A popular open-source in-memory key-value store that supports data structures such as sorted sets and lists. ElastiCache supports Master/Slave replication and Multi-AZ which can be used to achieve cross AZ redundancy.
    </span>    
