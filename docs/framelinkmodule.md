

# HPE Synergy Frame Link Module

*CONCEPT TOPIC SAMPLE*

*This topic explains how the HPE Synergy Frame Link Module manages network traffic within an HPE Synergy 12000 Frame. This topic includes terms that are defined elsewhere in the documentation and in an external glossary.*

## HPE Synergy 12000 Frame internal management network

Each frame link module contains an Ethernet switch that manages all HPE Synergy internal frame management network connections. Frame link modules also manage management ring (frame link topology) connections. The frame link module Ethernet switch ports connect to every appliance, device, and interconnect bay within the frame. Independent midplane signal
connections and independent bay connections provide fault tolerance.

Frame link module Ethernet ports supporting the appliance bays run at 10Gb. Ethernet ports supporting the device and interconnect bays run at 1Gb. Appliance bay management Ethernet connections to both frame link modules are always active.

These Ethernet connections provide fault tolerant connectivity to the frame management network. Device and interconnect bay Ethernet ports are connected to the switch through the Active frame link module.

![frame link module management network](https://chriskpeterson.github.io/vuepress2/public/flm_mgmt_network.PNG)



## HPE Synergy 12000 Frame external management ring network

------

**IMPORTANT:** All external rack switches used for the management network must be IEEE 802.1D compliant so that LLDP packets are not forwarded.

------

The frame link module LINK port provides a 10Gb redundant air-gapped fault tolerant network. Connected LINK ports create a management ring in single frame or multiframe configurations. Once the solution is cabled, management network connectivity does not require user or external rack switch configuration.

The frame link module MGMT port provides a 1Gb or 10Gb connection to the external management network. MGMT ports connected to the management network provide redundant management network uplink connectivity for all frames in a management ring. For high availability, in a multiframe HPE Synergy solution, cable a minimum of two MGMT ports from separate frames to the management network.

NOTE: To perform a MGMT Port Test, use the Frame Management Network IPv6 Link Local address of a frame claimed by HPE OneView. The Frame Management Network IPv6 Link Local address can be viewed on the HPE Synergy Console Frame Health & Inventory screen.



*TASK TOPIC SAMPLES*

## Performing an MGMT Port Test

------

**NOTE:** To perform a MGMT Port Test, use the Frame Management Network IPv6 Link Local address of a frame claimed by HPE OneView. The Frame Management Network IPv6 Link Local address can be viewed on the HPE Synergy Console Frame Health & Inventory screen.

------

Procedure

1. Connect to the HPE Synergy Console.

2. Select **Actions** > **FLM Diagnostics** > **MGMT Port Test**.

3. In the **Ping** field, enter the link-local IPv6 address of a device accessible on the external management network.

4. Click the **Ping** button.

   If the test is unsuccessful, information to troubleshoot the error is displayed.



## Collecting an FLM Support Dump

------

**NOTE:** Collecting an FLM Support Dump requires a USB 2.0 compatible USB drive formatted as FAT16, FAT32, or VFAT.

------

------

**NOTE:** To access the FLM Support Dump action, the FLM Maintenance Console must be enabled. For more information, see “About the FLM Maintenance Console”.

The FLM Support Dump feature writes a frame link module support dump to a USB storage device.

------

Procedure

1. Connect a USB storage device one of the following:
   - The frame front panel
   - A frame link module
2. Connect to the HPE Synergy Console.
3. Select **Actions** > **FLM Diagnostics** > **FLM Support Dump**.
   An USB inventory is collected and a default USB storage device is presented.
4. Select a USB storage device from the list.
5. To initiate the support dump collection. click **Collect**.