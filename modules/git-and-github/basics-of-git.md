## Lesson 2: Setting up Git

---

### Introduction

Welcome to Lesson 2! You've got some basics down; now let's get Git properly set up on your machine. This lesson walks you through the initial Git setup, SSH key creation, user identity, and proxy setup.

### Learning Outcomes
- Configure Git via the terminal
- Generate and use SSH keys
- Configure user identity in Git
- Set up a Proxy for Git

---

### Section 1: Configuring Git (Terminal)

#### Setting Up User Info
You want Git to recognize you. You need to set up a username and email address to do that.
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Checking Your Settings
To verify that you've set up everything correctly, run:
```bash
git config --list
```

---

### Section 2: SSH Keys (Terminal & UI)

#### Generate SSH Key
An SSH key is a way to identify yourself to Git without typing your username and password every time.
```bash
ssh-keygen -t rsa -b 4096
```

#### Adding SSH Key to GitHub/GitLab
After generating the key:
Navigate to the settings in your GitHub or GitLab account.
Look for the "SSH and GPG keys" section.
Add your key.

---

### Section 3: User Identity Configuration

You've already set your user name and email, but if you ever need to update this information, just rerun the same config commands.

---

### Section 4: Setting Up a Proxy (Terminal)

You may need to set up a proxy if you're behind a corporate firewall. To do this:
```bash
git config --global http.proxy http://proxy.example.com:8080
```

---

## Lesson 3: Your First Git Commands

---

### Introduction

Alright, you've set up Git and are ready to roll! In this lesson, we'll execute our first Git commands, covering `git init,` `git clone,` commit changes, and learn about the staging area.

### Learning Outcomes
- Use `git init` and `git clone` commands
- Commit changes to a Git repository
- Understand the staging area
- Use `git log` and `git status` to check repository status

---

### Section 1: Git init, git clone (Terminal)

#### Initializing a New Repo
To kickstart a new Git repository, navigate to your project directory and run:
```bash
git init
```

#### Cloning an Existing Repo
To clone an existing repository, use the command:
```bash
git clone <repository_url>
```

---

### Section 2: Committing Changes (UI & Terminal)

#### How to Commit
After making changes in your project files, first stage them:
```bash
git add <file_name>
```

Next, commit these changes:
```bash
git commit -m "describe your changes here"
```

---

### Section 3: Understanding Staging (Terminal)

#### What's a Staging Area?
The staging area is like a prep table where Git collects all the changes that will go into your next commit.

#### Adding to Staging
```bash
git add <file_name>
```

#### Removing from Staging
```bash
git restore --staged <file_name>
```

---

### Section 4: Git log, git status (Terminal)

#### Viewing the Commit History
```bash
git log
```

#### Checking Your Repository Status
```bash
git status
```

---

And there you go! You've learned the basics of Git, how to set it up, and how to perform basic operations. Keep practicing to make these commands second nature.