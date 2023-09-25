### **Merge Sort**

#### Lesson Overview

Merge Sort is another divide-and-conquer algorithm, but it takes a different approach compared to Quick Sort. It focuses on how to merge together two pre-sorted arrays in a way that results in a single, fully sorted array. This lesson aims to dissect the Merge Sort algorithm and delve into its performance characteristics.

---

#### Objectives

- Understand the underlying divide-and-conquer mechanism in Merge Sort.
- Analyze the algorithm's performance metrics.

---

#### Algorithm of Merge Sort

1. **Divide**: Split the unsorted list into \( n \) sub-lists, each containing one element (an array with one element is considered sorted).

2. **Merge**: Repeatedly merge sub-lists to produce newly sorted sub-lists until there is only one sub-list remaining.

---

#### Implementation in JavaScript

Here's a simple JavaScript implementation:

```javascript
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(
        mergeSort(left), mergeSort(right)
    );
}

// Example usage:
let arr = [4, 2, 3, 1, 6, 5];
let sortedArray = mergeSort(arr);
console.log("Sorted array:", sortedArray);
```

---

#### Performance

- **Time Complexity**: Merge Sort performs well under most circumstances. Its worst-case, average-case, and best-case time complexities are all \( O(n \log n) \).

- **Space Complexity**: \( O(n) \), additional space is required for the merging process.

- **Stable Sort**: Yes, the relative order of equal elements will be preserved.

- **External Sorting**: Merge Sort is particularly well-suited for external sorting algorithms, where chunks of data reside in external storage and cannot be loaded into memory all at once.

---

#### Conclusion

Merge Sort is a powerful algorithm commonly used for tasks that require a stable, efficient sort. It's especially useful when working with data sets that don't fit into memory, due to its excellent support for external sorting techniques.