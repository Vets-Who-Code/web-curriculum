# Shell Scripting Basics

## Table of Contents

1. [Syntax](#syntax)
2. [Structure](#structure)
3. [Best Practices](#best-practices)
4. [Debugging](#debugging)

---

## Syntax

### Variables

In shell scripting, variables are declared without specifying their type. The syntax for declaring a variable is:

```
variable_name=value
```

Example:

\```bash
my_var="Hello, World"
\```

### Conditional Statements

Conditional statements like `if`, `else`, and `elif` are used to perform different actions based on different conditions.

\```bash
if [ "$variable_one" -gt "$variable_two" ]; then
  echo "Variable one is greater"
elif [ "$variable_one" -eq "$variable_two" ]; then
  echo "Variables are equal"
else
  echo "Variable two is greater"
fi
\```

### Loops

Shell scripting provides `for` and `while` loops.

#### For Loop

\```bash
for i in {1..10}; do
  echo $i
done
\```

#### While Loop

\```bash
count=0
while [ $count -lt 10 ]; do
  echo $count
  ((count++))
done
\```

---

## Structure

### Shebang

The shebang (`#!`) at the top of the shell script defines the interpreter for the script.

\```bash
#!/bin/bash
\```

### Functions

Functions contribute to modularity and easier understanding.

\```bash
function_name() {
  # function body
}
\```

Example:

\```bash
my_function() {
  echo "Hello from my_function!"
}
\```

To call the function:

\```bash
my_function
\```

---

## Best Practices

### Indentation and Formatting

Maintain consistent indentation for readability. Opt for either 2 or 4-space indentation.

### Comments

Comment your code to clarify your code blocks' functionality. 

\```bash
# This loop counts from 1 to 10
\```

### Error Handling

Check the return codes of commands and handle errors.

\```bash
if command; then
  echo "Command succeeded"
else
  echo "Command failed"
fi
\```

---

## Debugging

### Basic Debugging

For elementary debugging, run your script with the `-x` option.

\```bash
bash -x script.sh
\```

### Advanced Debugging

Use the `set` command in your script to enable or disable specific behaviors.

\```bash
set -e  # Exit on first error
set -u  # Treat unset variables as errors
\```

To disable:

\```bash
set +e  # Continue even if there is an error
\```
