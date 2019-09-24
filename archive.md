---
{
    "title": "Writing samples",
    "lang": "en-US"
}


---

# Writing samples

Please find a link to some of the content I've created at HPE. These samples are mostly task, concept, and reference topics At HPE, I write user guides, update guides, setup overviews, and software and firmware compatibility matrices. In the past, I've written release notes, OS installation guides, and volatility statements for high-security customers.

Below, I've listed some of the programs I work on with a link to a writing sample for each.



## HPE Synergy

HPE Synergy is a flagship server product combining server, storage, and networking modules in a single chassis. This product is designed for environments where server workload flexibility is important. For example, a bank's IT department can configure HPE Synergy to run teller software during the day and configure it to run the bank's transaction database at night.

I'm responsible for creating a start here poster (printed and shipped in the box), a cabling guide, and the content for each software release. I also serve as a product expert evaluating all other deliverables to ensure content consistency and content sharing best practices.

[Writing sample](synergy.html)



## HPE Synergy Frame Link Module

The frame link module is the management module for HPE Synergy frames.  This module manages all power and cooling resources, management network traffic, and acts as a security guard allowing newly installed components to access the frame infrastructure.

For this program, I write a user guide for the hardware and software components.

[Writing sample](framelinkmodule.html)



## HPE ProLiant DL385 Server

The HPE ProLiant DL385 is a rack-based box server. This is one of the few products I work on that's not sold as a solution. The complexity in writing for servers is the numerous internal component configurations supported. 

For this program, I work on the various in-box print deliverables and the user guide. The content in HPE server guides doesn't change much, but there are small differences between products. These guides are the focus of my content reuse project currently in progress.

[Writing sample](HPEProLiantServers.html)



## ConvergedSystem 700

HPE ConvergedSystem 700 is pre-configured and purpose-built compute, networking, and storage solution designed using individual HPE components. This product is assembled and configured in a factory and delivered to customers as two or more racks of hardware. The challenge or this program is ensuring that all of the firmware and software work together. To support the customer, we deliver a tested and approved compatibility matrix along with step-by-step upgrade guides.

For this program, I write firmware and software compatibility matrices and the step-by-step upgrade guides. The upgrade guides include firmware updates, software updates, VMware ESXi configuration, and switch configuration.

[Writing sample](cs700.html)



## HPE SimpliVity 380

HPE Hyper Converged 380 (or HPE SimpliVity 380) is a node-based server solution allowing quick install, configuration, and enhanced scalability. This product is essentially a single server built to work as multiple products in one.

delivered as a single server and management software pre-configured with a focus on virtual machine deployment.

For this program I worked on the initial deployment which was run on an aggressive schedule.

[Writing sample](simplivity380.html)



## Topic analysis and rewrite exercise

I choose two topics providing some evaluation and minor rewrites. 

[Topic evaluation](topicevaluation.html)



------



## HPE Synergy 12000 Frame internal management network

Each frame link module contains an Ethernet switch that manages all HPE Synergy internal frame management network connections. Frame link modules also manage management ring (frame link topology) connections. The frame link module Ethernet switch ports connect to every appliance, device, and interconnect bay within the frame. Independent midplane signal connections and independent bay connections provide fault tolerance.

Frame link module Ethernet ports supporting the appliance bays run at 10Gb. Ethernet ports supporting the device and interconnect bays run at 1Gb. Appliance bay management Ethernet connections to both frame link modules are always active.

These Ethernet connections provide fault tolerant connectivity to the frame management network. Device and interconnect bay Ethernet ports are connected to the switch through the Active frame link module.

![frame link module management network](https://chriskpeterson.github.io/vuepress2/public/flm_mgmt_network.PNG)

------

## HPE Synergy 12000 Frame external management ring network

------

**IMPORTANT:** All external rack switches used for the management network must be IEEE 802.1D compliant so that LLDP packets are not forwarded.

------

The frame link module LINK port provides a 10Gb redundant air-gapped fault tolerant network. Connected LINK ports create a management ring in single frame or multiframe configurations. Once the solution is cabled, management network connectivity does not require user or external rack switch configuration.

The frame link module MGMT port provides a 1Gb or 10Gb connection to the external management network. MGMT ports connected to the management network provide redundant management network uplink connectivity for all frames in a management ring. For high availability, in a multiframe HPE Synergy solution, cable a minimum of two MGMT ports from separate frames to the management network.

NOTE: To perform a MGMT Port Test, use the Frame Management Network IPv6 Link Local address of a frame claimed by HPE OneView. The Frame Management Network IPv6 Link Local address can be viewed on the HPE Synergy Console Frame Health & Inventory screen.

------



This topic is a task topic covering a ping test to ensure the solution is cabled directly. The note is included because we had numerous support calls about the IPv6 test to use for this test.*

## Performing an MGMT Port Test on a remote management ring

**NOTE:** To perform an MGMT Port Test, use the Frame Management Network IPv6 Link Local address of a frame claimed by HPE OneView. The Frame Management Network IPv6 Link Local address can be viewed on the HPE Synergy Console Frame Health & Inventory screen.

Procedure

1. Connect to the HPE Synergy Console.

2. Select **Actions** > **FLM Diagnostics** > **MGMT Port Test**.

3. In the **Ping** field, enter the link-local IPv6 address of a device accessible on the external management network.

4. Click the **Ping** button.

   If the test is unsuccessful, information to troubleshoot the error is displayed.

------



This was a new feature in our last release.*

## Collecting an FLM Support Dump

**NOTE:** Collecting an FLM Support Dump requires a USB 2.0 compatible USB drive formatted as FAT16, FAT32, or VFAT.

**NOTE:** To access the FLM Support Dump action, the FLM Maintenance Console must be enabled. For more information, see “About the FLM Maintenance Console”.

**Procedure**

1. Connect a USB storage device one of the following:
   - The frame front panel
   - A frame link module
2. Connect to the HPE Synergy Console.
3. Select **Actions** > **FLM Diagnostics** > **FLM Support Dump**.
   An USB inventory is collected and a default USB storage device is presented.
4. Select a USB storage device from the list.
5. To initiate the support dump collection. click **Collect**.

------

*This guide includes a security section outlining the various security features and protocol used in the device.*

## Security features

Hewlett Packard Enterprise recommends following security best practices by protecting and isolating management networks
from production data networks. To ensure high availability, and to guard against various network attacks, isolate the HPE
Synergy Composer management network using the appropriate mechanisms such as firewalls and intrusion detection systems.

To ensure a secure platform for data center management, the frame link module includes features such as the following:

- Separation of the data and management environments, which is critical to protect against Denial of Service (DoS) attacks.
- Protection against DoS attacks on the management ring with traffic prioritization and rate limiting.
- Audit logging of all frame link module activity.
- Verification of certificates for Transport Layer Security (TLS).
- Hardware enforced write protection to ensure integrity and prevent unauthorized modification of the currently running frame link module firmware image.



