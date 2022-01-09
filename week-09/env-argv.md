# Overview

The Nodejs `process` module gives us access to some variables passed from the executing environment.

For security reasons we don't put api keys in our code. We usually pass these values in through an environment variable (`process.env`) that's defined in the execution environment.

Also, when calling a Nodejs script you can pass arguments and those are accessible at `process.argv`.

## Activities

Save this to a file named `process-example.js`

```javascript
console.log(process.env);
console.log(process.argv);
```

Using the CLI go to the folder you saved the above file and run these commands and observe the output:

- `node process-example.js`
- `ENV_VAR='here' node process-example.js`
- `node process-example.js argument1 argument2`

## Resources

- [Environment Variables](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)
- [argv](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
