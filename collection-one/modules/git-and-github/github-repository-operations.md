# Unit 4: GitHub Repository Operations

---

## Lesson: Creating Your First GitHub Repository

---

### Introduction

Welcome to Unit 4! Here, we're diving into GitHub operations, starting from repository setup to understanding its components like README, .gitignore, and License files.

### Learning Outcomes

- Setup a repository on GitHub via UI
- Clone a GitHub repository to your local machine
- Understand the importance of README, .gitignore, and License files
- Learn how to add collaborators to a GitHub repository

---

### Section 1: Repository Setup (UI)

#### Creating a New Repo

1. Navigate to GitHub and log in to your account.
2. Click the "New" button to create a new repository.
3. Give your repository a name and optional description.
4. Choose the repository's visibility as either public or private.
5. Click "Create repository."

#### Navigating Your New Repo

- Once created, you'll see tabs like 'Code', 'Issues', 'Pull requests', etc., which are different sections of your repository.

---

### Section 2: Clone Repository (Terminal)

#### Cloning Steps

1. On your GitHub repo page, click the "Code" button to find the clone URL.
2. Copy the URL.
3. Open terminal, navigate to the directory where you want to clone the repository.
4. Run `git clone <copied_URL>`.

---

### Section 3: Understanding README, .gitignore, and License

#### README

- Serves as the front page for your project. It usually contains information about the project and how to use it.

#### .gitignore

- A text file that tells Git which files or folders to ignore in a project.

#### License

- A legal document that specifies the terms under which the project can be used by others.

---

### Section 4: Adding Collaborators (UI)

1. Navigate to "Settings" on your repository page.
2. Go to "Manage access."
3. Click "Invite a collaborator" and add their GitHub username or email address.
4. The collaborator will receive an invitation which they'll have to accept to join.

---

## Lesson: Basic Git Workflow

---

### Introduction

Now that you've got a repository up and running, let's get into the meat of GitHub operations—working with Git.

### Learning Outcomes

- Perform basic Git operations: `git add`, `git commit`, `git push`
- Create and manage Pull Requests
- Review code
- Merge Pull Requests

---

### Section 1: git add, git commit, git push (Terminal)

#### Workflow Steps

1. Make changes to your project files.
2. Stage changes: `git add <file_name>`.
3. Commit changes: `git commit -m "describe changes"`.
4. Push changes: `git push origin <branch_name>`.

---

### Section 2: Creating Pull Requests (UI)

1. Navigate to your repo on GitHub.
2. Click on 'Pull Requests' and then 'New Pull Request'.
3. Choose the branches you want to compare and create a Pull Request for.
4. Fill out the description and click 'Create Pull Request'.

---

### Section 3: Reviewing Code (UI)

1. Go to 'Pull Requests' tab.
2. Select the Pull Request you want to review.
3. Navigate through 'Files changed' to see the code differences.
4. You can leave comments or suggestions.

---

### Section 4: Merging PRs (UI)

1. Once the Pull Request has been reviewed and approved, navigate to the 'Pull Requests' tab.
2. Click the Pull Request you want to merge.
3. Click 'Merge Pull Request', then 'Confirm Merge'.

---

And that's a wrap on GitHub Repository Operations! You've learned how to set up a repo, collaborate, and manage your codebase using Git and GitHub. Keep experimenting to master these skills.