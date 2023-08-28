# Basic Regular Expressions

## Syntax
Regular expressions (or regex) use a sequence of characters to define a search pattern. Symbols like `.`, `*`, `?`, `[]`, and others have special meanings.

### Advanced Usage
- `.txt$`: Matches lines ending with `.txt`.
- `^abc`: Matches lines starting with `abc`.

## Usage
Regex is commonly used in commands like `grep`, `sed`, `awk`, and others for pattern matching.

### Use-cases
- Data validation.
- Text searching and replacing.

## Examples

- `grep '^[0-9]' file.txt`: Finds all lines in `file.txt` that start with a number.
- `sed 's/abc/xyz/' file.txt`: Replaces the first instance of `abc` with `xyz` in each line of `file.txt`.

## `egrep`
Extended grep (`egrep`) supports extended regular expression syntax, offering more capabilities like alternation, grouping, etc.

### Advanced Usage
- `egrep 'error|fail' logs.txt`: Finds lines in `logs.txt` containing either "error" or "fail".

### Use-cases
- Advanced text searches.
- Log analysis.

## Summary
Regular expressions offer a powerful way to perform complex text searches, data validation, and text transformation. Mastering the basic syntax and structure of regex can greatly improve your text manipulation skills. The utility `egrep` extends these capabilities even further, allowing for more complex search patterns. By understanding these basics, you set yourself up to handle a wide variety of text manipulation challenges.
