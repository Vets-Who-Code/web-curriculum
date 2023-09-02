# System Monitoring in the Command Line

## Overview

Effective system monitoring involves understanding various metrics and how they influence system performance. This lesson digs deep into advanced features of `top`, `htop`, `iostat`, and `vmstat`.

## Table of Contents

1. [Introduction](#introduction)
2. [`top`](#top)
3. [`htop`](#htop)
4. [`iostat`](#iostat)
5. [`vmstat`](#vmstat)
6. [Advanced Metrics and Terminology](#advanced-metrics-and-terminology)
7. [Best Practices](#best-practices)

---

## Introduction

Monitoring tools provide crucial information for diagnostics and system tuning. Mastering them will give you a deep understanding of what's happening under the hood.

---

## `top`

### Overview

`top` is the Swiss Army knife of monitoring tools, but it's not just for beginners.

### Advanced Usage

#### Batch Mode

Run `top` in batch mode for easier parsing and logging. 

```bash
top -b -n 1 > top_output.txt
```

#### Specific Processes

Monitor only specific processes by their PID.

```bash
top -p PID1,PID2
```

---

## `htop`

### Overview

`htop` offers a colorful and customizable interface for monitoring system performance.

### Advanced Usage

#### User-Specific Monitoring

Monitor processes for a specific user.

```bash
htop -u username
```

#### JSON Export

Export the current setup to a JSON file.

```bash
htop --output-setup-json > setup.json
```

---

## `iostat`

### Overview

`iostat` provides detailed I/O statistics, including CPU load and disk activity.

### Advanced Usage

#### Monitoring Specific Devices

Monitor specific devices by specifying their names.

```bash
iostat -d /dev/sda
```

#### Event Counters

Use the `-e` option to display extended statistics and event counters for devices.

```bash
iostat -e
```

---

## `vmstat`

### Overview

`vmstat` gives a comprehensive report on memory, processor, and I/O activities.

### Advanced Usage

#### Disk Statistics

Include disk statistics with the `-d` option.

```bash
vmstat -d
```

#### Event Display

Display all events with `-e`.

```bash
vmstat -e
```

---

## Advanced Metrics and Terminology

- **Load Average**: Represents the average system load over a period of time.
- **Context Switches**: These occur when the CPU switches from one task to another.
  
---

## Best Practices

- Script regular monitoring tasks to run at intervals.
- Learn to read and interpret key metrics to understand their impact on system performance.
- Regularly log `top` and `iostat` outputs for historical analysis.
