---
layout: post
title: Amazon Route53, Powerfull controll on DNS.
date: 2016-02-03
og_image: /images/posts/amazon-route-53.jpg
description: |
  Amazon Route53, A complete DNS control Which allows you to failover between multiple regions.
tags:
- sqs
- amazon
- aws
- service
- pricing
---

## Route 53

Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service and the reason is called the Route 53 is it’s combination of Route 66. Which is the old interstate of first interstate route across the United States but it’s named after port 53 which is the DNS Port that’s how it came to get its name.

## What is Domain Name System?
If you’ve used the internet before, you’ve used DNS. DNS is used to convert human friendly domain names (such as http://example.com) into an Internet Protocol (IP) address (such as http://192.0.2.1)
IP address are used by computers to identify each other on the network. An IP address commonly come in 2 different forms, IPv4 and IPv6.

## Difference between IPv4 and IPv6

The IPv4 space is a 32 bit field and  has  over 4 trillion different addresses (4,294,967,296 the radical addresses to be precise). Then the problem is that we started getting the internet of things there is a lot more devices out there on the internet now and essentially we are running out of IPv4 addresses.

IPv6 was created to solve this depletion issue and has an address space of 128bits which in theory is 340 undecillion addresses it is massively larger than IPv4. Now the problem that moment is that nobody seems to be using IPv6 very prevalently all the ISP’s still use IPv4 to spite us running out of address spaces and it’s really down to the ISP to force uses to start using the IPv6 spite of a cart before the whole scenario and right now you know typically using IPv4 there is clever techniques somewhere you translate IPv4 to IPv6 addresses but as a stands today to spite IPv6 being out for quite of few years now most peoples still use IPv4.

## Top Level Domains

If we look at common domain names such as google.com, bbc.co.uk, izap.in etc  you will notice a string of characters separated by dots (periods). The last word in a domain name represents the “top level domain”.

.com

.in

.edu

.gov

.co.uk

.gov.uk

.com.au

These top level domain names are controlled by the internet Assigned Numbers Authority (IANA) in a root zone database which is essentially a database of all  available top level domain names. You can view this database by visiting – http://www.iana.org/domains/root/db web address and they you can see a list of top level domains.

## Domain Registrars
Because all of the names in a given domain name have to be unique there needs to be  a way to organize this all so that domain names aren’t duplicated. This is where domain  registrars come in. A registrar is an authority that can assign domain names directly under one or more top-level domain names. These domains are registered with  InterNIC, a service  of ICANN, which enforces uniqueness of domain names across the internet. Each domain name becomes registered in a central database  known as the WhoIS database. Popular domain registrars include GoDaddy.com, 123-reg.co.uk etc and Amazon have started you can register name domain name through Amazon now as well.

Common DNS Types
---
Some common DNS types include:

 1. ##### SOA Records :-
    A start of authority (SOA) record is information stored in a DNS zone about that zone. A DNS zone is the part of a domain for which an individual DNS server is responsible (i.e the bit that you store A records, Cnames etc). Each Zone contains a single SOA record.The SOA record stores information about;

<span>The name of the server that supplied the data for the zone.</span>
<span>The administrator of the zone.</span>
<span>The current version of the data file.</span>
<span>The number of seconds a secondary name server should wait before checking for updates.</span>
<span>The number of seconds a secondary name server should wait before retrying  a failed zone transfer.</span>
<span>The maximum number of seconds that a secondary name server can use data before it must either be refreshed or expire.</span>
<span>The default number of seconds for the time-to-live file on resource records.</span>

2. ##### NS Records :-
    NS stands for Name Server records and are used by Top Level Domain servers to direct traffic to the Content DNS server which contains the authoritative DNS records.

3. ##### A Records :- 
    An “A” record is the fundamental type of DNS record and the “A” in A record stands for “Address”. The A record is used by a computer to translate the name of the domain to the IP address. For example http://example.com might point to http://192.0.2.1.    

4. ##### CNAMES :-
    A Canonical Name (CName) can be used to resolve one domain name to another. For example, you may have a mobile website with the domain name http://m.example.com that is used for when users browse to your domain name on their mobile devices. You may also want the name http://mobile.example.com to resolve to this same address. C Names are most commonly used when you want http://www.example.com to resolve to http://example.com (i.e the naked domain name)

5. ##### MX Records :-        
    The MX resource record specifies a mail exchange server for a DNS domain name. The information is used by Simple Mail Transfer Protocol (SMTP) to route emails to proper hosts. Typically, there are more than one mail exchange server for a DNS domain and each of them have set priority.

6. ##### PTR Records :-
    You can think of the PTR record as an opposite of the A record. While the A record points a domain name to an IP address, the PTR record resolves the IP address to a domain name. PTR records are used for the reverse DNS lookup. Using the IP address you can get the associated domain name. An A record should exist for every PTR record.

Route 53 Routing Policy
---
1. ##### Simple :-
    This is the default routing policy when you create a new record set. This is most commonly used when you have a single resources that performs a given function for your domain, for example, one web server that serves content for the http://example.com website. In this example Route53 will respond to DNS queries that are only in the record set (i.e there is no intelligence built in to this response).

2. ##### Weighted :-
    Lets you split your traffic based on different weights assigned. For example you can set 10% of your traffic to go to US-EAST-1 and 90% to go to EU-WEST-1 so you can use weighted based routing.

3. ##### Latency :-
    Latency based routing allows you to route your traffic based on the lowest network latency for your end user (ie which region will give them the fastest response time). To use latency-based routing you create a latency resource record set for the Amazon EC2 (or ELB) resource in each region that hosts your website. When Amazon Route53 receives a query for your site, it selects the latency  resource record set for the region  that gives the user the lowest latency. Route 53 then responds with the value associated with that resources record set.

4. ##### Failover :-
    Failover routing policies are used when you want to create an active/passive setup. For example you may want your primary site to be in US-West-1 and your secondary DR Site in US-East-1. Route53 will monitor the health of your primary site using a health check. A health check monitors the health of your endpoints.

5. ##### Geolocation :- 
    Geolocation routing lets you choose where your traffic will be sent based on the geographic location of your users (ie the location from which DNS queries originate). For example, you might want all queries from Europe to be routed to a fleet of EC2 instances that are specifically configured for your European customers. These servers may have the local language of your European customers and all prices are displayed in Euros.                        


