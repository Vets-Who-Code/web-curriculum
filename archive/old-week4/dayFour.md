# Intro Into CSS

CSS, or cascading style sheets, is a language used to describe reusable styles for presenting documents written in a markup language.
 Its concept was originated by Håkon Wium Lie in 1994.
  In December 1996, CSS was made a specification by the W3C and today allows web developers to alter the layout and appearance of their web pages.
   For example, CSS may be used to change the font used in certain HTML element, as well as its size and color.
    A single CSS file may be linked to multiple pages, which allows a developer to change the appearance of all the pages at the same time.

`selector` : Define the elements to which a set of CSS rules apply.

`property` : Human-readable identifiers that indicate which stylistic features you want to change.

`value` : Indicates how you want to change stylistic features.

## Border Box Model

![Box Model](../images/boxmodel.png)


CSS Basic Box Model is a module of CSS that defines the rectangular boxes—including their padding and margin—that are generated for elements and laid out according to the visual formatting model.


`content area`: Bounded by the content edge, contains the "real" content of the element, such as text, an image, or a video player. Its dimensions are the content width (or content-box width) and the content height (or content-box height). It often has a background color or background image

`padding area`: Bounded by the padding edge, extends the content area to include the element's padding.

`border area`: Bounded by the border edge, extends the padding area to include the element's borders.

`margin area`: Bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors.

## Flexbox

### What Is Flexbox?

"Flexible Box", or Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.

### Why Use Flexbox
Flexbox was created as an optimized alternative to using floats and positioning. Things like cantering a block of content inside of its parent element, or making all children elements take up an equal amount of of width height responsively with ease can now be done in a convenient, more flexible way.


### Flexbox Props && Values

`display: flex`: turns targeted element into a flex container, telling the browser to us flexbox versus the default box model.

`justify-content: value`: Helps you define the horizontal alignment of the containers items. the values to pass into  it are.

`center`, `flex-start`, `flex-end`, `space-around` and `space-between`.



### Homework
We touched flexbox briefly in the prework. Checking the KANBAN Board, you will see the tutorials you have add to yours. Once complete, look at your Capstone ( the project that you built to get into VWC), and see how best to implement it on your product.

## CSS Grid Layout
CSS Grid Layout works by dividing a page into major regions or defining the relationship of HTML Elements based upon given structural commands. This is an entirely new standard as we have been a mobile first digital community for the past decade, as previously the web's layout was taken from print.

### Starter Grid Properties and Values
`display: grid` :  this is applied to the parent or container of all the effected grid items or children to display a block level grid.

`display: inline-grid` : this displays an inline level grid.

`grid-template-areas`: CSS property specifies named grid areas.

`grid-template-columns` : CSS property defines the line names and track sizing functions of the grid columns.

`grid-template-rows` : CSS property defines the line names and track sizing functions of the grid rows.


### Homework

Check the KANBAN Board for tutorials and articles. Once done, try to  implement in your project.
