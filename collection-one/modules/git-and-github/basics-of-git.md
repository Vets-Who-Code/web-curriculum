
## Lesson 2: Setting up Git

### Introduction

Welcome to Lesson 2! Having covered some basics, it's now time to properly configure Git on your machine. This lesson guides you through Git's initial setup, creating SSH keys, setting your user identity, and configuring a proxy for Git if necessary.

### Learning Outcomes

By the end of this lesson, you will be able to:
- Configure Git using the terminal.
- Generate and utilize SSH keys for secure connections.
- Set and manage your user identity within Git.
- Configure a proxy for Git operations, when required.

### Visual Aids

**Insert Diagram**: "The Git Configuration Process" - A flowchart detailing the steps from installing Git to configuring user settings and SSH keys.

---

### Section 1: Configuring Git (Terminal)

#### Setting Up User Info

First, let's personalize your Git environment by setting up your username and email address:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Interactive Tutorial**: Link to an interactive shell simulator where learners can practice Git configuration commands in real-time.

#### Verifying Your Configuration

Ensure your setup is correct by listing your Git configuration:

```bash
git config --list
```

**Exercise**: Verify your Git configuration and modify your username and email if necessary.

---

### Section 2: SSH Keys (Terminal & UI)

#### Generating an SSH Key

SSH keys secure your identity to Git services, eliminating the need for password entry on each operation.

```bash
ssh-keygen -t rsa -b 4096
```

**Insert Screenshot**: "Generating an SSH Key" - A visual guide showing the terminal during the key generation process.

#### Adding Your SSH Key to GitHub/GitLab

- Navigate to your GitHub or GitLab settings.
- Find the "SSH and GPG keys" section and add your new key.

**Video Tutorial**: A short video demonstrating how to add your SSH key to GitHub or GitLab.

---

### Section 3: Proxy Configuration (Terminal)

If you're behind a corporate firewall, you may need to configure a proxy:

```bash
git config --global http.proxy http://proxy.example.com:8080
```

**Troubleshooting Box**: Common proxy configuration issues and how to resolve them.

---

### Practical Example

**Exercise**: Configure your Git with the provided details, generate an SSH key, and add it to your GitHub account. Verify all configurations using `git config --list`.

---

### Further Reading and Resources

- Official Git Documentation
- Advanced SSH Key Management in Git
- Best Practices for Git Configuration

**Community Forum**: Join our Git learners' community to share insights, ask questions, and receive feedback.

### Lesson Recap

In this lesson, you've learned how to set up Git on your machine, generate SSH keys for secure authentication, configure your Git user identity, and set up a proxy for Git if needed. Practice these steps to become comfortable with Git configuration and prepare for more advanced Git operations in future lessons.

### Preview of Next Lesson

In Lesson 3, we'll dive into your first Git commands, exploring `git init`, `git clone`, and the process of staging and committing changes.
