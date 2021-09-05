


# HPE Synergy Software Solutions Interactive documentation


## Problem



Customers were confused about which firmware for the many components was compatible with each other. The HPE Synergy software team needed help providing an easy view of the compatible firmware and software. At the time they contacted my team, their proposal was to send a large Excel spreadsheet to customers.

In addition to the firmware comparison tool, the team needed a way to communicate additional information include the supported upgrade paths for the main HPE Synergy software..


## Research

I immediately thought that we could build on the filter table already added to the HPE ConvergedSystem compatibiliy matrix. However, we'd also need a way to show only portions of the large fifteen column table on the screen.

I spoke to the members of the software team to identify how customers use the matrix and what their painpoints were. The team indicated that customers want to compare one recipe with another. Their goal is to figure out which components received a firmware update in the new recipe.

Second, customers want to download a CSV version of the two recipes their comparing so they can do additional research as to what might be affected when they update their system.

They refer to this list of compatible firmware as recipes. To make things a bit more confusing, certain recipes are only compatible with the main HPE Synergy software.






## Solutions




**Tools**: SDL, VS Code, and XMetaL

This firmware comparison tool allows customers to choose and compare two HPE Synergy Custom SPPs. Before this tool was created, the team provided a large Excel spreadsheet to customers.

Before leaving HPE, I developed documentation and training so the team could update and maintain the tool.

[HPE Firmware Comparison Tool](https://techhub.hpe.com/eginfolib/synergy/sw_release_info/C.6.1_IS.6.1.html)

The screen capture shows an HPE Synergy management combination with two selected firmware packages. Checking the **show differences** checkbox causes the firmware differences to display as bold text.

![HPE Firmware Comparison Tools](https://chriskpeterson.github.io/vuepress2/public/HPE-firmware-comparison-tool.png)
