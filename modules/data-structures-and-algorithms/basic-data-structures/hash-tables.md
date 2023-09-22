### 5. **Hash Tables**

#### Lesson Overview

Hash Tables are one of the most efficient data structures when it comes to time complexity. They offer fast lookups, insertions, and deletions. This lesson delves into what hash tables are, the concept of hashing functions, and how to deal with hash collisions.

---

#### Objectives

- Understand what a hash table is and its underlying structure.
- Learn how hashing functions work to map keys to indexes.
- Explore methods for collision handling like chaining and open addressing.

---

#### What is a Hash Table?

A Hash Table is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the correct value can be found.

---

#### Hashing Functions

A Hashing Function takes the key as input and returns an integer, which serves as the index where the value associated with that key is stored. A good hash function distributes keys uniformly across the hash table to minimize collisions.

**Example Code in JavaScript**

Here's a simple hash function that uses the ASCII values of characters:

```javascript
function simpleHash(key, tableSize) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % tableSize;
}
```

---

#### Collision Handling

Hash collisions are inevitable. Two keys could hash to the same index. There are several ways to handle collisions:

**Chaining**

With chaining, each slot in the hash table holds a linked list. All key-value pairs mapping to the same index are stored in the list.

**Open Addressing**

Open addressing finds the next open slot or address in the hash table and stores the key-value pair there.

**Example Code in JavaScript for Chaining**

```javascript
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
  }

  set(key, value) {
    const index = simpleHash(key, this.size);
    const chain = this.table[index];

    for (let [k, v] of chain) {
      if (k === key) {
        v = value;
        return;
      }
    }
    chain.push([key, value]);
  }

  get(key) {
    const index = simpleHash(key, this.size);
    const chain = this.table[index];

    for (let [k, v] of chain) {
      if (k === key) {
        return v;
      }
    }
    return null;
  }
}

const myHashTable = new HashTable(25);
myHashTable.set('firstName', 'John');
myHashTable.set('lastName', 'Doe');
console.log(myHashTable.get('firstName'));  // Output: John
```

---

#### Conclusion

Hash Tables are incredibly versatile and efficient. They're widely used in scenarios where quick lookups are necessary. Understanding how hash tables work, along with hashing functions and collision resolution techniques, is critical for performance optimization in software applications.