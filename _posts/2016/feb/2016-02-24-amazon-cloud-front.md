---
layout: post
title: Amazon Cloud Front - serve static assets from the closest place.
date: 2016-02-24
og_image: /images/posts/amazon-cloud-front.jpg
top_story: true
description: |
  Amazon CloudFront is a content delivery network offered by Amazon Web Services. Content delivery networks provide a globally-distributed network of proxy servers which cache content, such as web videos or other bulky media, more locally to consumers, thus improving access speed for downloading the content. 
tags:
- CloudFront
- CDN
- amazon
- aws
- service
- pricing
---
## CDN:-

A Content Delivery Network (CDN) is a system of distributed servers (network) that deliver web pages and other web content to a user based on the geographic locations of the user, the origin of the webpage and a content delivery server. Now, let’s look at a practical example if i am in Australia let say i am in Perth for example and i want access the server in New York that server has image files on it in order get those image files the actual image files have to be served across the Atlantic then across the Indian ocean in order to reach Perth and every 200Kms equals to approximately 1 millisecond length of time latency so it’s take me a little bit of time for those files to physically arrived for New York to Perth a even operating a speed of light it’s gonna be a longer time than a files viewing those files directly from a server in Perth so our Content Distribution Network does its every time a user in Perth tries to access those files in New York CDN cache those files add a server in Perth for the length of time. Now a new user goes to access the same files they can just get it from Perth server they don’t have to go halfway around the world to pull down the same files. Those files will be cached depending on the settings but you set was called it time to live (TTL) and that’s measured in seconds you can set on your CDN you can set TTL on your files to say how long you are going to cache them. So that a really high overview what CDN is and CloudFront is Amazon CDN.

Amazon CloudFront can be used to deliver your entire website, including dynamic, static, streaming, and interactive content using a global network of edge locations. Requests for your content are automatically routed to the nearest edge location, so the content is delivered with the best possible performance.

Amazon CloudFront is optimized to work with other Amazon Web Services, like Amazon Simple Storage Service (Amazon S3), Amazon Elastic Compute Cloud (Amazon EC2), Amazon Elastic Load Balancing, and Amazon Route 53. Amazon CloudFront also works seamlessly with any non-AWS origin server, which stores the original, definitive versions of your files.

CloudFront Terminology
---
 1. ##### Origin –
    This is the origin of all the files that the CDN will distributed. This can be either an S3 Bucket, an EC2 Instance, an Elastic Load Balancer or Route53.
 2. ##### Distribution – 
    This is the name given the CDN which consists of a collection of Edge Locations. You can have 1 distribution with multiple origins and good example of this would be where buy to trying to serve a dynamic website and may be your image files or stored flat static files that be stored in an s3 bucket. You also running a PHP application it does not refresh to often and you want to cache the output of those PHP files you can create a separate origin server which should be an EC2 instance for example and then any PHP files would come from your EC2 instance image file comes from your S3 buckets. You can also have multiple S3 buckets with different files types perhaps you have an S3 buckets for your pdf files we have a separate S3 buckets for application users will download. So you can have 1 distribution will multiple origins.

CloudFront Distribution Types
---
1. ##### Web Distribution – 
  Typically used for websites
  
  <span>Speed up distribution of static and dynamic content, for example, .html, .css, .php, and graphics files.</span>
  <span>Distribute media files using HTTP or HTTPS.</span>
  <span>Add, update, or delete objects, and submit data from web forms.</span>
  <span>Use live streaming to stream an event in real time.</span>
  <span>You store your files in an origin — either an Amazon S3 bucket or a web server. After you create the distribution, you can add more origins to the distribution.</span>  

2. ##### RTMP – 
  RTMP distribution to speed up distribution of your streaming media files using Adobe Flash Media Servers RTMP protocol. An RTMP distribution allows an end user to begin playing a media file before the file has finished downloading from a CloudFront edge location. Note the following:

  <span>To create an RTMP distribution, you must store the media files in an Amazon S3 bucket.</span>
  <span>To use CloudFront live streaming, create a web distribution.</span>