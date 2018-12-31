# Serving Up From the Back-End

## Goals:

1. Create a new branch and in week 6 (since we will be building upon this next week) add a folder ""
2. Create a Node project with a package.json
3. Install these dependencies:

   - Express

4. Create 2 'get' routes in your server file:

   - /
   - /api/cars

5. Make sure your server runs and sends a test string to the browser.
   HINT: res.send
6. After this test passes turn the res.send into res.sendFile
7. Create an index.html file and have the home route serve up a file
   HINT: check out built in path module in Node and also Google:"Serving up html files Node routes."
8. Create a cars.js file inside the folder and add some data (see below) and import it into the server.js file.
   FORMAT:

```
let cars = [
{
    model_number:1,
    type: "sedan",
    color:"blue"
},
{
    model_number:2,
    type: "coupe",
    color:"red"
},
]
```

9. Figure out how to have the /api/cars route display the data in json format in the browser.
