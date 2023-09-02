# In-depth Job Control on the Command Line

## Overview

Mastering job control is essential for optimizing your workflow on the command line. This advanced lesson covers a range of techniques for job management, including signaling, job scheduling, and the use of specific commands like `fg`, `bg`, `jobs`, and `kill`.

## Table of Contents

- [In-depth Job Control on the Command Line](#in-depth-job-control-on-the-command-line)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Foreground and Background Jobs](#foreground-and-background-jobs)
    - [Foreground Jobs](#foreground-jobs)
    - [Background Jobs](#background-jobs)
    - [Pausing Jobs](#pausing-jobs)
  - [Switching Between Jobs](#switching-between-jobs)
    - [To Foreground](#to-foreground)
    - [To Background](#to-background)
  - [Job Identification](#job-identification)
  - [Advanced Use of `fg`, `bg`, and `jobs`](#advanced-use-of-fg-bg-and-jobs)
    - [Listing Specific Jobs](#listing-specific-jobs)
    - [Bring Most Recent Job to Foreground](#bring-most-recent-job-to-foreground)
    - [Send Job to Background and Continue Execution](#send-job-to-background-and-continue-execution)
  - [Signals and `kill`](#signals-and-kill)
    - [List of Signals](#list-of-signals)
    - [Sending Signals](#sending-signals)
  - [Stopping vs. Terminating](#stopping-vs-terminating)
  - [Monitoring Jobs](#monitoring-jobs)
  - [Best Practices](#best-practices)

---

## Foreground and Background Jobs

### Foreground Jobs

- Executed directly in the terminal and occupy the shell until they complete.
  
```
$ wget http://example.com/large-file.zip
```

### Background Jobs

- Run without occupying the shell, allowing you to execute other commands.

```
$ wget http://example.com/large-file.zip &
```

### Pausing Jobs

- You can pause a foreground job by hitting `Ctrl+Z`.

```bash
# This will pause the current job
$ [Ctrl+Z]
```

---

## Switching Between Jobs

- You can switch between jobs using the `fg` and `bg` commands.

### To Foreground

```bash
$ fg %1
```

### To Background

```bash
# Pause current job with Ctrl+Z
$ bg %1
```

---

## Job Identification

- Each background job is identified by a job ID (`%1`, `%2`, etc.) as well as a process ID (PID).

```bash
$ jobs
# Output:
# [1]  - running    wget http://example.com/large-file.zip
# [2]  - stopped    nano text.txt
```

---

## Advanced Use of `fg`, `bg`, and `jobs`

### Listing Specific Jobs

- `jobs -l` will display process IDs as well.

### Bring Most Recent Job to Foreground

```bash
$ fg %-
```

### Send Job to Background and Continue Execution

```bash
$ bg %2
```

---

## Signals and `kill`

- The `kill` command can send signals to processes, not just terminate them.

### List of Signals

- `kill -l` will list all available signals.

### Sending Signals

```bash
$ kill -SIGSTOP %1
```

---

## Stopping vs. Terminating

- `SIGSTOP` and `SIGTSTP` will pause a process, while `SIGKILL` and `SIGTERM` will terminate it.

```bash
# Pausing
$ kill -SIGSTOP %1

# Killing
$ kill -SIGKILL %1
```

---

## Monitoring Jobs

- Use `ps`, `top`, or `htop` to monitor jobs.

```bash
$ ps aux | grep 'wget'
```

---

## Best Practices

- Always know what jobs are running (`jobs`).
- Be careful when using `kill` as it forcibly stops processes.
- Use `SIGTERM` before `SIGKILL` to allow processes to clean up.
