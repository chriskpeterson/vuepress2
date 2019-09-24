# HPE Synergy

**Role:** Lead writer

**Tools:** SDL, XMetaL, Adobe Illustrator

------

For this program, I work on solution-level documentation and server as an intermediary between writers to ensure content consistency. 

## HPE Synergy software releases

As part of the software release team, I document and deliver content that's published to our software depot download page. This program requires new documentation to be delivered every two or three weeks. 

This is a page from the Important Notes section where we outline supported firmware, firmware features, and any firmware level alerts. I create the content in our authoring database to ensure consistency. Once approved, it's output to HTML and submitted to our supply chain group.

[HPE Synergy Software Release Information - sample content](https://support.hpe.com/hpsc/doc/public/SynergySoftwareRelease.pdf)

------

## HPE Synergy Start Here Poster

This print deliverable provides a high-level overview of the complete process to install and configure the hardware and software for HPE Synergy. The content was developed with the core team, field engineers, sales enablement, and our R&D group. I validated the steps through our field engineers and by participating in a setup and configuration lab. 

![Start Here Poster page 1](https://chriskpeterson.github.io/vuepress2/public/starthereposter1a.png)

![Start Here Poster page 2](https://chriskpeterson.github.io/vuepress2/public/starthereposter2a.png)

The poster is intentionally displayed in low quality as this is a print deliverable and not posted to the web.

Here are a few topics from the poster:

### 3. Configure the hardware in HPE OneView

The following steps provide an overview of the initial setup of HPE OneView. For detailed steps, see "Quick Start: Initial configuration of HPE OneView" in the *HPE OneView Help for HPE Synergy*.

### 3a. Create a network

------

**IMPORTANT**: Define a SAN Manager before creating an FC or FCoE network.

------

Create networks to define connections that route data across the IT infrastructure. You can create a single Ethernet , Fibre Channel, or FCoE network or multiple, tagged Ethernet networks at one time.
Before creating networks, be aware of the networking maximums. For more information, see the *HPE OneView Support Matrix for HPE Synergy*.

To create a network, select **OneView** > **NETWORKING** > **Networks**.



### 3b. Create a logical interconnect group

One or more logical interconnect groups are associated with an enclosure group. Logical interconnect groups define the logical interconnect configuration for every enclosure in the enclosure group.

To create a logical interconnect group, select **OneView** > **NETWORKING** > **Logical Interconnect group**.



### 3c. Define an enclosure group

------

**NOTE:** For solutions that include HPE Synergy Image Streamer, create the HPE Image Streamer cluster in Deployment Servers before creating the enclosure group.

------

------

**NOTE:** Uploading a firmware bundle before creating a logical enclosure is recommended. However, you can choose to add a firmware bundle later, in step "4b. Add a firmware bundle to the appliance firmware repository".

------

An enclosure group is a logical resource that defines the configuration for an enclosure or a set of enclosures that make up a logical enclosure. The network connectivity for an enclosure group is defined by the logical interconnect groups associated with the enclosure group.

An enclosure group can contain up to five enclosures.

To add an enclosure group, select **OneView** > **SERVERS** > **Enclosure groups**.
