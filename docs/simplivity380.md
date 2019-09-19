# HPE SimpliVity 380

*This content is from a*

TASK TOPIC

## Before you begin





## Installing the Hyper Converged Operating Environment

**Prerequisites**

* You have run the Environment Compatibility tool and verified your network configuration.
* You have identified a seed node and powered it on.
* You verified your network setup using the Check Your Environment (NVT) tool.

**Procedure**

1. In the configuration utility, select Start Installation.

2. Select your ESXi hypervisor version.

   The hypervisor installation begins. 

   The installation takes up to one hour to complete.

3. After the hypervisor installation is complete, open a web browser and enter:

   https://192.18.0.100

4. To complete the installation, follow the on-screen instructions. 

   

## Creating datastores

The initial configuration setup and process only utilize a portion of the total available storage. To utilize the remaining storage in your HC 380, you must create datastores.  

**Procedure**	 

1. Open a browser and navigate to the vSphere Web Client.  		  
   The login window appears.  			 
   
2. Enter your user name and password for the vSphere Web Client.  		    		

3. Click   **Login**.  		    		
    To familiarize yourself with the layout of the vSphere Web Client, review the information on the   **Getting Started** tab

4. In the Navigator, select vCenter. 

5. In the Navigator, select **Hosts and Clusters** > **Cluster**. 

6. Select the specific cluster for which you want to create a datastore. 
	The Summary tab for the selected cluster appears. 
	
7. Select the Manage tab, and then select HP Management. 
	The Actions menu appears on the right side of the window. 
	The vSphere Web Client may not always refresh quickly. If you are not seeing what is expected, click the Refresh icon in the top menu bar or the disk refresh icon on the right side of the window. 
	
9. From the Actions menu, select **Create Datastore**. 
	The Create Datastore wizard appears. 
	
	Alternatively, right-click the cluster name and select **All HP Management Actions** > **Create Datastores**. 



## General virtualization and VDI workload configurations 

General virtualization or VDI solutions are supported on a flat/untagged network or a network with tagged VLANs to segment iSCSI and vMotion traffic. The ESXi management network must always be an untagged (pvid) network. 

The ESXi, vMotion, and storage networks can exist on the same subnet, but Hewlett Packard Enterprise recommends separate subnets or VLANs to isolate and manage the network traffic. 

When using the HC 380 General Virtualization or VDI solutions, the following networks and configurations are used over the FlexLOM (1 or 10GbE) interface for each node:

* ESXi Management Network (untagged, pvid network).  
* VMware vMotion Network (untagged or tagged network). 
* VSA iSCSI Storage network (untagged or tagged network). 
* IPv6 must be enabled for the VLANs used by the HC 380. 



## General virtualization configuration (all 1GbE appliance)

*Just including this for the illustration. I sometimes work in Illustrator to create cabling diagrams, flow charts, and task illustrations.*

![](https://chriskpeterson.github.io/vuepress2/public/hc380genvirtconfigcabling.PNG)

