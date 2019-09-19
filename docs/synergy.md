# HPE Synergy

## Start Here Poster

This is something I worked on recently to provide a high-level overview of the complete process to install the hardware and software for HPE Synergy. This project involved taking a 20" x 30" poster and both condensing the content and adding addition content. This was a insightful exercise in brevity. 

------
![Start Here Poster page 1](https://chriskpeterson.github.io/vuepress2/public/starthereposter1.PNG)
------
------
![Start Here Poster page 2](https://chriskpeterson.github.io/vuepress2/public/starthereposter2.PNG)
------

A few topics from the poster.

## 3. Configure the hardware in HPE OneView

The following steps provide an overview of the initial setup of HPE OneView.
For detailed steps, see "Quick Start: Initial configuration of HPE OneView" in the *HPE OneView Help for HPE Synergy*.

### 3a. Create a network

------

**IMPORTANT**: Define a SAN Manager before creating an FC or FCoE network.

------

Create networks to define connections that route data across the IT infrastructure. You can create a single Ethernet , Fibre Channel, or FCoE network or multiple, tagged Ethernet networks at one time.
Before creating networks, be aware of the networking maximums. For more information, see the HPE OneView Support Matrix for HPE Synergy.

To create a network, select **OneView** > **NETWORKING** > **Networks**.



### 3b. Create a logical interconnect group

One or more logical interconnect groups are associated with an enclosure group and are used to define the logical interconnect configuration for every enclosure that is using that enclosure group.

To create a logical interconnect group, select **OneView** >
**NETWORKING** > **Logical Interconnect group**.



### 3c. Define an enclosure group

------

**NOTE:** For solutions that include HPE Synergy Image Streamer, create the HPE Image Streamer cluster in Deployment Servers before creating the enclosure group.

------

------

**NOTE:** Uploading a firmware bundle before creating a logical enclosure is recommended. However, you can choose to add a firmware bundle later, in step "4b. Add a firmware bundle to the appliance firmware repository".

------

An enclosure group is a logical resource that defines a consistent configuration for an enclosure or a set of enclosures making up a logical enclosure. The network connectivity for an enclosure group is defined by the logical interconnect groups associated with the enclosure group.

An enclosure group can contain up to five enclosures.

To add an enclosure group, select **OneView** > **SERVERS** > **Enclosure**
**groups**.