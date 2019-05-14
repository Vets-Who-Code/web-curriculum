# HTML

During this portion we will learn HTML

# Semantic 💪 > DIV

Tonight we will be moving from code pen into creating a html and css docs that are linked. On top of this we will be reading up on semantic html and why it is so useful as a developer. Were going in depth in HTML and CSS since next week were strating JavaScript so we need to be comfortable with these before moving on.
When you're a developer you work in teams and often have touch the same code bases asyour co-workers. It is a critical skill to be able to format your code so that your team can understand and read it quick and easy. All comes down to communication.
Also sematic HTML increase SEO, or the efficiency the search engine can read your website.... better SEO means more users.

READS:

[What is Semantic HTML?](https://medium.com/@mlbors/what-is-semantic-html-dc647b27b186)

[MDN on Semantics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)

Goals:
ONLY USE TERMINAL COMMANDS IN VS CODE TO MOVE AROUND AND CREATE FILES!

- Open your VS Code and navigate to your git repo you made earlier this week. Navigate into yor week_1 folder (using the terminal).
- Create a new branch so you hve a copy of this folder.
- Create a "index.html" file and a "style.css" file within this new bracnch inside the week_1 folder.
- Link these files together so your HTML can "see" your CSS.
- Create a faux newspaper site :newspaper:using semantic HTML.

## MUST INCLUDE AT LEAST:

- List
- nav
- header
- footer
- article section
- Add CSS styling.
  EXTRA: time permitting add some CSS animations and custom fonts .

DUE SUNDAY:

- Finish anything left of your newspaper and create a pull request to merge to your branch.
- Create a codepen showing off a visual based upon your call sign. Go all out and get creative.
- Create an account on Medium.
- Create a post on Medium talking about first week and explaining how to create a branch and use pull requests .
  (The purpose of this is to write like your teaching someone who knows knowing about it. By teaching and explaining it really helps you internalize it. Even if you dont like writing, this will pay dividends!)


HTML

Tag

Browser display of HTML

<!DOCTYPE>

Head and body

Element

Attribute

Tags:
<p></p>
<h1></h1><h2></h2> ... <h6></h6>
 <ul></ul>
 <li></li>
 <ol></ol>
 <br>
 <blockquote></blockquote>
 <cite></cite>
 <a></a>
 <img>
 <strong></strong>
 <em></em>
 
CSS is on Fleek

CSS
Terminology
Property (red) and value (blue)

p { font-weight: bold; }
Declaration (red)

A single property-value pair

p { font-weight: bold; }
Selector – shown in red Declaration block – shown in blue

Includes ALL of the individual declarations

p { font-weight: bold;
    font-family: Arial, sans-serif; }
Ways to include CSS in your document
External stylesheet : attach a separate document in the <head> of your HTML.

<link href="css/styles.css" rel="stylesheet" />
Internal stylesheet or embedded stylesheet : Include styles in the <style> tag in the <head> of your HTML

<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
Inline styles : occur in the HTML tag itself


<p style="color: purple;">I am a purple paragraph!</p>
I am a purple paragraph!

Which should you use?
99.999% of the time: External stylesheet

It is rare that you will need inline or embedded/internal styles, but you should know they are possible.

CSS Selectors
We will cover four simple ways to include CSS in your document:

Elements: HTML tags as selectors
Classes
IDs
Descendant selector
Element selectors
Simply list the HTML tag and how you'd like it styled.

body {
    font-family: Arial, Helvetica, sans-serif;
}
Class selectors .classname
Create a class and attach it to an HTML tag to make the class appear.

You may have more than one class per tag.
You may use a class several times in a document.
Classes are more specific than HTML elements and will generally override them.

<style>
.warning {
    color: orange;
    font-weight: bold;
}
</style>
​
<p class="warning">This paragraph displays a warning!</p>
This paragraph displays a warning!

ID selectors #idname
Create an ID and attach it to an HTML tag to make the styling appear.

You may use the ID only once per page.
Each element may have only one ID.
IDs are the most specific, overriding styles from elements and classes.
IDs are not commonly used in CSS these days. They are more commonly used with JavaScript.

<style>
#danger {
    color: red;
    font-weight: bold;
    text-transform: uppercase;
}
</style>
​
<p id="danger">This text is uppercase, bold, and red, and you better pay attention because you're in danger only once on this web page!</p>
THIS TEXT IS UPPERCASE, BOLD, AND RED, AND YOU BETTER PAY ATTENTION BECAUSE YOU'RE IN DANGER ONLY ONCE ON THIS WEB PAGE!

