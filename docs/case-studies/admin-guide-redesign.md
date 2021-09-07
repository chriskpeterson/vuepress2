---
title: Administrator Guide Rewrite
lang: en-US
---

# Administrator Guide Rewrite (Poly)

The current administrator guides don’t show customers how to perform tasks. Instead, they’re a mix of resource and parameter topics requiring a customer to look through lists of parameters and figure out which ones they need to configure their phones.

## Problem

As a new employee, I brought up the fact that that it was difficult to use our documentation to set up and configure a phone. I felt we needed a task-based guide that provided clear instructions on:

* Steps required to get the phone working so you can make a call
* Recommended configuration tasks such as security and networking
* Additional features and settings an administrator may want to utilize

### Example From the Previous Guide

The following is an example of a feature topic set from the previous guide. As a customer, if my goal is to configure server-based do not disturb, I'll spend unnecessary time figuring out what to do.

![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/dnd-concept.png)

![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/dnd-server-concept.png)

The customer would then have to figure out which parameter they needed to configure the server-based do not disturb features.

![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/dnd-parameters.png)

This structure did not lend itself to being an administrator guide. It looked more like a parameter reference guide.

## Proposal

I proposed the idea to management that we rewrite the guide to be task-based. When I brought this idea to my manager, she indicated that they'd try to create a task-based guide a few times previously. She was ready to see it completed, so she gave an adamant approval. With the project approved, I created a presentation and some initial concepts on how the topics and document would be structured.

## Project

With the team in agreement we should convert the guide, my peers on the voice team each took a role in the project's success. We kicked off the project by meeting with the program manager and SMEs. We reviewed our community forums and researched competitors' administrator guides.

I worked on a new task template, including the structure of the parameters referenced in the topics. I brought template ideas to our biweekly IA meetings where we decided on a final structure. Once agreed upon, I constructed the template in our CCMS.

Another coworker took on the project management role. At the time, I had moved to write for video products, and this project was for the voice product administrator guide. In my supporting role, I worked with the team to rewrite the topics. Rewriting the content provided additional clarity into how difficult it must be for customers to follow the guide. In most cases, we had to consult with SMEs to detangle the content.

After six months of hard work, outside of our program work, the first two guides were complete.


### Example from the new guide:

The new guide provides the instructions, including all parameters required to enable and configure the feature.

![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/dnd-server.png)

The guide follows this task-based model throughout. The parameter lists were moved to a separate parameter reference guide.

To simplify the maintenance of our parameter guide, I started a project to convert the main parameter XML file into an HTML deliverable. I created an XSL transform and styled the page somewhat to show that it's possible. However, I wasn't able to continue this project. Many of the definitions were not filled in, and the team didn't have the bandwidth to start the work.


![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/param-html.png)

## Results

The guide hasn't been out long enough to capture meaningful customer analytics. However, the team has received positive feedback from the product teams and management. In addition, the writers now have a better understanding of the features and topics for the products they support.
