

# Metadata and Publishing Update


Management was working with Zoomin to update the look of the Poly Documentation Library. When this project was kicked off, they tasked the team with coming up with things they'd like to see added. In addition, we wanted to improve search on the site.

As part of the move to the new documentation library, we improving four things:
The publishing process from our Vasont CMS to the Zoomin documentation site
Documentation taxonomy to better align with the company
Facet update on the Zoomin site to match the new taxonomy
Search on the Zoomin documentation site

## PDL Search
The current PDL doesn't offer a robust search. Poly documentation includes a large amount of single-sourced content, and multiple versions of the guides are published on the PDL. So, when a customer searches for a topic, they see pages full of the same or similar topics. If they're lucky, the site will present the topic on page one.

![Current Poly Documentation Library front page](https://chriskpeterson.github.io/vuepress2/public/search/poly-site-original.png)

Managed asked us to present some ideas for search. The look and feel of these mockups match the new site. We were shown the new design before starting this project.

The site does provide search facets, but they appear with the search results. The way the facets were structured and coded they were difficult to use. Our site analytics indicated customers were not using them.

I suggested adding search facets that can be selected before searching.

![3](https://chriskpeterson.github.io/vuepress2/public/search/poly-site-idea-2.png)

I proposed a second idea that displayed links to product documentation pages beneath the search bar.

![3](https://chriskpeterson.github.io/vuepress2/public/search/poly-site-idea-3.png)

When a product is selected, the user is sent to the product page.

![3](https://chriskpeterson.github.io/vuepress2/public/search/poly-site-idea-4.png)

## Publishing
I inherited the publishing portion of this project from a colleague that left the company. It hadn't been figured out yet so I worked with Zoomin to implement and test their metadata plugin.

The plugin worked by converting metadata in the othermeta DITA element to selectable facets on the Zoomin documentation library.

## Problem

Publishing is a cumbersome task due to the requirement to add metadata tags to topics each time you publish a document. This process wasn't only for new content but was required every time you publish any document.
