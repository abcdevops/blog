---
layout: post
title: ABCDevOps - Amazon Simple Workflow
date: 2016-01-27
og_image: /images/posts/amazon-simple-workflow.jpg
top_story: true
description: |
  
tags:
- sqs
- amazon
- aws
- service
- pricing
---

Amazon Simple Workflow :-
---
  Amazon Simple Workflow Service (Amazon SWF) is a web service that makes it easy to coordinate work across distributed application components. Amazon SWF enables applications for a range of use cases, including media processing, web application backend, business process workflows, and analytic pipelines, to be designed as a coordination of tasks. Tasks represent invocations of various processing steps in an application which can be performed by executable code, web service calls, human actions, and scripts. Now, the most important things to take out that statement  is human actions vs SQS is automated to telling web server our web server telling a message queue that an image’s been uploaded needs to be watermarked SWF is broken down into a series of tasks. Amazon actually use SWF service inside their distribution centers when workers given a task to go and locate a particular object and get it ready for package and sending to a person you know he might about DVD for example you know toy or something so is not entirely programmatically you know it can be used in warehouses and distribution centers it doesn’t instruction of computers it can involved human actions that task simply be go to sec. 34E of this distribution warehouse and pick up item number 104 and then tape that item pack to the posting in packing area that would be a task it’s assigned to human workers so that’s the main difference between simple workflow service and simple queue service.


SWF vs SQS
---
  1. Amazon SWF presents a task-oriented API, whereas Amazon SQS offers a message-oriented API.
  2. Amazon SWF ensure that a task is assigned only once and is never duplicated. With Amazon SQS, you need to handle duplicated message is processed only once.
  3. Amazon SWF keeps track of all the tasks and events in an application. With Amazon SQS, you need to implement your own application-level tracking, especially if your application uses multiple queues.