### **Introduction to Dynamic Programming**

#### Lesson Overview

Dynamic Programming (DP) is a programming technique used for solving complex problems by breaking them down into simpler subproblems. This lesson will provide an overview of what dynamic programming is, introduce the concepts of overlapping subproblems and optimal substructure, and explain why these concepts are key to understanding DP.

---

#### Objectives

- Gain a foundational understanding of dynamic programming.
- Learn about overlapping subproblems and optimal substructure in the context of DP.

---

#### The Essence of Dynamic Programming

1. **What is Dynamic Programming?**

    - Dynamic Programming is not about "programming" in the sense of coding but rather a methodological way of solving problems efficiently. It's particularly useful when the naive approach would involve redundant computations.
  
2. **Overlapping Subproblems**
  
    - This is one of the hallmarks of dynamic programming. A problem has overlapping subproblems if solving the problem involves solving the same subproblem multiple times. By storing the result of these subproblems, DP helps to avoid redundant computations.
  
3. **Optimal Substructure**
  
    - Optimal substructure exists when an optimal solution to a problem can be constructed efficiently from optimal solutions of its subproblems. For example, the shortest path between two nodes in a graph can be found by piecing together the shortest paths between each pair of nodes along the way.

---

#### Implementing Dynamic Programming in JavaScript

A classic example that incorporates both overlapping subproblems and optimal substructure is the Fibonacci sequence. A naive recursive approach can be highly inefficient due to redundant calculations. Here's how you can use dynamic programming to optimize it:

```javascript
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(50)); // Should output 12586269025 efficiently
```

In this example, the function uses a `memo` object to store the Fibonacci numbers that have already been calculated. This eliminates the need to calculate the same numbers multiple times, thus optimizing the function.

---

#### Conclusion

Dynamic programming is a powerful tool for solving complex problems efficiently. By understanding the principles of overlapping subproblems and optimal substructure, you can start to recognize when and how to apply DP to various challenges, both in coding interviews and real-world applications.