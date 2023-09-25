### **Insertion Sort**

#### Lesson Overview

Insertion Sort is a simple yet effective sorting algorithm often taught as a foundation for understanding sorting mechanisms. While not as efficient for large data sets, it has advantages such as ease of implementation and suitability for nearly-sorted lists. This lesson will go over the algorithm and how to implement it in JavaScript.

---

#### Objectives

- Understand the mechanism behind Insertion Sort.
- Know how and when to use Insertion Sort.

---

#### Algorithm of Insertion Sort

1. **Initialize**: Start from the second element, assuming the first element is sorted.
  
2. **Compare and Insert**: For each subsequent element, compare it with the elements before it and insert it in the correct position, effectively 'sorting as you go'.

---

#### Implementation in JavaScript

Here is a simple code snippet implementing Insertion Sort in JavaScript:

```javascript
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while ((j > -1) && (current < arr[j])) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
let sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);
```

---

#### Performance

- **Time Complexity**: 
  - Best-case: \( O(n) \) when the array is already sorted.
  - Average-case: \( O(n^2) \).
  - Worst-case: \( O(n^2) \).

- **Space Complexity**: \( O(1) \), as we only use a constant amount of extra memory.

- **Stable Sort**: Yes, the relative order of equal elements will be preserved.

- **In-Place**: Yes, it sorts without requiring additional memory.

---

#### Conclusion

Insertion Sort is straightforward and works well when the list is mostly sorted or when the list is small. It's not the most efficient for larger data sets, but its simplicity makes it a good choice for simple applications or as part of more complex algorithms.