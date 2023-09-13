# Unit 5: Git Flow

---

## Lesson: Understanding Git Flow

---

### Introduction

Welcome to Unit 5! We're stepping up the game to understand advanced Git topics, focusing on Git Flow, a workflow that helps you manage complex projects with ease.

### Learning Outcomes

- Understand what Git Flow is and why it's useful
- Learn how to implement a feature using Git Flow
- Work with hotfixes and releases
- Dive into Git tags and versioning

---

### Section 1: What is Git Flow? (UI & Terminal)

#### Definition

Git Flow is a branching model for Git that defines a strict branching and merging strategy, helping teams to better manage features, hotfixes, and releases.

#### Components

- **Master Branch**: The official project history
- **Develop Branch**: Integration branch for features
- **Feature Branches**: For new features and experiments
- **Release Branches**: Prepping for a new product release
- **Hotfix Branches**: Quick patches for issues in production

---

### Section 2: Implementing a Feature using Git Flow (Terminal)

#### Steps

1. Checkout the 'develop' branch: 
   ```bash
   git checkout develop
   ```
2. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Develop your feature and commit as you go:
   ```bash
   git add .
   git commit -m "Implement part of new feature"
   ```
4. When done, merge the feature branch into 'develop':
   ```bash
   git checkout develop
   git merge feature/new-feature
   ```

---

### Section 3: Hotfixes and Releases (Terminal)

#### Hotfixes

1. Create a hotfix branch from 'master':
   ```bash
   git checkout -b hotfix/urgent-fix master
   ```
2. Make the fix and commit:
   ```bash
   git add .
   git commit -m "Fix the urgent issue"
   ```
3. Merge back into 'master' and 'develop':
   ```bash
   git checkout master
   git merge hotfix/urgent-fix
   git checkout develop
   git merge hotfix/urgent-fix
   ```

#### Releases

1. Create a release branch from 'develop':
   ```bash
   git checkout -b release/v1.0 develop
   ```
2. Do final testing, bump version, and commit:
   ```bash
   git add .
   git commit -m "Finalize release v1.0"
   ```
3. Merge into 'master' and tag:
   ```bash
   git checkout master
   git merge release/v1.0
   ```

---

### Section 4: Git Tags and Versioning (Terminal)

#### Git Tags

- Tags help you to identify versions in your code history, usually associated with release points.

1. Tagging a commit:
   ```bash
   git tag -a v1.0 -m "Release version 1.0"
   ```
2. Pushing tags to remote:
   ```bash
   git push origin --tags
   ```

#### Versioning

- Semantic Versioning is commonly used: `MAJOR.MINOR.PATCH`, e.g., `1.0.2`.

---

And that's it for advanced Git topics! You now have a deeper understanding of Git and how to manage complex project workflows using Git Flow. Keep practicing, and you'll be a Git pro in no time!