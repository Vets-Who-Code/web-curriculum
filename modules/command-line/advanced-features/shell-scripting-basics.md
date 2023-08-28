# Shell Scripting Basics

## Table of Contents

1. [Syntax](#syntax)
2. [Structure](#structure)
3. [Best Practices](#best-practices)
4. [Debugging](#debugging)

---

## Syntax

### Variables

Define variables like this:

```bash
my_var="Hello, World"
```

### Conditional Statements

You can use `if`, `else`, and `elif` like so:

```bash
if [ "$my_var" == "Hello, World" ]; then
  echo "It's a match!"
else
  echo "No match."
fi
```

### Loops

For loops are generally structured like this:

```bash
for i in {1..10}; do
  echo $i
done
```

---

## Structure

### Shebang

Always start your script with a shebang:

```bash
#!/bin/bash
```

### Functions

Functions make your script modular and reusable:

```bash
my_function() {
  echo "Hello from function!"
}
```

Call it like this:

```bash
my_function
```

---

## Best Practices

### Indentation

Use consistent 2 or 4-space indentation.

### Comments

Always comment your code to make it easier to understand:

```bash
# This is a comment
```

### Return Codes

Check the return codes of commands:

```bash
if command ; then
  echo "Success"
else
  echo "Failure"
fi
```

---

## Debugging

### Basic Debugging

Run your script with `-x` for basic debugging:

```bash
bash -x my_script.sh
```

### Advanced Debugging

Use `set` commands to control debugging features:

```bash
set -e  # Exit on error
set -u  # Treat unset variables as errors
```

---

And there you have it! A rundown of shell scripting basics. Hope this helps you out!
```

You can copy and paste this into a Markdown editor. Happy learning!