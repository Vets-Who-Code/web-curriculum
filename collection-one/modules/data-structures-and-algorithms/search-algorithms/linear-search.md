### **Linear Search**

#### Lesson Overview

Linear Search is a straightforward searching algorithm that scans each element in an array to find a target value. It's elementary but useful for unsorted data. This lesson aims to explain the Linear Search algorithm and provide a simple JavaScript implementation.

---

#### Objectives

- Understand the basics of Linear Search.
- Implement Linear Search in JavaScript.

---

#### Algorithm of Linear Search

1. **Iterate**: Loop through each element in the array from the beginning to the end.
  
2. **Compare**: Compare the current element with the target value.

3. **Return**: If a match is found, return the index of the element. Otherwise, return -1 if the element is not found.

---

#### Implementation in JavaScript

Here's a simple example of how you could implement Linear Search in JavaScript:

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Element found, return its index
    }
  }
  return -1; // Element not found, return -1
}

// Example usage:
let arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
let target = 110;
let result = linearSearch(arr, target);
console.log("Element found at index:", result);
```

---

#### Performance

- **Time Complexity**: 
  - Best-case: \( O(1) \), when the element is found at the first index.
  - Average-case: \( O(n) \), as we may have to scan through all elements.
  - Worst-case: \( O(n) \), when the element is not in the array.

- **Space Complexity**: \( O(1) \), as no extra space is needed.

---

#### Conclusion

Linear Search is inefficient compared to binary search or hash tables for larger datasets but serves as a straightforward, easy-to-understand algorithm for small, unsorted data. It's often a good starting point for search algorithm discussions.