# Environmental Variables on the Command Line

## Overview

In this lesson, we'll dive deep into environment variables within the context of the command line. Environment variables are key-value pairs that can be used to configure system settings or applications, and they are especially useful for script automation, secure data storage, and more.

## Table of Contents

- [Environmental Variables on the Command Line](#environmental-variables-on-the-command-line)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Setting Environment Variables](#setting-environment-variables)
    - [Temporary Variables](#temporary-variables)
    - [Permanent Variables](#permanent-variables)
    - [Multiple Commands](#multiple-commands)
  - [Retrieving Environment Variables](#retrieving-environment-variables)
  - [Exporting Environment Variables](#exporting-environment-variables)
  - [Unsetting Environment Variables](#unsetting-environment-variables)
  - [Best Practices](#best-practices)
  - [Scripts and Environment Variables](#scripts-and-environment-variables)

## Setting Environment Variables

### Temporary Variables

You can set an environment variable that is only available for the duration of the session.

```bash
VAR_NAME=value
```

### Permanent Variables

For making variables permanent, you need to add them to profile scripts like `.bashrc` or `.bash_profile`.

```bash
echo 'export VAR_NAME=value' >> ~/.bashrc
source ~/.bashrc
```

### Multiple Commands

Run multiple commands in the same environment.

```bash
VAR=value command1; command2
```

## Retrieving Environment Variables

To retrieve the value of an environment variable:

```bash
echo $VAR_NAME
```

To list all environment variables:

```bash
env
```

## Exporting Environment Variables

Variables are local to the shell where they are defined. To make them available to child processes, you need to `export` them.

```bash
export VAR_NAME
```

## Unsetting Environment Variables

To unset an environment variable:

```bash
unset VAR_NAME
```

## Best Practices

- Use uppercase for variable names.
- Avoid using special characters in variable names.
- Do not overwrite essential system variables like `PATH`, `USER`, etc.

## Scripts and Environment Variables

You can use environment variables within shell scripts for configuration or to pass data between scripts and the command line.

Example (`myscript.sh`):

```bash
#!/bin/bash
echo "Website: $WEBSITE"
```

Run the script with an environment variable:

```bash
WEBSITE=www.example.com ./myscript.sh
```