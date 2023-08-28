# Sorting and Uniqueness

## `sort`
The `sort` command sorts the lines in a text file.

### Advanced Usage
- `sort file.txt`: Sorts lines in `file.txt` alphabetically.
- `sort -n file.txt`: Sorts lines numerically.

### Use-cases
- Sorting logs.
- Organizing data.

## `uniq`
The `uniq` command removes duplicate lines from a sorted file.

### Advanced Usage
- `uniq file.txt`: Removes adjacent duplicate lines in `file.txt`.
- `sort file.txt | uniq`: Sorts and removes all duplicate lines.

### Use-cases
- Data cleanup.
- Log analysis.

## `cut`
The `cut` command removes sections from each line of a file.

### Advanced Usage
- `cut -f 1 -d ":" /etc/passwd`: Gets the first field from each line in `/etc/passwd`.

### Use-cases
- Data extraction.
- File manipulation.

## `paste`
The `paste` command merges lines of files.

### Advanced Usage
- `paste file1.txt file2.txt`: Merges corresponding lines from `file1.txt` and `file2.txt`.

### Use-cases
- Data merging.
- Report generation.

## Summary
Knowing how to sort and make your data unique can greatly assist in data manipulation and analysis. The `sort` and `uniq` commands are powerful tools for organizing your data. They can be even more powerful when combined with `cut` for data extraction and `paste` for data combination. These utilities, when mastered, provide a robust set of options for text manipulation, enhancing your capabilities in handling a variety of tasks from data analysis to report generation.
