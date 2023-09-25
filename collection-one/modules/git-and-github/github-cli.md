# Unit 6: GitHub CLI

---

## Lesson: Introduction to GitHub CLI

---

### Introduction

Welcome to Unit 6! We're diving into GitHub CLI (Command Line Interface), an essential tool for interacting with GitHub repositories right from your terminal.

### Learning Outcomes

- Install GitHub CLI
- Execute basic GitHub CLI commands
- Use aliases for frequent operations
- Authenticate via CLI

---

### Section 1: Installing GitHub CLI (Terminal)

#### Installation Steps

For macOS users:
```bash
brew install gh
```

For Ubuntu users:
```bash
sudo apt install gh
```

#### Verification

Check the installed version:
```bash
gh --version
```

---

### Section 2: Basic CLI Commands (Terminal)

#### Key Commands

- `gh repo view`: View the current repository
- `gh pr status`: Check the status of pull requests
- `gh issue list`: List all issues in the repository

---

### Section 3: Aliases in GitHub CLI (Terminal)

Aliases allow you to create shortcuts for commands. To set an alias:

```bash
gh alias set <alias-name> <gh-command>
```

---

### Section 4: Authentication in GitHub CLI (Terminal)

Run the following command to authenticate:

```bash
gh auth login
```

Follow the prompts to complete the authentication.

---

## Lesson: Managing Repositories with CLI

---

### Learning Outcomes

- Create and clone repositories
- Fork and make PRs
- Manage issues
- Cleanup repositories

---

### Section 1: Creating and Cloning Repos (Terminal)

Create a new repo:

```bash
gh repo create <name>
```

Clone an existing repo:

```bash
gh repo clone <repo-name>
```

---

### Section 2: Forking and PRs with CLI (Terminal)

Fork a repo:

```bash
gh repo fork <original-repo>
```

Create a PR:

```bash
gh pr create
```

---

### Section 3: Issue Management (Terminal)

Create an issue:

```bash
gh issue create
```

List all issues:

```bash
gh issue list
```

Close an issue:

```bash
gh issue close <issue-number>
```

---

### Section 4: Repo Cleanup (Terminal)

Delete a repo:

```bash
gh repo delete <repo-name>
```

---

## Lesson: Navigating GitHub with CLI

---

### Learning Outcomes

- Manage issues and PRs
- Work with Gists and Actions
- Navigate through repositories
- Use search and filters

---

### Section 1: Issue and PR Management (Terminal)

To view all open issues and PRs:

```bash
gh issue status
gh pr status
```

---

### Section 2: Gists and Actions with CLI (Terminal)

Create a gist:

```bash
gh gist create <file-name>
```

View GitHub Actions workflows:

```bash
gh run list
```

---

### Section 3: Navigating Repos (Terminal)

To navigate to the main page of a repo:

```bash
gh repo view --web
```

---

### Section 4: Search and Filters (Terminal)

To search for repositories:

```bash
gh repo list <owner> --limit <n>
```

Apply filters to issue lists:

```bash
gh issue list --label "bug"
```

---

You've made it through Unit 6! Now you should have a strong grasp of GitHub CLI and its capabilities, making you more effective and efficient in your GitHub operations. Keep practicing!