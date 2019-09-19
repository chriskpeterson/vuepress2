---
{
    "title": "Writing samples",
    "lang": "en-US"
}

---

# Writing samples

------

## Topic-based writing

*In my current role, I write using the topic-based writing methodology. Our authoring environment is based on DITA 1.2. As a member of the Information Architecture team, I help decide on and implement updates to the model. For example, we don't currently use `<wintitle>`. Instead we mark dialogue windows and other components as `<uicontrol>`. As we're trying to move toward chatbots and AI, I felt that is important to use the correct DITA elements.*

------

## Frame Link Module
*The frame link module is the frame manager for the HPE Synergy 12000 Frame. It is a highly-secure internal and external network controller that allows managmenet network traffic to flow from component to component in a Synergy frame.*

[Writing samples](framelinkmodule.html)

------

## ConvergedSystem 700

*The ConvergedSystem 700 is a converged hardware and software solution providing a fully configured and management hardware and software stack. Writing for this program requires a basic understanding of the hardware and software platforms.*

[Writing samples](cs700.html)

------

## HPE Synergy

*Similar to ConvergedSystems, HPE Synergy is a composable solution-based product. Writing for this product requires an understanding of the hardware components and the management software, HPE OneView.*

[Writing samples](synergy.html)

------


### HPE Synergy 12000 Frame internal management network

Each frame link module contains an Ethernet switch that manages all HPE Synergy internal frame management network connections. Frame link modules also manage management ring (frame link topology) connections. The frame link module Ethernet switch ports connect to every appliance, device, and interconnect bay within the frame. Independent midplane signal connections and independent bay connections provide fault tolerance.

Frame link module Ethernet ports supporting the appliance bays run at 10Gb. Ethernet ports supporting the device and interconnect bays run at 1Gb. Appliance bay management Ethernet connections to both frame link modules are always active. These Ethernet connections provide fault tolerant connectivity to the frame management network. Device and interconnect bay Ethernet ports are connected to the switch through the Active frame link module.

### Factor resetting a frame link module

To do this you need to

### HPE Synergy Software Releases

HPE Synergy Software Releases include a Management combination and a Synergy Custom SPP.


Upgrading to HPE Synergy 4.20.02 or 5.0
::: warning 

Immediately before upgrading to HPE OneView 4.20.02 or HPE OneView 5.00.00.01, install HPE_PreUpgrade_4.20_5.00_Z7550-96608.bin.
:::
1. Download the PreUpgrade file from the HPE Support Center download page for the HPE Synergy Management combination.
2. Once initiated, the PreUpgrade task displays a progress bar indicating completion status. 
The PreUpgrade task should complete within 20 minutes. In rare cases, the PreUpgrade task can run for multiple hours. 
3. If the PreUpgrade tasks runs for longer than 20 minutes, and if no errors are displayed, let the task run to completion. 
Once the task is complete, you will be returned to the Settings page where the Update process can be initiated.

If the PreUpgrade bin file has already been applied to the appliance, there is no need to repeat the process before upgrading to OneView 4.20.02 or 5.00.

Any HPE OneView 4.10.03 or later can be upgraded to version 5.0.

For more details on these changes, review the HPE OneView 5.0 Release Notes for HPE Synergy and the HPE Synergy Image Streamer 5.0 Release Notes.