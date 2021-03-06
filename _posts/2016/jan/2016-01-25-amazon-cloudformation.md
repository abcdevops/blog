---
layout: post
title: AWS CloudFormation - Infrastructure as Code &amp; AWS Resource Provisioning
date: 2016-01-25
og_image: /images/posts/amazon-cloudformation.jpg
main_image: /images/blog-detail/cloudformation.jpg
top_story: true
description: |
  AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. 
tags:
- CloudFormation
- automation
- stack
- amazon
- aws
- service
- pricing
---

## Amazon CloudFormation

AWS CloudFormation an easy way enable you to create and manage a collection have AWS resources using a templating language called CloudFormation templating language. <!--more-->
That template allow you to provision and update AWS resources in an orderly predictable and repeatable fashion not unable to version control your AWS infrastructure following a trend which is becoming more widespread now actually it was when cloudformation was first created which is to be define the infrastructure that support your application as code version controlling to infrastructure in the same way that you might version control releases of your code base so releases of static data might be incorporated into your application enables you to deploy and updates stack using either the Amazon Web Services console the command line all the API and of course the API is wrapped by a variety of different SDK python, dotnet, go was recently released and others so you can control cloud formation using those three different mechanisms and in common with I think all AWS deployment and management tools you only pay for the resources that you create with AWS CloudFormation. So CloudFormation itself is a service without charge but as in when you creates resources within your account you’re them charge for the resources this service creates because quite important to bear in mind.

The simple basic characteristics really AWS cloudformation firstly you don’t need to reinvent the wheel so with AWS cloudformation templates create you can use the repeatedly to create a identical copies of the same stack or maybe is the foundation to start a new stack every resources you want to create you can capture and control region specific variations such as EC2 AMI Amazon machine image ID’s, Elastic Block Storage volumes, Relational Database Service snapshot names within your templates so it allows you to have this characteristics every use. The templates themselves are simple JSON formatted text files obviously means as we said earlier that you can place these in the normal source all version control mechanisms install that in public or private locations such as Amazon S3 exchanged via email and you can take a look at these templates and see exactly which AWS resources make up the stack that you gonna create. you have full control to modify and you have the resources that created as part of the stack either by changing the template itself in doing an update or by working directly with the AWS resources themselves.

The templating language is declarative and it’s flexible so you can create whatever infrastructure you wanna essentially AWS resources configuration values interconnections the you might need within your template and then in you can AWS cloudformation carry the heavy lifting of creating those resources just by executing that template by the management console using the command line interface that we provide all by a single request to the AWS API then you are have to remember the details of the resources in that stack for future creation activities once you’re in that template you can use as many times as you wish course and in many cases you won’t need to write these templates from scratch sample templates provides some really good resources for example templates you can use either us a whole solution stack creation activities or as a baseline from which you might derive a modified stack that suits your purpose exactly so definitely you can take a look at making use of those sampled.

You have the ability to customize stack so you got execution time parameters that you can pass to your template runtime essentially when the stack is below parameters so could pass in things like RDS database size of instance types database a web server port numbers this can enable you to use parameterized templates to create multiple stacks the different in controlled ways obviously very good if you all for example using one stack definition to create development and production environment in the scenario you may wish to create development with small EC2 instance type then production environment order to help you cost optimize as effectively as possible you may want to do different things in different regions where you creating stacks and you can use these templates parameters to tune settings and thresholds in each region independently of one another while still maintaining consistent infrastructure deployment across different region or different environments that’s a really helpful feature of this service.

You got integration ready capabilities so you can integrate cloud formation with development and management tools of your choice whether that’s a CI. CD deployment tool or other development management tools that you might use the programmatic access to cloud formation via CLI SDK’s API’s makes that very simple to do and cloud formation publishes progressive through another service called the Amazon Simple Notification Service so you not only can you initiate stack creation actions or update or deletion action using those programmatic interfaces be can also track stack creation and deletion progress by email or integrate with those updates programmatically using other interfaces mechanisms that are available such really helpful for integration and there’s no charge for cloud confirmation in its own right your only pay for the resources that cloud formation creates your application uses to you to operate so cloud formation itself is available at no additional charge.
