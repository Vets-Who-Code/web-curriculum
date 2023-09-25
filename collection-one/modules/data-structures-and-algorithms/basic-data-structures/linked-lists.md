### 2. **Linked Lists**

#### Lesson Overview

Linked Lists are fundamental data structures in computer science. Unlike arrays, linked lists are dynamic and don't have a fixed size. In this lesson, you will learn about Singly and Doubly Linked Lists, their structure, and the basic operations you can perform on them.

---

#### Objectives

- Understand what a Linked List is and how it differs from an array.
- Learn the differences between Singly and Doubly Linked Lists.

---

#### Singly Linked Lists

**What is a Singly Linked List?**

A Singly Linked List is a linear data structure where elements are not stored in contiguous locations but are linked using pointers. Each element contains a data part and a reference (or link) to the next element in the sequence.

**Example Code in JavaScript**

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}
```

---

#### Doubly Linked Lists

**What is a Doubly Linked List?**

A Doubly Linked List is similar to a Singly Linked List, but each node has two links: one pointing to the next node and another pointing to the previous node.

**Example Code in JavaScript**

```javascript
class DoublyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  add(data) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
}
```

---

#### Conclusion

Understanding Linked Lists and their variants is crucial for delving deeper into more complex data structures and algorithms. Singly Linked Lists are simpler and use slightly less memory, while Doubly Linked Lists are more versatile but take up a bit more memory due to the extra 'previous' link.