Descendant selectors .classname element {}
This is a combination of one or more classes, IDs, or elements, separated by spaces, to indicate a family relationship.


<style>
.warning p {
    color: violet;
}
</style>
​
<article class="warning">
  <p>All paragraphs in this article will have a color of violet.</p>
  <p>This paragraph too! No more classes needed!</p>
</article>
All paragraphs in this article will have a color of violet.

This paragraph too! No more classes needed!

Grouping selectors
Make all h4 AND h5 red:


<style>
h4, h5 { color: green; }
</style>
​
<h4>I'm Green</h4>
<h5>I'm Green Too!</h5>
I'm Green
I'm Green Too!
Make only the h6's in <section> blue:


<style>
section h6 { color: blue; }
</style>
​
<section>
  <h6>I'm blue!!</h6>
</section>
<h6>I'm NOT blue</h6>
I'm blue!!
I'm NOT blue
Make the h4's and h5's inside <section> pink:


<style>
section h4, section h5 { color: pink; }
</style>
​
<section>
  <h4>I'm pink!!</h4>
  <h5>I'm pink too</h5>
</section>
<h4>I'm NOT pink</h4>
I'm pink!!
I'm pink too
I'm NOT pink
For easier reading, you may wish to write selectors on separate lines:

section h4,
section h5 {
    color: pink;
}
Note that this is NOT the same as the above selector. This says "make all h4's in sections have a black background, and make ALL h5's have a black background."

section h4,
h5 {
    background-color: black;
}
Common CSS properties and values
font-family
Establishes the font family/families. Standard choices include:

sans-serif: Arial, Helvetica, Trebuchet MS, Verdana
serif: Times, Times New Roman, Georgia
monospace: Courier

<style>
p.example-family { font-family: Courier; }
</style>
​
<p class="example-family">The quick brown fox jumps over the lazy dog.</p>
The quick brown fox jumps over the lazy dog.

font-size
Default browser size is 16px = 1em = 1 rem


<style>
p.example-fontsize { font-size: 1rem; }
</style>
​
<p class="example-fontsize">The quick brown fox jumps over the lazy dog.</p>
The quick brown fox jumps over the lazy dog.

font-style
Should the font be italic or normal?


<style>
p.example-fontstyle { font-style: italic; }
</style>
​
<p class="example-fontstyle">The quick brown fox jumps over the lazy dog.</p>
The quick brown fox jumps over the lazy dog.

font-weight
Should the font be bold or normal?


<style>
p.example-fontweight { font-weight: bold; }
</style>
​
<p class="example-fontweight">The quick brown fox jumps over the lazy dog.</p>
The quick brown fox jumps over the lazy dog.

font
Shorthand for multiple font properties.


<style>
p.example-fontshorthand { font: italic bold 1rem/1.3rem  Arial, Helvetica, sans-serif; }
</style>
​
<p class="example-fontshorthand">Font is Arial/Helvetica/sans-serif, italic, and bold, and 1rem in size, with 1.3rem line spacing.</p>
Font is Arial/Helvetica/sans-serif, italic, and bold, and 1rem in size, with 1.3rem line spacing.

line-height
Distance between lines.


<style>
p.example-lineheight { line-height: 1.3rem; }
</style>
​
<p class="example-lineheight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

color
Text color.


<style>
p.example-color {
    color: #d74f25;
}
</style>
​
<p class="example-color">The quick brown fox jumps over the lazy dog.</p>
The quick brown fox jumps over the lazy dog.

background
background-color
background-image
background-position
background-repeat
Dealing with background images and colors. background property is shorthand for all of the other properties.

By default, background images repeat.

background-color: lightblue; sets the background to lightblue.


<style>
p.example-background1 {
    background-color: lightblue;
}
</style>
​
<p class="example-background1">The quick brown fox jumps over the lazy dog.</p>
The quick brown fox jumps over the lazy dog.

While background: lightblue url(image.jpg) no-repeat left top; means a background color of light blue, background image of image.jpg, display it once at the left top corner, no repeat of the image.


