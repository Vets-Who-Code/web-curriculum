### **Memoization and Tabulation**

#### Lesson Overview

Memoization and tabulation are two techniques in dynamic programming that optimize recursion by storing computed results to avoid redundant work. This lesson will focus on the differences between memoization and tabulation and how to implement them to optimize recursive functions.

---

#### Objectives

- Understand the concept of memoization and how it optimizes recursive solutions.
- Learn about tabulation and its differences from memoization.
  
---

#### Techniques for Optimizing Recursion

1. **Memoization**

    - Memoization is a technique to store the results of expensive function calls and return the cached result when the same inputs occur again. This is a 'top-down' approach as you solve the main problem first, which naturally breaks it down into smaller subproblems.
    
    **Example in JavaScript: Fibonacci Sequence with Memoization**
    
    ```javascript
    function fibMemo(n, memo = {}) {
      if (n in memo) return memo[n];
      if (n === 0) return 0;
      if (n === 1) return 1;

      memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
      return memo[n];
    }

    console.log(fibMemo(50)); // Efficiently outputs 12586269025
    ```
  
2. **Tabulation**

    - Unlike memoization, tabulation is a 'bottom-up' approach, solving the problem by solving each subproblem first and using its solutions to solve larger parent problems. It usually involves building a table and filling it in a specific order.
    
    **Example in JavaScript: Fibonacci Sequence with Tabulation**
    
    ```javascript
    function fibTab(n) {
      const table = Array(n + 1).fill(0);
      table[1] = 1;

      for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
      }

      return table[n];
    }

    console.log(fibTab(50)); // Efficiently outputs 12586269025
    ```
  
---

#### Comparison

- **Memoization**: Top-down, uses recursion, easier to code, might fill the table in a non-sequential manner.
- **Tabulation**: Bottom-up, usually uses iteration, fills the table in a sequential manner, usually more space-efficient.

---

#### Conclusion

Memoization and tabulation are crucial techniques in dynamic programming that help in optimizing recursive algorithms. By understanding when and how to use these techniques, you can significantly improve the efficiency of your algorithms.