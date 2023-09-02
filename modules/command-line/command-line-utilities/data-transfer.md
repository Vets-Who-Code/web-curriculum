
# Data Transfer Techniques in the Command Line

## Overview

Data transfer utilities are crucial for efficiently moving and synchronizing data between local and remote systems. This lesson delves deep into advanced use-cases for `scp`, `rsync`, `wget`, and `ftp`.

## Table of Contents

1. [Introduction](#introduction)
2. [`scp`](#scp)
3. [`rsync`](#rsync)
4. [`wget`](#wget)
5. [`ftp`](#ftp)
6. [Rate Limiting and Throttling](#rate-limiting-and-throttling)
7. [Best Practices](#best-practices)

---

## Introduction

Being able to move data securely and efficiently is a skill often overlooked but crucial for any software engineer.

---

## `scp`

### Overview

`scp` (Secure Copy) is used for securely transferring files between local and remote hosts.

### Advanced Usage

#### Copy with Port Specified

Copy files from a remote host to the local host with a specific SSH port.

```bash
scp -P 2222 username@remote:/path/to/file /local/path/
```

#### Copying Entire Directories

```bash
scp -r username@remote:/path/to/folder /local/path/
```

---

## `rsync`

### Overview

`rsync` is for syncing data locally or remotely, often used for backups.

### Advanced Usage

#### Synchronize Remote to Local with Compression

```bash
rsync -avz username@remote:/path/to/folder /local/path/
```

#### Exclude Files

Exclude specific files or directories during the sync.

```bash
rsync -av --exclude 'tmp/*' source/ destination/
```

#### Bandwidth Limit

Limit the data transfer rate.

```bash
rsync --bwlimit=1000 source/ destination/
```

---

## `wget`

### Overview

`wget` is a non-interactive downloader.

### Advanced Usage

#### Download in the Background

```bash
wget -b url
```

#### Retry Downloads

Automatically retry the download in case of a failure.

```bash
wget --retry-connrefused --waitretry=seconds --timeout=seconds url
```

---

## `ftp`

### Overview

`ftp` (File Transfer Protocol) is used for transferring files between local and remote file systems.

### Advanced Usage

#### Switch to Passive Mode

```bash
ftp -p host
```

#### Auto-login and Batch Processing

Use a `.netrc` file to store credentials and run FTP commands from a script.

```bash
ftp -s:ftp_commands.txt host
```

---

## Rate Limiting and Throttling

Learn how to control your data transfer speed to prevent bottlenecking network resources.

- `rsync --bwlimit=1000` to limit rsync bandwidth to 1000 KB/s.
- `wget --limit-rate=300k` to limit wget download speed to 300 KB/s.

---

## Best Practices

- Always validate the integrity of transferred files using checksums.
- For mission-critical transfers, prefer utilities that offer resume capabilities.
- Use compression flags when network bandwidth is a limiting factor.
