

*This topic explains how the HPE Synergy Frame Link Module manages network traffic within an HPE Synergy 12000 Frame.*

### HPE Synergy 12000 Frame internal management network

Each frame link module contains an Ethernet switch that manages all HPE Synergy internal frame management network connections. Frame link modules also manage management ring (frame link topology) connections. The frame link module Ethernet switch ports connect to every appliance, device, and interconnect bay within the frame. Independent midplane signal
connections and independent bay connections provide fault tolerance.

Frame link module Ethernet ports supporting the appliance bays run at 10Gb. Ethernet ports supporting the device and interconnect bays run at 1Gb. Appliance bay management Ethernet connections to both frame link modules are always active.

These Ethernet connections provide fault tolerant connectivity to the frame management network. Device and interconnect bay Ethernet ports are connected to the switch through the Active frame link module.

![](public\flm_mgmt_network.PNG)



### HPE Synergy 12000 Frame external management ring network

------

**IMPORTANT:** All external rack switches used for the management network must be IEEE 802.1D compliant so that LLDP packets are not forwarded.

------

The frame link module LINK port provides a 10Gb redundant air-gapped fault tolerant network. Connected LINK ports create a management ring in single frame or multiframe configurations. Once the solution is cabled, management network connectivity does not require user or external rack switch configuration.

The frame link module MGMT port provides a 1Gb or 10Gb connection to the external management network. MGMT ports connected to the management network provide redundant management network uplink connectivity for all frames in a management ring. For high availability, in a multiframe HPE Synergy solution, cable a minimum of two MGMT ports from separate frames to the management network.

#### HPE Synergy Image Streamer

------

**NOTE:** HPE Synergy frames with HPE Synergy Image Streamer must have HPE Synergy Frame Link Module (2-Port) installed.

------

In frames with an HPE Synergy Image Streamer installed, the frame link module MGMT ports are both automatically configured for use by the installed HPE Synergy Image Streamer. MGMT ports in frames with HPE Synergy Image Streamer are exclusively dedicated for boot image deployment. These MGMT ports cannot be used for connection to the management network.