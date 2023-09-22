### 5. **Introduction to Recursion**

#### Lesson Overview

Recursion is a programming technique where a function calls itself in its implementation. It's often used to solve problems that can be broken down into smaller sub-problems of the same type. In this lesson, you'll learn the basics of recursion and write simple recursive functions in JavaScript.

---

#### Objectives

- Understand the concept and the logic behind recursion.
- Implement simple recursive functions in JavaScript.

---

#### What is Recursion?

**Defining Recursion**

Recursion happens when a function calls itself in order to solve a problem. Essentially, it takes a problem and breaks it down into smaller instances of the same problem.

**Base Case and Recursive Case**

- **Base Case**: The simplest instance of the problem, which can be solved directly. It's the terminating scenario for recursion.
- **Recursive Case**: A more complex instance of the problem that requires the function to call itself.

**Example: Factorial Function**

In mathematics, the factorial of a positive integer \( n \) is the product of all positive integers less than or equal to \( n \).

- Factorial of 0 (0!) is 1 (Base Case)
- Factorial of \( n \) is \( n \times (n - 1)! \) (Recursive Case)

---

#### Writing Simple Recursive Functions

**Examples in JavaScript**

1. **Calculating Factorial**

```javascript
function factorial(n) {
  // Base Case
  if (n === 0) return 1;
  // Recursive Case
  return n * factorial(n - 1);
}
```

2. **Calculating Fibonacci Series**

The Fibonacci series starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.

```javascript
function fibonacci(n) {
  // Base Cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  // Recursive Case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

3. **Summing Array Elements**

```javascript
function sumArray(arr, n) {
  // Base Case
  if (n <= 0) return 0;
  // Recursive Case
  return sumArray(arr, n - 1) + arr[n - 1];
}
```

---

#### Assignments and Activities

- **Reading**: Study the chapter on recursion from a computer science textbook or other educational resource.
  
- **Coding Exercise**: Implement a recursive function to solve a problem you're interested in. Test it for various input sizes.
  
- **Discussion**: Join a forum or community discussion on when and why to use recursion over iterative solutions.

---

#### Conclusion

Recursion is a powerful tool for problem-solving, particularly for problems that can be naturally subdivided into smaller instances of the same problem. While it may seem challenging at first, practice and understanding will make it an invaluable tool in your programming toolkit. By the end of this lesson, you should be able to comprehend the concept of recursion and implement simple recursive functions in JavaScript.