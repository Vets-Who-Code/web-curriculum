# Viewing Files

## `cat`
The `cat` (concatenate and display) command is a fundamental utility for viewing text files. It can display the entire content of a file at once, but it's not just a simple display tool. 

### Advanced Usage
- `cat -n`: Adds line numbers to the output.
- `cat -s`: Squeezes multiple adjacent blank lines.
- `cat file1.txt file2.txt > file3.txt`: Concatenates `file1.txt` and `file2.txt` and writes the result to `file3.txt`.

## `less`
The `less` command provides a way to view text files one screen at a time. It also supports searching and is generally more feature-rich compared to `cat` for file viewing.

### Advanced Usage
- `/pattern`: Searches forward for a pattern.
- `?pattern`: Searches backward for a pattern.
- `g`: Moves to the beginning of the file.
- `G`: Moves to the end of the file.

## `more`
The `more` command is similar to `less` but with fewer features. It also allows you to view files one screen at a time but lacks some of the advanced navigation features that `less` offers.

### Advanced Usage
- `space`: Scroll down one screen.
- `b`: Scroll back one screen.
- `/pattern`: Searches forward for a pattern.

## `tac`
The `tac` command is essentially the reverse of `cat`. It displays the contents of a file, but starting with the last line first.

### Advanced Usage
- `tac -s 'separator'`: Uses a custom separator to reverse lines.
- `tac -b`: Attaches the separator before instead of after the string.

## Summary
Viewing files is one of the most common tasks when working with text manipulation. Commands like `cat`, `less`, `more`, and `tac` provide you with a wide range of options for viewing and interacting with files. Understanding the advanced features of these commands can significantly enhance your efficiency in text manipulation tasks.
