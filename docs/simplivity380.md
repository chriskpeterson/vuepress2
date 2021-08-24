# HPE Hyper Converged 380

**Tools:** AuthorIT / SDL and XMetaL / Adobe Illustrator

**Role:** Lead writer

---

This content is from an installation guide for the HPE Hyper Converged 380.

The product installation guide covers software deployment. From there, the customer is asked to reference the user guide. This user guide topic covers setting up additional storage space.

Link: [HPE Hyper Converged 380 task sample](https://chriskpeterson.github.io/vuepress2/public/HC380UG.pdf)

This samples covers UI functionality and tasks.

Link: [HPE Hyper Converged 380 UI tasks sample](https://chriskpeterson.github.io/vuepress2/public/HC380_VM_UI.pdf)

---

_Below, please find an additional concept and reference topic. I created the cabling diagrams in the second topic._

## General virtualization and VDI workload configurations

General virtualization or VDI solutions are supported on a flat/untagged network or a network with tagged VLANs to segment iSCSI and vMotion traffic. The ESXi management network must always be an untagged (pvid) network.

The ESXi, vMotion, and storage networks can exist on the same subnet. Hewlett Packard Enterprise recommends using separate subnets or VLANs to isolate and manage the network traffic.

When using the HC 380 General Virtualization or VDI solutions, the following networks and configurations are used over the FlexLOM (1 or 10GbE) interface for each node:

- VMware ESXi Management Network (untagged, pvid network).
- VMware vMotion Network (untagged or tagged network).
- VSA iSCSI Storage network (untagged or tagged network).
- IPv6 must be enabled for the VLANs used by the HC 380.

## General virtualization configuration (all 1GbE appliance)

![HPE SimpliVity 380 cabling diagrams](https://chriskpeterson.github.io/vuepress2/public/hc380_cabling_diagrams.PNG)
