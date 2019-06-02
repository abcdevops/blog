---
layout: post
title: Amazon Virtual Private Cloud
date: 2016-02-08
og_image: /images/posts/amazon-VPC.jpg
description: |
  Create your infrastructure more secure and more isolated from public cloud.
tags:
- VPC
- amazon
- aws
- service
- pricing
---

## Amazon Virtual Private Cloud Definition

Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the Amazon Web Services (AWS) Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways.

You can easily customize the network configuration for your Amazon Virtual Private Cloud. For example, you can create a public-facing subnet for your web servers that has access to the Internet, and you can place your backend systems such as databases or application servers in a private-facing subnet with no Internet access. You can leverage multiple layers of security, including security groups and network access control lists, to help control access to the Amazon EC2 instances in each subnet.

Additionally, you can create a Hardware Virtual Private Network (VPN) connection between your corporate datacenter and your VPC and leverage the AWS cloud as an extensions of your corporate datacenter.

What Can I Do with a Virtual Private Cloud
---
 1. You can launch instances into a subnet of your choosing this might be EC2 or RDS instances etc.
 2. Assign custom IP address ranges in each subnet so that custom range in each subnet you can also extend that range into subnets if you are choosing you can bring your own  IP address ranges over.
 3. You can configure route tables between subnets.
 4. Create internet gateways and attach them to subnets (or not) if you have an internet gateway and you attach it to a subnet that subnet is publicly accessible by the internet. you can then have other subnets they do not have internet gateway attach to them. That means those subnets do not have internet access you cannot get to the any resources within that directly via that subnet you have go in via different subnets.
 5. You also get much better security control over your AWS resources you actually get two level security

<span>Instance security groups</span>
<span>Subnet network access control lists (ACLS)</span>

Default VPC vs Custom VPC
---
1. Default VPC is user friendly, allowing you to immediately deploy instances.
2. All Subnets in default VPC have an internet gateway attached. So that when we are in different AZ or different subnets if you put it instance inside those different AZ they all had internet access by default.
3. Each EC2 instance has both a public and private IP address
4. If you delete the default VPC the only way to get it back is to contact AWS.

VPC Peering
---
1. Allows you to connect one VPC with another via a direct network route using private IP addresses.
2. Instances behave as if they were on the same private network
3. You can peer VPC’s with other AWS accounts as well as with other VPCs in the same account.
4. Peering is in a star configuration, ie 1 central VPC peers with 4 others. But you can’t do is have say three VPC’s you got VPC1 that peers with VPC2 which then peers with VPC3 but VPC1 would not be able to directly communicate with VPC3. They could only connect to VPC2 that one in the middle.

VPC Restrictions
---
1. You only get 5 Elastic IP addresses per VPC.
2. 5 Internet Gateways.
3. You can have 5 VPCs per region (can be increased upon request)
4. 50 VPN connections per region.
5. 50 Customer Gateways per region.
6. 200 Route tables per region.
7. 100 Security Groups per VPC.
8. 50 Rules per security group.

VPC Creation Summary
---
  1. We created a custom VPC.
      
<span>Defined our IP Address Range so we did that using our CIDR 10.0.0.0/16 that was our IP address range.</span>
<span>By default this created a Network ACL & Route</span>
  2. Created a Custom route table.
  3. Created 3 Subnets 10.0.1.0/24, 10.0.2.0/24 and 10.0.3.0/24 .
  4. We then created an Internet Gateway.
  5. Attached our Internet Gateway to our VPC and then we essentially created a custom route table. Then without route table we created a outbound route to that internet Gateway.
  6. Adjusted our public subnet to use the newly defined route.
  7. Provisioned an EC2 instances with an Elastic IP address that was in our public subnet we also create an EC2 instances in our private subnet. One thing that comes up again and again is just because of an EC2 instances in your public subnet doesn’t mean that has access to the internet you needed to either have an Elastic IP Address or to have an Elastic Load Balancer attach to it. So just remember that you put an EC2 instances in a public subnet doesn’t mean that has internet by default.

NAT Summary
---
1. Created a security group
2. Allowed inbound connections to 10.0.1.0/24 and 10.0.2.0/24 on HTTP and HTTPS
3. Allowed outbound connections on HTTP and HTTPS for all traffic.
4. Provisioned our NAT instance inside our public subnet.
5. We Disable Source/Destination Check for the NAT instance. That’s the way you get the NAT instance to work. You have to disable the source/destination check.
6. Setup up a route on our private subnets to route through the NAT instance    

ACL Summary
---
1. ACLs can be across multiple subnets.
2. But Subnets can only have 1 NACL.
3. ACLs encompass all security groups under the subnets associated with them.
4. Rule Numbers, Lowest is incremented first.



