# Aliases and Shortcuts: Your CLI BFFs

## Table of Contents

1. [Setting Aliases](#setting-aliases)
2. [Common Aliases](#common-aliases)
3. [Functions](#functions)
4. [Scripting Aliases](#scripting-aliases)

---

## Setting Aliases

### How to Make Your Own Alias

So you're tired of typing out the same command again and again? Let's set an alias to make your life easier. Open your terminal and just type:

```
alias myalias='my long command here'
```

### Stick Around, Will Ya?

The alias you just created is temporary. After you close the terminal, poof! It's gone. To make it stick, you'll have to add it to your shell's config file, like `~/.bashrc` or `~/.zshrc`. Open the file and add:

```
alias persist='I will survive reboots!'
```

Don't forget to refresh the config file:

```
source ~/.bashrc
```

Or if you're on Zsh:

```
source ~/.zshrc
```

---

## Common Aliases

### Some Faves You Should Know

Here are some common aliases that a lot of people like to use. Feel free to steal them!

- `alias ll='ls -l'`: Detailed listing
- `alias la='ls -A'`: Listing including hidden files
- `alias ..='cd ..'`: Move up one directory

You get the idea, right?

---

## Functions

### When Aliases Aren't Enough

Sometimes you need to do more complex stuff. That's where functions come in. Here's how to define a function:

```
myfunc() {
  echo "Doing complex stuff!"
}
```

### Keep 'Em Coming!

Just like with aliases, if you want a function to stick around for more than one session, add it to your `~/.bashrc` or `~/.zshrc`.

---

## Scripting Aliases

### Aliases in Your Scripts? Why Not!

You can totally use aliases in your shell scripts. But, and it's a big but, you have to enable them with the `shopt` command if you're using Bash:

```
shopt -s expand_aliases
```

And then you can define your aliases right in the script:

```
alias sayhi='echo hi'
```

Remember, these aliases will only be available within the script.

---

There you go! That should cover the basics and then some. Enjoy making your terminal life a heck of a lot easier!
