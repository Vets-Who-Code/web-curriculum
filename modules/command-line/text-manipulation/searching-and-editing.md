# Searching and Editing

## `grep`
`grep` is a powerful text-search utility. It can search through files and print lines that match a pattern.

### Advanced Usage
- `grep -r`: Recursive search.
- `grep -i`: Case-insensitive search.
- `grep -v`: Invert match, showing lines that don't match the pattern.

## `sed`
The `sed` (Stream EDitor) command allows for performing basic text transformations on an input stream or file.

### Advanced Usage
- `sed 's/foo/bar/g'`: Replaces all instances of 'foo' with 'bar'.
- `sed -n '5,10p'`: Prints lines 5 through 10.

## `awk`
`awk` is another text processing tool, but it's more focused on columnar data. It's often used for data extraction and reporting.

### Advanced Usage
- `awk -F: '{ print $1 }'`: Splits lines by the colon and prints the first field.
- `awk '$1 > 5'`: Prints lines where the first field is greater than 5.

## `tr`
The `tr` (translate) command is used for translating or deleting characters.

### Advanced Usage
- `tr 'a-z' 'A-Z'`: Transforms lowercase to uppercase.
- `tr -d '[:digit:]'`: Deletes all digits.

## Summary
The command line offers an arsenal of text searching and editing tools, each with its unique features and advantages. `grep` for pattern matching, `sed` for stream editing, `awk` for columnar data processing, and `tr` for character translation are just a few examples. Understanding these utilities will make you more efficient in text manipulation and data transformation tasks.
