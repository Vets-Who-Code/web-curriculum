### 4. **Queues**

#### Lesson Overview

Queues are a type of data structure that store elements in a First-In, First-Out (FIFO) manner. This means that the first element added to the queue will be the first one to be removed. This lesson covers what queues are, and explores basic operations like enqueuing, dequeuing, and peeking.

---

#### Objectives

- Comprehend the FIFO characteristic of a queue.
- Understand basic queue operations like enqueue, dequeue, and peek.

---

#### What is a Queue?

A queue is a linear data structure where elements are added at the rear and removed from the front. The key operations in a queue are:

- `enqueue`: Add an element to the end of the queue.
- `dequeue`: Remove and return the element from the front of the queue.

It's a structure used in scenarios where order and efficient processing are important, like waiting in line at a checkout counter.

---

#### Basic Queue Operations

**Enqueue**

The `enqueue` operation adds an element to the rear of the queue.

**Dequeue**

The `dequeue` operation removes the front element from the queue and returns it.

**Peek**

The `peek` operation lets you see the front element without removing it from the queue.

**Example Code in JavaScript**

Here's a straightforward JavaScript implementation of a queue using an array:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return 'Queue is empty';
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue.peek());  // Output: 1
console.log(myQueue.dequeue());  // Output: 1
console.log(myQueue.isEmpty());  // Output: false
```

---

#### Conclusion

Queues are a fundamental data structure used in many aspects of computing, from task scheduling to handling requests in a web server. Knowing how to implement and operate on queues is essential for any software engineer.