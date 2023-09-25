### **Bubble Sort**

#### Lesson Overview

Bubble Sort is one of the simplest sorting algorithms that work by repeatedly swapping adjacent elements if they are in the wrong order. Despite its simplicity, it's not the most efficient algorithm for large data sets. This lesson dives into the fundamentals and the JavaScript implementation of Bubble Sort.

---

#### Objectives

- Understand the basic mechanics of the Bubble Sort algorithm.
- Implement Bubble Sort in JavaScript.

---

#### Basics of Bubble Sort

1. **Mechanics of Bubble Sort**: The algorithm repeatedly traverses through the list to be sorted, compares adjacent elements, and swaps them if they're in the wrong order. The pass through the list is repeated until no more swaps are needed, indicating the list is sorted.

2. **Efficiency**: Bubble Sort has a worst-case and average-case time complexity of \( O(n^2) \), making it inefficient for large lists. However, its best-case time complexity is \( O(n) \) when the list is already sorted.

---

#### Implementation in JavaScript

Here's a simple JavaScript function that performs Bubble Sort:

```javascript
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Output will be [11, 12, 22, 25, 34, 64, 90]
```

---

#### Conclusion

Bubble Sort is a straightforward sorting algorithm to understand and implement, making it excellent for educational purposes. However, it's not usually suitable for sorting large or even moderately large data sets. Understanding Bubble Sort is essential, though, as it lays the foundation for understanding more complex sorting algorithms.