---
title: HPE Synergy Cabling Guide
lang: en-US

---


# HPE Synergy Cabling guide

When I started working on this project, the first version of the HPE Synergy Cabling Guide was already released. I had to learn about the product and see what improvements I could make.

## Research

The first thing I did was make sure the cabling diagrams were correct. After talking to SMEs, I found that the cabling guide did not show every cable required for each configuration. In addition:

* Some cabling scenarios didn't include additional cabling required for some configurations
* The cabling diagrams included every cable in one illustration even though the cabling task listed each cabling step separately.

## Project

When working on documentation strategy, I prefer to keep the content simple and easy to maintain. Initially, I wanted to create an interactive cabling guide with a checkbox for each cable. However, it wasn't clear the interactivity would provide any value. Programming the interactivity would be another issue.

To keep the guide simple, I created a topic for each cabling scenario. Each step in the task included a cabling illustration.

* Each cabling scenario included a step-by-step cabling guide.
* At the end of the walkthrough, a final illustration showed all the cables.
* I included every component that the system required for each scenario.
* I used colors to differentiate the cables.
* For accessibility, each illustration included alt text. The step-by-step instructions also provided better textual guidance.
* The final diagram is not ideal for colorblind customers, but the step-by-step instructions don't rely on colors as they show each step one by one.

The following is an example of one of the more complex cabling diagrams. In the original guide, this cabling scenario didn't include all of the required cables.

![HPE Synergy Cabling Diagram](https://chriskpeterson.github.io/vuepress2/public/synergy-cabling/image-streamer-five-frame.png)

The following three illustrations show the step-by-step cabling in the updated guide.

![HPE Synergy Cabling Diagram](https://chriskpeterson.github.io/vuepress2/public/synergy-cabling/synergy-3-frame-link-port-cabling.png)

![HPE Synergy Cabling Diagram](https://chriskpeterson.github.io/vuepress2/public/synergy-cabling/synergy-3-frame-mgmt-port-cabling.png)

![HPE Synergy Cabling Diagram](https://chriskpeterson.github.io/vuepress2/public/synergy-cabling/synergy-3-frame-all-cables.png)

## Results
For this project, I wasn't able to evaluate the success of the updated guide. However, from internal audiences, I received positive feedback. I presented our Synergy documentation plan at a field engineer training session and received positive feedback from the field engineers.
