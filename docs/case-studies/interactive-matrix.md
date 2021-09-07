---
title: HPE Synergy Firmware Comparison Tool
lang: en-US
---

#  HPE Synergy Software Interactive Matrix

## Problem

The Synergy software team approached my PM and me hoping we could help them solve a problem. HPE Synergy was still a new product, but the software release cadence was causing the information to become difficult to maintain and deliver to customers.


The information the team provided to customers included the software and firmware combinations released in each update package. Due to the potential downtime updating a system causes, customers needed to carefully plan out updates and decide if they were even necessary.

The team collected the software and firmware information in an Excel spreadsheet. When they approached us, they planned to provide customers with their spreadsheet. Of course, we recoiled at the thought. As the documentation team, we were absolutely to find a documentation solution.


Knowing a bit about JavaScript and what's possible on the web, I presented the idea that we could hide all but one column of data to reduce cognitive load. In our initial discussion, the team approved this plan.

## Initial Research

Before started work, I:

- Surveyed the broader Synergy software team to understand how customers work with the data.
- Researched how to output the content from our CCMS to avoid creating a document outside our standard process.

We met with the Synergy team to discuss customer pain points and to understand how we could support the customer's needs.

- Compare two Synergy software packages. They look at the one they're currently on against the most recent version.
- Capture the updated firmware and software to evaluate if updating their system should be done immediately or if they should wait for the next software package.

## Proposal

Based on our research, we proposed:

- Showing two columns of data allowing the customer to compare two software packages. The first column would include the latest software package. The second column allows the customer to select their software package for comparison. If they needed to compare two other packages, they could change the first column to another software package.
- Making the comparison easier by adding a checkbox to highlight the differences. The customer could quickly identify the deltas between two software packages.
- Adding a CSV download button allowing the customer to move the data to Excel or another tool.
- Adding a print button to create a version styled for printing.
- Including a filtered search field, allowing customers to reduce the list to fewer rows.

The Synergy team agreed that this was a good strategy, so we moved forward with the project.

## Implementation

To put the tool together, I researched the JavaScript code required to hide columns in a table. From there, I entered the information software version information into our CCMS.


I'm not much of a coder, but I was able to get the site working just before our first meeting with the team. Luckily, we were near summer, so I was able to work with one of our interns to implement the remaining code and help streamline the code I'd put together.


Eventually, we had a functional prototype with all of the functions we'd promised the team. They were eager to launch the new tool so we prepared it for the next software launch.


We named the tool **HPE Synergy Firmware Comparison Tool**. This firmware comparison tool allows customers to choose and compare two HPE Synergy Custom SPPs. Before this tool was created, the team provided a large Excel spreadsheet to customers.

Before leaving HPE, I developed documentation and training so the team could update and maintain the tool.

[HPE Firmware Comparison Tool](https://techhub.hpe.com/eginfolib/synergy/sw_release_info/C.6.1_IS.6.1.html)

The screen capture shows an HPE Synergy management combination with two selected firmware packages. Checking the **show differences** checkbox causes the firmware differences to display as bold text.

When the page displays, only the latest software package is shown.

![HPE Firmware Comparison Tools](https://chriskpeterson.github.io/vuepress2/public/firmware-tool/synergy-firmware-initial-screen.png)

You choose a software package from the right column, and it displays.

![HPE Firmware Comparison Tools](https://chriskpeterson.github.io/vuepress2/public/firmware-tool/synergy-firmware-choose-spp.png)

Selecting the show difference checkbox highlights the deltas.

![HPE Firmware Comparison Tools](https://chriskpeterson.github.io/vuepress2/public/firmware-tool/synergy-firmware-deltas.png)

Customers can filter the list by entering a term in the text box. For example, they can review firmware for all of the Synergy computer modules.

![HPE Firmware Comparison Tools](https://chriskpeterson.github.io/vuepress2/public/firmware-tool/synergy-firmware-search.png)

## Results

At launch, we received positive feedback from the Synergy software team and the field engineers that work directly with customers. To make it one step better, my PM and I were walking out of work one day and ran into the vice president of the Total Customer Experience and Quality group. She recognized us and thanked us for creating the tool. She said the tool allowed her to understand how the software and firmware worked together.
