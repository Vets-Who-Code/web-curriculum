# Data from the Front to Back

## FACE TO FACE SESSION

## Overview of CSS Specificity

    element(div): 0-0-1
    class : 0-1-0
    id:1-0-0

## Adding a Form

Add an html form to front-end index.html.

```
    <form action="add/name" method="POST">
        <label for="name">Car Type</label>
        <input type="text" name="carType">
        <button type="submit">Submit</button>
    </form>
```

Talk about full page reload vs partial page reload. Form submission is full page reload vs using ajax with the submit button would be partial. Most of time partial is better.

## Adding Middleware

add this to the server to allow built-in body parsing of data from front-end:

```
// Middleware
app.use(express.urlencoded({ extended: true }));
```
