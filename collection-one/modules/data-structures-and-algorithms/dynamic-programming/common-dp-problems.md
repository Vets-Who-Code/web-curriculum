### **Common DP Problems**

#### Lesson Overview

Dynamic Programming (DP) is widely used for solving optimization problems by breaking them down into smaller subproblems. This lesson will focus on commonly encountered DP problems, specifically, the Fibonacci sequence, coin change problem, and finding the longest subsequence.

---

#### Objectives

- Understand how to approach and solve the Fibonacci sequence problem using DP.
- Learn the mechanics of the coin change problem and how to solve it efficiently.
- Grasp the concept behind finding the longest subsequence and how to approach it using DP.

---

#### Topics Covered

1. **Fibonacci Sequence**

    - The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. This problem serves as a straightforward introduction to dynamic programming.
    
    **Example in JavaScript: Fibonacci Sequence with DP**
    
    ```javascript
    function fibDP(n) {
      let fibValues = [0, 1];

      for (let i = 2; i <= n; i++) {
        fibValues[i] = fibValues[i - 1] + fibValues[i - 2];
      }

      return fibValues[n];
    }

    console.log(fibDP(10));  // Outputs 55
    ```

2. **Coin Change**

    - Given an array of coin denominations and a target amount, the objective is to find the minimum number of coins that make up the target amount.
    
    **Example in JavaScript: Coin Change Problem with DP**
    
    ```javascript
    function coinChange(coins, amount) {
      const dp = Array(amount + 1).fill(Infinity);
      dp[0] = 0;

      for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }

      return dp[amount] === Infinity ? -1 : dp[amount];
    }

    console.log(coinChange([1, 2, 5], 11));  // Outputs 3 (11 = 5 + 5 + 1)
    ```

3. **Longest Subsequence**

    - Finding the longest subsequence within an array is another common problem solved efficiently using DP. This could be the longest increasing, decreasing, or common subsequence among arrays.
    
    **Example in JavaScript: Longest Increasing Subsequence**
    
    ```javascript
    function lengthOfLIS(nums) {
      const dp = Array(nums.length).fill(1);
      
      for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
          }
        }
      }

      return Math.max(...dp);
    }

    console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));  // Outputs 4 ([2, 5, 7, 101])
    ```

---

#### Conclusion

Dynamic programming is a powerful technique for solving optimization problems, and these common examples—Fibonacci, coin change, and longest subsequence—serve as excellent starting points to understand the application and utility of DP. By mastering these examples, you'll be better prepared to tackle more complex DP problems.