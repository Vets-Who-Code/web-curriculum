### **Quick Sort**

#### Lesson Overview

Quick Sort is a divide-and-conquer sorting algorithm that is significantly more efficient than simpler algorithms like Bubble Sort. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. This lesson focuses on understanding Quick Sort's algorithm and performance metrics.

---

#### Objectives

- Grasp the divide-and-conquer strategy employed by Quick Sort.
- Understand the algorithm's performance characteristics.
  
---

#### Algorithm of Quick Sort

1. **Choosing the Pivot**: The first step in Quick Sort is selecting a pivot element. The choice of pivot can greatly affect performance. It could be the first element, the last element, the median, or any random element.

2. **Partitioning**: Rearrange elements so that all elements smaller than the pivot come before it and all elements greater come after it. The pivot is now in its final sorted position.

3. **Recursion**: Apply the same steps recursively to the two sub-arrays.

---

#### Implementation in JavaScript

Here's a basic JavaScript implementation:

```javascript
function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Example usage:
let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;
quickSort(arr, 0, n - 1);
console.log("Sorted array:", arr);
```

---

#### Performance

- **Time Complexity**: The average and best-case time complexity is \( O(n \log n) \), and the worst-case is \( O(n^2) \), but the worst-case can be avoided with good pivot selection.
  
- **Space Complexity**: \( O(\log n) \) due to the stack space required for recursion.

- **In-Place**: Yes, it sorts the array in place, requiring no additional data structures.

- **Stable Sort**: No, the relative order of equal elements may not be preserved.

---

#### Conclusion

Quick Sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays—one of which holds values smaller than the specified value, and another, greater. When implemented well, it can be about two or three times faster than its main competitors, Merge Sort and Heap Sort.