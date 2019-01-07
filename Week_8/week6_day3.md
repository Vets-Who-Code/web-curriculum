# Building Your API 🏗️

## Read

[Express Tutorial](https://scotch.io/tutorials/use-expressjs-to-deliver-html-files)

Do NOT do the tutorial but read through it to scan how to build an express server and serve up static html files.

# Passing form data to routes on back-end 📝

Last night I showed how to initiate an ajax call to connect to the back-end and pass along form data. I wanted to show you the jQuery way but tonight and moving forward we will use Fetch since it's better and promise based.

## Read

[Using Fetch API to Get and Post](https://dev.to/dev_amaz/using-fetch-api-to-get-and-post--1g7d)

## Goals

- Create a form in our html that has the same inputs as the car objects in your js file.(model, color etc.)
- Add a new POST route
  - /api/new
- Install body-parser in your package.json and add this middleware to your server file BEFORE your routes.
  HINT: look at the body-parser NPM module documentation for setting up code (about 4 lines)
- Use the article you read to use fetch to connect to that post route and send the form data thorugh.
  HINT: You will need to use vanilla JS to grab the form input data and make an object.
- If you keep getting am empty object on the back-end message me in Slack.
- Once you get the data console.log on the back-end notify me in channel.
