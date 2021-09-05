---
title: Projects
lang: en-US
---

# Projects and Teams

At Poly and HPE, I participated in various work streams and department initiatives.

## Poly

### Taxonomy and Metadata

Worked with our editing team to update the product documentation library taxonomy. As part of this project, I worked with Zoomin to implement their metadata to facets publishing plugin. Using this plugin ensures that topics utilize consistent metadata tagging and saves publishing time by a few hours.

* [Poly Documentation Library Redesign](doc-library-redesign)

Around the time I started working at Poly, they were discussing how to document third party apps running on Poly devices.

### Create Task-Based Voice Documentation

Initiated a project to take concept and reference topic-based administrator guides and convert them to task-based guides. This included creating a task template for this new type of task for our audience.


**Problem:**
The voice administrator guides

Customer prefer task-based guides. Ideally, when a customer wants to know how to enable, disable, or configure a feature they can find content that tells them how to do it.

The current administrator guides don’t show customers how to perform tasks. Instead, they’re a mix of resource and parameter topics requiring a customer to look through lists of parameters and figure out which ones they need to configure their phones.


**Research:**
Talked with SMEs, program managers, and researched customer issues in our community forums.

**Solution:**
The team delivered a reworked administrator guide using task-based instructions to better guide customers in using parameters and achieving their goals.



### API Documentation

**Tools**: Postman

Investigated software to help our team write API documentation for both video and voice. I taught other team members how to run API commands on our voice products.

[Postman API Test Document](https://documenter.getpostman.com/view/13192773/TVYDdKDz)

### Documentation Planning and Strategy



## Hewlett Packard Enterprise

### Content Templates

HPE server hardware documentation is nearly identical from one product to another. To streamline document creation, I developed a template to easily swap out images and the server name to quickly update the guides.

#### Problem

Writers spend a lot of time sharing and duplicating content to build HPE server administrator and maintenance guides. While most of the guide is identical, internal document links require that writers duplicate topics in the database. This is also true for topics with illustrations. Because the illustration is different, writer must create new topics to add the new illustration.

#### Research

DITA provides multiple tools for replacing portions of topics without updating the topic. Conrefs, conkeyrefs, and variables can all be used to replace portions of a topic from a separate file in the document structure.
I investigated and tested each of these methods to find the right method for this project.

* **Conrefs** - Conrefs are great for reuse, but they create a one-to-one relationship between the original topic and the topic with the conrefed content. These are best for content that lives in multiple guides such as alerts.

* **Conkeyrefs** -

* **Keys (variables)** -

#### Solution



### Information Architecture team

Worked performed as part of this team:

- Provided consultation services for knowledge management writing teams on topic writing, sharing strategies, and DITA elements.
- Created best practice guides for topic planning and topic writing.
- Reviewed the approved the DITA DTD and updated as necessary.

### Quality team

This team evaluates support cases flagged for potential documentation issues. In one case, we identified that customers continued to call in about a particular server setup procedure. We were able to borrow the server and confirmed that the process, as documented, was unclear. We updated the guide and leading to a reduction in service calls.

### Interactive documentation

**Tools**: Github (for testing), SDL, VS Code, and XMetaL

I'm very interested in interactive documentation delivery models. I believe we can reduce task complexity by allowing customers to choose options and retrieve relevant content. We realized this with the HPE Synergy Firmware Comparison Tool. Customers reported fewer issues understanding the supported software and firmware for their solution. Even better, we received positive feedback from customers and the field.

To promote the model for interactive documentation, I worked with two colleagues to create a poster and white paper. We presented the white paper and poster at an internal HPE technical information fair.

The paper is labeled confidential so I can only share the abstract.

_Flexible, scalable, solution-based products require flexible, scalable, solution-based end-user documentation. A core responsibility of an information developer is to create user documentation that simplifies complex information and procedures. The standard one-size-fits-all approach to creating and delivering documentation adds an unnecessary burden to our customers. We can create a superior customer experience by allowing customers to choose exactly the information they need. Creating interactive documentation sets the foundation for smarter documentation and more efficient information gathering. In this paper, we propose a content delivery model that delivers interactive web-based documentation from a DITA-based CCMS. This content delivery model utilizes interactive web-based elements coded in JQuery and added to the CCMS HTML transform. We designed this content delivery model to allow anyone in our organization to create dynamic interactive content._

#### HPE Synergy Firmware Comparison Tool

**Tools**: SDL, VS Code, and XMetaL

This firmware comparison tool allows customers to choose and compare two HPE Synergy Custom SPPs. Before this tool was created, the team provided a large Excel spreadsheet to customers.

Before leaving HPE, I developed documentation and training so the team could update and maintain the tool.

[HPE Firmware Comparison Tool](https://techhub.hpe.com/eginfolib/synergy/sw_release_info/C.6.1_IS.6.1.html)

The screen capture shows an HPE Synergy management combination with two selected firmware packages. Checking the **show differences** checkbox causes the firmware differences to display as bold text.

![HPE Firmware Comparison Tools](https://chriskpeterson.github.io/vuepress2/public/HPE-firmware-comparison-tool.png)

#### HPE ConvergedSystems 750 Interactive Matrix

**Tools**: SDL, VS Code, and XMetaL

This interactive matrix includes basic functionality allowing the customer to filter through the firmware information in a table. These small additions to documentation save a lot of time searching for particular pieces of data. This matrix was the first interactive document we created.

#### HPE DL380 Gen10 Cabling Matrix

**Tools**: Github (for testing), SDL, VS Code, and XMetaL

The cabling matrix also uses the simple filter text field. The matrix allows customers to enter a cable or cable kit part number and identify supported cabling scenarios.

We also added an augmented reality component to this matrix that placed a transparent template on the phone screen with the camera active. Customers can hold the template above the server to see the necessary cabling in place. Unfortunately, this feature has limited due to security settings in some browsers.

[HPE DL380 Gen10 Cabling Matrix](https://techhub.hpe.com/eginfolib/servers/CableMatrix/DL380_Gen10_diagrams.html)
