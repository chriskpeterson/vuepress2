# Creating interactive DITA output by assigning XML output classes
#work

A fun way to work with DITA XML documentation is to design interactivity into the DITA code. This is great for creating documentation content allowing customers to choose what they want to see.

This is an example that could be implemented as part of a summary step to show the procedure when clicked. This would allow a user to navigate the superprocedure without leaving the topic.

## Creating a button that shows content

DITA XML elements can be assigned output classes when authoring in XMetaL. These output classes are converted to classes in the HTML output. 
Classes allow you to manipulate content in an HTML document.

*For example*
The element `<p output class=“button one”>I’m a button</p>` is converted to `<p class=“button one”>I’m a button</p>` in the HTML output. Using CSS it can be style to look like a button. JQuery can be added to provide functionality.
```.button {
width: 100px;
height: 25px;
background-color: black;
color: white;
cursor: pointer;}
```
In the `<head>` of the document you define the JQuery.
```<script>
$(".button.one").click(function(){
    $(".hidethiselement.one").hide();
});
</script>
```
This script ‘listens’ for the button with the class “button.one” to be clicked. When the button is clicked the object with the class “hidethiselement.one” is hidden.

“One” was added to the button and the JQuery so that we can have multiple buttons in our output.

While this is good to know, you  are not required to know any of this. All you need to do is reference the list of output classes and actions and apply the appropriate combination to your document.

If you have two objects you would like to toggle you can assign the first the output class of “button one” and the second “button two”. Then assigned “hidethisobject on” to the first items you want to show/hide and “hidethisobject two” to the second object. Once you link to the JQuery file it will automatically add this functionality to your deliverable.
