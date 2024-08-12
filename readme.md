# String Formatter

`String Formatter` is a lightweight JavaScript library designed to provide easy-to-use functions for capitalizing strings. Whether you need to capitalize the first letter of a string, each part of a full name, or just a single name, this library simplifies these tasks with straightforward methods.

## Features

- **Capitalize First**: Capitalizes the first letter of a given string and converts the rest of the string to lowercase.
- **Capitalize Full Name**: Capitalizes the first letter of each part of a full name, making it suitable for formatting names in user interfaces.
- **Capitalize Single Name**: Capitalizes the first letter of a single name, useful for title cases and user-friendly displays.

## Installation

You can install the library via npm:

```bash
npm install @noobdevelova/stringformatter
```


## Usage

Example usage of this library:

```bash
import { capitalizeFirst, capitalizeFullName, capitalizeSingleName } from 'string-capitalizer';

// Example usage

// Capitalize the first letter of a single name
const singleName = capitalizeSingleName('john');
console.log(singleName); // Output: John

// Capitalize the first letter of each part of a full name
const fullName = capitalizeFullName('john doe');
console.log(fullName); // Output: John Doe

// Capitalize the first letter of a string
const firstNameCapitalized = capitalizeFirst('example');
console.log(firstNameCapitalized); // Output: Example
```
## Acknowledgments

* **Author**: Randi Risdiansyah

## License

This library is licensed under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).