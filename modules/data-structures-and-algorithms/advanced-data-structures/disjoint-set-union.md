### **Disjoint Set Union**

#### Lesson Overview

Disjoint Set Union (DSU), also known as Union-Find, is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. This lesson will cover the basic operations you can perform using DSU and its core concepts.

---

#### Objectives

- Understand the concept of Disjoint Set Union and its utility.
- Learn the basic operations like Union and Find.

---

#### Basics of Disjoint Set Union

1. **Sets and Elements**: DSU manages a collection of disjoint sets. Each set contains unique elements, and no element can belong to more than one set.

2. **Representative Element**: Each set has a representative, which is one of its elements. This is useful for quickly determining if two elements are in the same set.

---

#### Operations on Disjoint Set Union

1. **Find**: The 'Find' operation takes an element as input and returns the representative element of the set to which it belongs.

    ```javascript
    function find(element) {
      if (parent[element] === element) {
        return element;
      }
      return parent[element] = find(parent[element]);
    }
    ```

2. **Union**: The 'Union' operation combines two sets into one. It uses the representative elements to determine which sets to unite.

    ```javascript
    function union(a, b) {
      let rootA = find(a);
      let rootB = find(b);
      if (rootA === rootB) return;
      
      if (rank[rootA] > rank[rootB]) {
        parent[rootB] = rootA;
      } else if (rank[rootA] < rank[rootB]) {
        parent[rootA] = rootB;
      } else {
        parent[rootB] = rootA;
        rank[rootA]++;
      }
    }
    ```

3. **Connected**: To check if two elements are in the same set, you compare their representative elements.

    ```javascript
    function isConnected(a, b) {
      return find(a) === find(b);
    }
    ```

---

#### Conclusion

Disjoint Set Union is a highly useful data structure for solving problems related to graph theory, network connectivity, and set operations. Understanding its operations and implementation details will make it easier to incorporate it into your projects for efficient problem-solving.