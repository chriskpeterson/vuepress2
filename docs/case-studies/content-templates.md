


# Content Templates

HPE server hardware documentation is nearly identical from one product to another. To streamline document creation, I developed a template to easily swap out images and the server name to quickly update the guides.

## Problem

Writers spend a lot of time sharing and duplicating content to build HPE server administrator and maintenance guides. While most of the guide is identical, internal document links require that writers duplicate topics in the database. This is also true for topics with illustrations. Because the illustration is different, writer must create new topics to add the new illustration.

## Research

DITA provides multiple tools for replacing portions of topics without updating the topic. Conrefs, conkeyrefs, and variables can all be used to replace portions of a topic from a separate file in the document structure.
I investigated and tested each of these methods to find the right method for this project.

* **Conrefs** - Conrefs are great for reuse, but they create a one-to-one relationship between the original topic and the topic with the conrefed content. These are best for content that lives in multiple guides such as alerts.

* **Conkeyrefs** -

* **Keys (variables)** -


## Solutions


![New Administrator Guide](https://chriskpeterson.github.io/vuepress2/public/hpe-templates/Artboard-1.png)
