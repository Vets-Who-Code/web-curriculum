### **Arrays**

#### Lesson Overview

Arrays are one of the most commonly used data structures in programming. In JavaScript, arrays are used to store multiple values in a single variable. This lesson will introduce you to the definition, syntax, and common operations that can be performed on arrays in JavaScript.

---

#### Objectives

- Understand what arrays are and how they are defined in JavaScript.
- Learn to perform common operations on arrays like accessing elements, adding, and removing items.

---

#### Definition and Syntax in JavaScript

**What is an Array?**

An array is a data structure that can hold more than one value at a time. It is a collection of variables that are accessed with an index number.

**Syntax in JavaScript**

Arrays can be defined in multiple ways in JavaScript:

- Using the `Array` constructor:
```javascript
let arr1 = new Array(1, 2, 3, 4);
```

- Using square brackets `[]` (Array literal):
```javascript
let arr2 = [1, 2, 3, 4];
```

---

#### Common Operations

**Accessing Elements**

Elements in an array can be accessed by their index, which starts from 0. 

```javascript
let myArray = [10, 20, 30, 40];
console.log(myArray[0]);  // Output: 10
console.log(myArray[2]);  // Output: 30
```

**Adding Elements**

- `push()`: Adds one or more elements to the end of an array.
```javascript
myArray.push(50);
```

- `unshift()`: Adds one or more elements to the beginning of an array.
```javascript
myArray.unshift(0);
```

**Removing Elements**

- `pop()`: Removes the last element from an array and returns that element.
```javascript
myArray.pop();  // Output: 50 (Element removed)
```

- `shift()`: Removes the first element from an array and returns that element.
```javascript
myArray.shift();  // Output: 0 (Element removed)
```

**Others**

- `slice()`: Returns a shallow copy of a portion of an array.
- `splice()`: Adds or removes items to or from an array.
- `indexOf()`: Searches the array for a specified item and returns its position.

---

#### Conclusion

Arrays are fundamental to any programming language, and JavaScript is no exception. By understanding how to define arrays and manipulate them through various operations, you're setting a strong foundation for more advanced programming topics.