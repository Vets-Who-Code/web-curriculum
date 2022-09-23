---
title: Command Line
id: developer-workflow-command line
---
# What is the Command Line
The window, which is usually called the command line or command-line interface, is a text-based application for viewing, handling, and manipulating files on your computer. It's much like Windows Explorer or Finder on the Mac, but without the graphical interface. Other names for the command line are: cmd, CLI, prompt, console or terminal. It is one of two ways to interact with your computer. Here we are going to do a simple primer of all the commands needed to start a project.
Shortcut To Open the Terminal On Mac
To open your terminal on the mac press the  ⌘ and space button together. Then type in Terminal.
Begin by listing ls the contents of the terminal. Type the command below:
```console
$ ls
```
That should list all the folders on your machine from there. Now make your project directory by typing ```mkdir projects``` and let's change directories by typing ```cd projects``` so we can get inside the project folder. we can do the commands together by typing ```&&```.
```console
$ mkdir projects && cd projects
```
Now that the project folder is made, time to create a file. We are going to use the same command as above to make a ```profile-site``` folder and change directory into the ```profile-site``` folder then use the ```touch``` command to create an index file in the ```profile-site```
```console
$ mkdir profile-site && cd profile-site
$ touch index.html
```
That's it. you have your first file!
## Lets Make The Project Structure!
Now we are gonna flesh out the project structure. Let's make two folders, one called ```styles``` and the other called ```scripts``` and add files called ```styles.css``` and ```scripts.js```
```console
$ mkdir styles scripts
$ touch styles/styles.css scripts.scripts.js
```
Oh no! We messed up the name of the scripts file! Looks like we have to delete it. We can do that for folders and files by using ```rm -rf```. Lets fix our mistake.
```console
$ rm -rf scripts.scripts.js
$ touch scripts/scripts.js
```
Great job on your first project code structure!