# Environmental Variables: The What, Why, and How

## Table of Contents

1. [What Are They?](#what-are-they)
2. [Setting Variables](#setting-variables)
3. [Retrieving Variables](#retrieving-variables)
4. [Exporting Variables](#exporting-variables)

---

## What Are They?

So, what are environmental variables anyway? Think of them like settings for your system. They're key-value pairs that you can access from any terminal window. Cool, right? They're super handy for storing values you don't want to hard-code into your applications, like API keys or settings.

---

## Setting Variables

### How to Set 'Em

Setting an environmental variable is a walk in the park. Just open up your terminal and type:

```
VARIABLE_NAME=value
```

### Temp or Permanent?

#### Temporary Variables

If you just wanna test something out, go ahead and set a temporary variable:

```
TEMP_VAR="I'm temporary!"
```

This will only last as long as your current shell session.

#### Permanent Variables

But what if you need something that sticks around? You'll need to set permanent variables:

1. Open up your `~/.bashrc` or `~/.zshrc`, depends on what shell you're using.
2. Add this line at the end:
```
export PERMANENT_VAR="I'm here to stay!"
```

Don't forget to source your `.bashrc` or `.zshrc` after you update it:
```
source ~/.bashrc
```

Or for Zsh:
```
source ~/.zshrc
```

---

## Retrieving Variables

Need to get the value of an environmental variable? Easy peasy:

```
echo $VARIABLE_NAME
```

Yep, that's it. Use the `echo` command and put a `$` in front of the variable name.

---

## Exporting Variables

So you've set a variable and now you want to make it available to other programs or scripts running from the shell? You need to `export` it:

```
export VARIABLE_NAME
```

Want to do it all in one line? Go for it:

```
export VARIABLE_NAME=value
```

### When Exporting Isn't Cool

Changed your mind and want to take back that export? No problem. Just `unset` it:

```
unset VARIABLE_NAME
```

And boom! It's gone from the environment.

