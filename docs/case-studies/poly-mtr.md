---
title: Poly Solutions for Microsoft Teams Rooms Samples
lang: en-US
---

# Poly Solutions for Microsoft Teams Rooms

**Role:** Lead writer

**Tools:** Adobe Illustrator, Oxygen, and Vasont


## Problem

Customers were provided units to test before purchasing. The customers were returning the conferencing systems with the complaint that they didn't know how to set them up. Our documentation was insufficient.

My manager asked me to pick up a unit from the office to set up in my home lab. I went through the setup procedure and found multiple gaps in the documentation.

This was a case of trying to figure out what we should document for a third-party application. Depending on the third party to provide sufficient documentation may lead to customer dissatisfaction.

## Research

I picked up a demo unit from the office and set it up in my home lab. The team insisted that this product needed very few instructions, so the program's writer complied by creating a simple PDF setup sheet. Going through the setup process, it was clear that critical information was missing.

Going through the system setup, I noted:

* We were missing critical information on our setup sheet.
For example, that default admin password.
* We made assumptions about what the customer knows and about the usability of Microsoft's help center.
* Cabling is complex and can't be adequately shown in one diagram.
* The conferencing system shipped with so many cables that figuring out where they went was difficult.

I created a quick task flow diagram to show how similar the setup is for each solution.

![MTR Bundles Setup Diagram](https://chriskpeterson.github.io/vuepress2/public/MTR-diagram.png)

## Solution

I created a single HTML deliverable that included the information for each of the conferencing systems. The setup for each is almost identical. The only difference is the camera.

The first iteration of this guide chunked the cabling steps together in a choose your own adventure style. As supported components were added, the solution guide became difficult to follow. To update the guide, I grouped the cabling procedures for each solution separately. The DITA OpenToolkit transform doesn't like including a topic more than once, so I had to figure out how to get past it. After reading the DITA spec and some trial and error, I found the solution.

Now, the individual solutions into separate chunked topics. By separating the solutions setup instructions, customers can more easily identify and capture only the information they need.

Poly Solutions for Microsoft Teams Rooms Solution Guide
https://documents.polycom.com/bundle/mtr-sg-current
