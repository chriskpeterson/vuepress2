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

Going through system setup, I noted:

* We were missing critical information. For example, the default admin password.
* We made assumptions about what the customer knows about Microsoft Teams Rooms licensing.
* Cabling was too complex and can't be adequately conveyed in one diagram. The conferencing system shipped with so many cables that figuring out where they went was difficult.

My initial thought was that the guide should be an HTML deliverable. The PDF setup sheet was an online deliverable and not printed as in-the-box content.

First, I created a quick task flow diagram to show how similar setup is for each solution. This allowed me to convince the team to move forward with one setup document for each of the three conferencing systems.

![MTR Bundles Setup Diagram](https://chriskpeterson.github.io/vuepress2/public/MTR/MTR-diagram.png)

I mocked up an HTML version of the setup content with step-by-step cabling instructions. The team agreed to move forward with the new format, so I moved the content into our CMS to create a guide for formal review.

## Project

The first iteration of this guide chunked the cabling steps together in a choose your adventure style. As the team added supported components, the solution guide became difficult to follow. For better usability, I grouped the cabling procedures for each solution separately. The DITA OpenToolkit transform doesn't like including a topic more than once, so I had to figure out how to make it work. After reading the DITA spec and with some trial and error, I found the solution.

Now, the guide chunks the individual conferencing system cabling instructions into separate HTML pages. By separating the solutions setup instructions, customers can more easily identify and capture only the information they need.

Poly Solutions for Microsoft Teams Rooms Solution Guide

![MTR Bundles Setup Diagram](https://chriskpeterson.github.io/vuepress2/public/MTR/mtr-1.png)

The guide includes a step-by-step walkthrough of the cabling procedure.

![MTR Bundles Setup Diagram](https://chriskpeterson.github.io/vuepress2/public/MTR/mtr-step-through.png)

## Results

The sales enablement team reported that customers were no longer returning the conferencing systems. The solution architect team also provided positive feedback on the new documentation design.

https://documents.polycom.com/bundle/mtr-sg-current
