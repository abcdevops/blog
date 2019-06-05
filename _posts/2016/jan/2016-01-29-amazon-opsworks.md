---
layout: post
title: AWS OpsWorks – Configuration Management - Amazon Web Services
date: 2016-01-29
og_image: /images/posts/amazon-opsworks.jpg
main_image: /images/blog-detail/opswork.jpg
description: |
  AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. Chef and Puppet are automation platforms help to provision your application requirements.
tags:
- OpsWorks
- Chef
- Puppet
- amazon
- aws
- service
- pricing
---

## What is OpsWorks?

Cloud-based applications usually require a group of related resources – web servers, application servers, database servers, and so on – that must be created and managed collectively. This collection of instances is called a stack.

AWS OpsWorks provides a simple and straightforward way to create and manage stacks and their associated applications and resources.

Amazon Definition – AWS OpsWorks is an application management service that helps you automate operational tasks like code deployment, software configurations, package installations, database setups, and server scaling using Chef. OpsWorks gives you the flexibility to define your application architecture and resource configuration and handles the provisioning and management of your AWS resources for you. OpsWorks includes automation to scale your application based on time or load, monitoring to help you troubleshoot and take automated action based on the state of your resources, and permissions and policy management to make management of multi-user environments easier.

OpsWorks is GUI to deploy and configure your infrastructure quickly. OpsWorks consists of two elements, Stacks and Layers.

A stack is a container ( or group) of resources such as ELBs, EC2 Instances, RDS instances etc.

A layer exists within a stack and consists of things like a web application layer. An application processing layer or a database layer.

When you create a layer, rather than going and configuring everything manually (like installing Apache, PHP etc) OpsWorks takes care of this for you.

Layers
-----
  1. You need 1 or more layers in the stack
  2. An instance must be assigned to at least 1 layer. So if you got EC2 instances has to be in the web server layer or the application layer or in the database layer.
  3. Which chef layers run, are determined by the layer the instance belongs to so if you pushing out an update to your code these things are code recipe essentially there are only going to be applied to the layers that you push those updates out to.
  4. OpsWorks gives you whole bunch of Preconfigured Layers include;
  
<span> Applications Layers</span>
<span> Databases Layers </span>
<span> Load Balancers Layers</span>
<span> Caching Layers</span>