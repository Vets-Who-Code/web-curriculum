# Building servers to handling Routes

## FACE TO FACE SESSION

Tonight will be a quick overview about servers:

- What they are
- Why we need them (Why can't we just have eveythingon front-end?)

## Node Overview

### Why do we need Node?

Cover obvios points such as:

- Write full-stack in one language
- Be able to utilize node modules (Show students [NPM site](https://www.npmjs.com/))

### NPM init

Demonstrate and show how npm init generates the package.json and allows for a high level view of your project by looking
at the installed dependencies. It is helpful using the analogy of the package.json is like the table of contents of a book, it will
show you the overview and author etc.

### Process.argv examples

Make sure to clearly show how commands on the command line are read as an array such as...

```
node server.js
// => ['node', 'server.js']

```

<img src="./images/processArgV.png" />

### Express Server

Now show a walkthrough building a server from scratch using express.
Show how easy it is to use a few lines of code with the help of express to set up a route and
show data using res.send("HOME SCREEN").

<img src="./images/server.png" />
