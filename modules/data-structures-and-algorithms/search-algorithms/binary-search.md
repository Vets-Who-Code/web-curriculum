### **Binary Search**

#### Lesson Overview

Binary Search is an efficient algorithm for locating an item from a sorted list of items. In this lesson, we will delve into the core concepts of Binary Search, including its algorithmic design and performance metrics.

---

#### Objectives

- Understand the algorithm behind Binary Search.
- Gain insights into the performance aspects of Binary Search.
  
---

#### Algorithm of Binary Search

1. **Initialize**: Begin with two pointers, `low` and `high`, set to the lowest and highest indices of the sorted array, respectively.

2. **Iterate**: While `low <= high`:
    - Calculate the mid-point index: \( \text{mid} = \frac{{\text{low} + \text{high}}}{2} \).
    - Compare the value at the mid-point index with the target value.

3. **Decision Points**:
    - If the mid-point value equals the target, return `mid`.
    - If the mid-point value is less than the target, adjust `low = mid + 1`.
    - If the mid-point value is greater than the target, adjust `high = mid - 1`.

4. **Terminate**: If `low` surpasses `high`, return `-1` to indicate that the target is not in the array.

---

#### Implementation in JavaScript

Here is a JavaScript implementation of Binary Search:

```javascript
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// Example usage:
const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 7;
const result = binarySearch(sortedArr, targetValue);
console.log("Element found at index:", result);
```

---

#### Performance

- **Time Complexity**: 
  - Best-case: \( O(1) \), when the target element is at the middle.
  - Average-case: \( O(\log n) \), as the search space is halved each time.
  - Worst-case: \( O(\log n) \), when the element is not in the array.

- **Space Complexity**: \( O(1) \), as it uses constant extra space.

---

#### Conclusion

Binary Search is much more efficient than Linear Search for large datasets, as long as the data is sorted. With a time complexity of \( O(\log n) \), it's usually a go-to algorithm for searching in sorted collections.