<style>
p.example-background2 {
    background: lightblue url(http://placepuppy.net/300/300) no-repeat left top;
    height: 300px;
}
</style>
​
<p class="example-background2">The quick brown fox jumps over the lazy dog.</p>
The quick brown fox jumps over the lazy dog.

Image will display over the color. You may specify a color in case the image doesn't display.

text-decoration
Turns off the underline in links.

Values include none, underline.


<style>
a.padding {
    padding: initial;
}
a.example-textdecoration {
    text-decoration: none;
}
</style>
​
<p>The quick brown <a class="example-textdecoration padding" href="https://www.youtube.com/watch?v=jofNR_WkoCE">fox jumps</a> over the <a class="padding" href="https://giphy.com/gifs/cheezburger-dog-dogs-FdWU4HtO5vTGw">lazy dog</a>.</p>
The quick brown fox jumps over the lazy dog.

Link Pseudo-classes
Pseudo-classes: specify styling in these states.

:link — unvisited link
:visited — visited state
:focus — the currently "focused" (selected) element
:hover — hover your mouse over this
:active — the time between the link is selected and the time the page loads. (Not used much today.)
If you are using these pseudo-classes, they MUST go in the order listed.

To remember:

Lord Vader Former Handle Anakin

:link, :visited, :active are used almost exclusively on links (the A tag).

The pseudo-classes :focus and :hover are used with links and with any other element on the page. :focus is especially useful with forms and in accessibility contexts.


<style>
a.example:link {
    color: #c02d28;
}
a.example:visited {
    color: blue;
}
a.example:focus {
    border: 3px dotted black;
}
a.example:hover {
    color: purple;
    font-weight: bold;
}
a.example:active {
    color: #7c8e88;
}
</style>
​
<p>The quick brown <a class="example" href="https://www.youtube.com/watch?v=jofNR_WkoCE">fox jumps</a> over the <a class="example" href="https://giphy.com/gifs/cheezburger-dog-dogs-FdWU4HtO5vTGw">lazy dog</a>.</p>
The quick brown fox jumps over the lazy dog.

References
HTML Elements Reference

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

InternetingIsHard.com

Hello CSS https://internetingishard.com/html-and-css/hello-css/
CSS Selectors https://internetingishard.com/html-and-css/css-selectors/
Links and Images https://internetingishard.com/html-and-css/links-and-images/
Validating CSS

http://jigsaw.w3.org/css-validator/

Convert pixels to ems and %

http://www.pxtoem.com/

Color palettes, if you need help creating one

http://color.adobe.com/

Colorzilla, for choosing colors from your website

http://www.colorzilla.com/

Exercises
Waaaa, it "doesn't work"!!!
Remember to use the HTML and CSS validators if things are looking odd in the browser, or if the colors in the editor seem off. That's an indicator that you've made some errors along the way. The HTML validator is great for catching errors pertaining to syntax, tag spelling, tag nesting, and applying the right attributes to a given tag. The CSS validator will find unclosed curly brackets, properties and values that don't exist, and more.

HTML validator: http://validator.w3.org/

CSS validator: http://jigsaw.w3.org/css-validator

Style your book chapter
Look at the book chapter that you marked up yesterday.

To this, add some CSS styling. Make use of:

Colors, background images, styling text
CSS selectors: elements, classes, ID, descendent selector
Include styles in an external stylesheet
Additional CSS practice
If you finish early, and/or you want some more practice, work through the following sections of exercises at W3Schools:

https://www.w3schools.com/html/exercise.asp

HTML Styles, all exercises (inline styles only)
HTML CSS, all exercises (embedded styles)
HTML Links, exercise 4
HTML Images, exercise 2
HTML Classes, all exercises
HTML IDs, all exercises
There are additional exercises at this link:

https://www.w3schools.com/css/exercise.asp

CSS Syntax
CSS How To
CSS Background
CSS Text
CSS Links
CSS Fonts
On Your Own
Begin styling the "about" page you made yesterday.

If you still need more to do, make a page about some of your hobbies and activities and style it, or style the hobbies page you made yesterday. Include:

What is this hobby exactly?
How does it make you feel?
Where have you traveled because of your hobby? What other life experiences has your hobby provided, that you might not otherwise experience?
Photos and/or videos of your hobby in action
Links to websites describing your hobby, or where hobbyists discuss what they do
If you manage to get as far as creating both web pages, link them together with a navigation bar.