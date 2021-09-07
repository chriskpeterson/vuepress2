

# Metadata and Publishing Update

Last year, the team started working with Zoomin, our product documentation library host, to update the look of the Poly Documentation Library. When this project started, they tasked the team with coming up with things we'd like to see added for a better customer experience.

As part of the move to the new documentation library, we improved four things:

* The publishing process from our Vasont CMS to the Zoomin documentation site
* Documentation taxonomy to better align with the company
* Facet update on the Zoomin site to match the new taxonomy
* Search on the Zoomin documentation site

## PDL Search
The previous PDL didn't offer a robust search. Poly documentation includes a large amount of single-sourced content, and multiple versions of the guides are published on the PDL. So, when a customer searches for a topic, they see pages full of the same or similar topics. If they were lucky, the results presented the topic on page one.

![Current Poly Documentation Library front page](https://chriskpeterson.github.io/vuepress2/public/search/poly-site-original.png)

Our manager asked us to present some ideas to enhance search.

I presented some ideas, including the following:

**Facets are part of the initial search**

The site included search facets, but they weren't available until a search presented results. In addition, the facets were difficult to select and overall not useful. We knew the facets weren't being used from reviewing our site analytics.

I suggested adding search facets as part of the initial search. The initial search facets would allow you to select a product before searching.

![Poly site mockup showing a filter option next to the search bar. The filter option includes product names the customer can choose filter the search.](https://chriskpeterson.github.io/vuepress2/public/search/poly-site-idea-2.png)

**Product documentation links are included on the home page**

I proposed a second idea that displayed links to product documentation pages beneath the search bar.

![Poly site mockup showing a list of products beneath the search bar. This allows the customer to bypass search and go directly to a product's documentation page.](https://chriskpeterson.github.io/vuepress2/public/search/poly-site-idea-3.png)

When a product is selected, the user is sent to the product page.

![Poly site mockup showing a product page. The name and a photo of the product is displayed at the top of the screen. The bottom half of the screen includes a list of documents by document type.](https://chriskpeterson.github.io/vuepress2/public/search/poly-site-idea-4.png)

**Current PDL**

The team liked the idea of adding facets to the initial search. However, the final facets were based multiple high-level categories rather than just by product.

![The final design of the Poly PDL filter search facets. The search bar has a filter button to the left that presents a list of high level categories the customer can choose to filter search.](https://chriskpeterson.github.io/vuepress2/public/search/poly-doc-library.png)

The design to add facets to the initial search was only the beginning of this project. Additional efforts to finalize and implement the facets included:

* Updating the documentation taxonomy
* Translating the updated taxonomy to a new metadata structure
* Updating the subjectscheme file on our publishing site to match the metadata structure
* Converting the metadata in existing documents to the new metadata structured
* Working with Zoomin to enable and test a plugin that converts topic and bookmap metadata into search facets on the publishing site
* Adding the metadata to Oxygen allowing writers to add it to their topics and bookmaps
* Training the team on how to add metadata to their content including
* Adding the metadata to existing content for future publishing
