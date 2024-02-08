# Disk and Directory Usage in Linux

Understanding how to manage disk and directory usage is crucial for maintaining a healthy and efficient system. This lesson covers four fundamental commands that are indispensable for this purpose: `df`, `du`, `fdisk`, and `stat`.

## `df` - Disk Free
The `df` command displays the amount of disk space used and available on your filesystems. It's particularly useful for getting a quick overview of your system's disk usage.

### Usage
```bash
df -h
```
The `-h` option formats the output in a human-readable form, showing sizes in KB, MB, or GB as appropriate.

### Example
Imagine you're preparing to deploy new software or updates and need to ensure you have enough disk space. Use `df -h` to quickly check available space across all mounted filesystems.

## `du` - Disk Usage
The `du` command estimates the space used by directories and files. It's essential for identifying what's consuming your disk space, especially when cleaning up or auditing system storage.

### Usage
```bash
du -sh /path/to/directory
```
The `-s` option provides a summary for the specified directory, and `-h` makes the output human-readable.

### Example
To keep your system organized, akin to planning a field operation with precision, you might use `du` to pinpoint high-usage areas that require cleanup.

## `fdisk` - Disk Partition Manipulation
`fdisk` is a powerful tool for manipulating disk partitions. While its use is more advanced and typically reserved for system administrators, understanding its function is beneficial.

### Usage
```bash
sudo fdisk -l
```
The `-l` option lists all partitions on all disks, helping identify available storage devices and their partition schemes.

### Example
Before creating a new partition for a project, you'd use `fdisk -l` to identify the appropriate disk and its current partition layout, similar to assessing a terrain before establishing a base.

## `stat` - File or Filesystem Status
The `stat` command provides detailed information about files or filesystems, including size, permissions, and last access time.

### Usage
```bash
stat filename
```

### Example
When verifying the integrity of files or when conducting a detailed audit of file access times and permissions, `stat` offers a comprehensive overview, akin to a detailed after-action report.

## Summary and Best Practices
Efficient management of disk and directory usage is akin to ensuring operational readiness in a military context. Regularly monitoring disk space, organizing files and directories, and being proactive about system maintenance can prevent issues before they arise.

### Exercises
1. **Disk Space Audit:** Use `df` to identify filesystems with less than 10% free space.
2. **Cleanup Operation:** Find the top 5 largest directories or files in your home directory using `du`.
3. **Partition Planning:** List all disk partitions and identify a disk with free space for a new partition.