# Driving Forward 🏎️ and Adding Some Graphics 🖼️

We have the data set up and some CSS now we can add in some images of the cars and display them to the user. It's not the 90's anymore so we want the user to be able to sort and filter based on the details of the cars.

## Goals

1.  Find some pics of the cars online and add a url key to the data objects with the url of the image being the value.

2.  Add two links in nav bar "store" and "Add Car".

3.  Rename your index.html 'addCar.html' and make it serve up on route '/add/car'(POST not GET. You can have the same routes but one being Post and one being a Get).

4.  Make an index.html and just add in an H1
    "Tesla Cars" for now. Have app.get('/') serve up this file.

5.  Make sure form data still works and stills builds your API.

6.  Add a click event listener to the Store link and have it show the car images on the current page by using a fetch ajax call.
    HINT 1:Create a /store get route .
    HINT 2: Data coming to front-end from /store is an array (iterate through to make images. )
    HINT 3:document.createElement('IMG').
    HINT 4: Use flexbox to display images is nice format

7.  Add in a dropdown having at least 2 options such as price, color etc to be able to sort the images.

8.  Using JS create the sorting logic. You could do this JS either on the front-end or back-end. In a comment by the JS describe why you did it the way you chose.

DUE SUNDAY: Finish this and add some custom CSS and styling or any other features you think it should have. Make it yours!

    [FLEXBOX CHEAT SHEET](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
