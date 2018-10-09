# Getting to the Bottom of Promises

So alot of promises are built into methods we use daily such as:

- Fetch
- Axios

So anytime we call .then() pretty much means we're handling a promise. But this is usually abstracted and we don't see the promise being constructed and resolved.

## Read:

- [Fetch vs. Axios.js for making http requests](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)
- [Write Your Own Promise](http://thecodebarbarian.com/write-your-own-node-js-promise-library-from-scratch.html)

  They actually re-create the built in Promise object in JS... which is awesome and shows how JS is made and how one can make your own helpers in code. This is the stuff that will make you a great programmer... understanding the show behind the scenes... instead of just knowing how to call .then().

## Goals:

1. Use the built in methods to demonstrate how they work in anyway you choose.

- Array.map()

  - Write a comment why you would use .map() over .forEach().

- Array.includes()

2. Based open the reading Create your own Promise in a function then use it like the example towards the bottom of the article (using a setTimeout to run and then run the other code when resolved).

3. Use remaining time to do some of the JS repl.it .
