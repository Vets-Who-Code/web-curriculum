# Overview

Reading/writing files programmatically is immensely helpful in the world of dev ops. In the context of this course it will unlock the ability to have a "database" in the form of a file on your computer.

_note_: Nodejs is async by nature. When you see `fs.readFile` know that this is going to be async. For now you can work with the synchronous modules because they're easier to understand. Recommend you use:

- `fs.readFileSync`
- `fs.writeFileSync`

## Activities

- Create a nodejs file. Make a variable that is JSON.
- Create a local file called something like `db.txt`
- Stringify your JSON variable
- Write your JSON variable to `db.txt`

## Resources

- [Read Files](https://nodejs.dev/learn/reading-files-with-nodejs)
- [Write Files](https://nodejs.dev/learn/writing-files-with-nodejs)
