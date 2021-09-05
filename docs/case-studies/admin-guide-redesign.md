---
title: Administrator Guide Rewrite
lang: en-US
---

# Administrator Guide Rewrite (Poly)

The current administrator guides don’t show customers how to perform tasks. Instead, they’re a mix of resource and parameter topics requiring a customer to look through lists of parameters and figure out which ones they need to configure their phones.

## Problem

I noted in the past that, as a new employee, it was difficult to use our documentation to set up and configure a phone. I felt we needed a task-based guide that provided clear instructions on:

* Steps required to get the phone working so you can make a call
* Recommended configuration tasks such as security and networking
* Additional features and settings an administrator may want to utilize

### Example From the Previous Guide

The following is an example of the previous topic on server-based do not disturb. Imagine a customer wanting to configure server-based do not disturb.

![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/dnd-concept.png)

![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/dnd-server-concept.png)

The customer would then have to figure out which parameter they needed to configure the server-based do not disturb features.

![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/dnd-parameters.png)

This structure did not lend itself to being an administrator guide. It looked more like a parameter reference guide.

## Process

I proposed this project to management and the team detailing the requirements in a presentation and documentation plan. Customers want the information they need to be quick to find and easy to follow. I soon found out this is something the team has tried to complete in the past, but they didn't get very far in the process.

Once the project kicked off, we met with the program manager and SMEs, reviewed our community forums, and researched competitors' administrator guides.

I worked on a new task template, including the structure of the parameters referenced in the topics. I brought template ideas to our biweekly IA meetings where we decided on a final structure. Once agreed upon, I constructed the template in our CCMS.

Another coworker took on the project management role because this project was for voice guides, and I was working on video products. I took on a supporting role. The voice products writing team banded together and worked on the topics. Rewriting the topics required that the writers gain a better understanding of the features, which often resulted in SME consultations.

After six months of hard work, outside of program work, the first two guides were complete.

## Solution

The team delivered a reworked administrator guide using task-based instructions to better guide customers in using parameters and achieving their goals.

### Example from the new guide:

The new guide provides the instructions, including all parameters required to enable and configure the feature.

![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/dnd-server.png)

The guide follows this task-based model throughout. The parameter lists were moved to a separate parameter reference guide.

To simplify the maintenance of our parameter guide, I started a project to convert the main parameter XML file into an HTML deliverable. I created an XSL transform and styled the page somewhat to show that it's possible. However, I wasn't able to continue this project. Many of the definitions were not filled in, and the team didn't have the bandwidth to start the work.


![Previous Administrator Guide consistent](https://chriskpeterson.github.io/vuepress2/public/admin-guide-rewrite/param-html.png)
