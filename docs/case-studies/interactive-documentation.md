



# Interactive documentation

**Tools**: Github (for testing), SDL, VS Code, and XMetaL

I'm very interested in interactive documentation delivery models. I believe we can reduce task complexity by allowing customers to choose options and retrieve relevant content. We realized this with the HPE Synergy Firmware Comparison Tool. Customers reported fewer issues understanding the supported software and firmware for their solution. Even better, we received positive feedback from customers and the field.

To promote the model for interactive documentation, I worked with two colleagues to create a poster and white paper. We presented the white paper and poster at an internal HPE technical information fair.

The paper is labeled confidential so I can only share the abstract.

_Flexible, scalable, solution-based products require flexible, scalable, solution-based end-user documentation. A core responsibility of an information developer is to create user documentation that simplifies complex information and procedures. The standard one-size-fits-all approach to creating and delivering documentation adds an unnecessary burden to our customers. We can create a superior customer experience by allowing customers to choose exactly the information they need. Creating interactive documentation sets the foundation for smarter documentation and more efficient information gathering. In this paper, we propose a content delivery model that delivers interactive web-based documentation from a DITA-based CCMS. This content delivery model utilizes interactive web-based elements coded in JQuery and added to the CCMS HTML transform. We designed this content delivery model to allow anyone in our organization to create dynamic interactive content._

## HPE Synergy Firmware Comparison Tool

**Tools**: SDL, VS Code, and XMetaL

This firmware comparison tool allows customers to choose and compare two HPE Synergy Custom SPPs. Before this tool was created, the team provided a large Excel spreadsheet to customers.

Before leaving HPE, I developed documentation and training so the team could update and maintain the tool.

[HPE Firmware Comparison Tool](https://techhub.hpe.com/eginfolib/synergy/sw_release_info/C.6.1_IS.6.1.html)

The screen capture shows an HPE Synergy management combination with two selected firmware packages. Checking the **show differences** checkbox causes the firmware differences to display as bold text.

![HPE Firmware Comparison Tools](https://chriskpeterson.github.io/vuepress2/public/HPE-firmware-comparison-tool.png)

## HPE ConvergedSystems 750 Interactive Matrix

**Tools**: SDL, VS Code, and XMetaL

This interactive matrix includes basic functionality allowing the customer to filter through the firmware information in a table. These small additions to documentation save a lot of time searching for particular pieces of data. This matrix was the first interactive document we created.

## HPE DL380 Gen10 Cabling Matrix

**Tools**: Github (for testing), SDL, VS Code, and XMetaL

The cabling matrix also uses the simple filter text field. The matrix allows customers to enter a cable or cable kit part number and identify supported cabling scenarios.

We also added an augmented reality component to this matrix that placed a transparent template on the phone screen with the camera active. Customers can hold the template above the server to see the necessary cabling in place. Unfortunately, this feature has limited due to security settings in some browsers.

[HPE DL380 Gen10 Cabling Matrix](https://techhub.hpe.com/eginfolib/servers/CableMatrix/DL380_Gen10_diagrams.html)
