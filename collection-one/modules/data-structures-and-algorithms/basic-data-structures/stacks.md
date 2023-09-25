### 3. **Stacks**

#### Lesson Overview

Stacks are another fundamental data structure in computer science. They follow a Last-In, First-Out (LIFO) principle, which means that the last element added to the stack is the first one to be removed. This lesson will guide you through what stacks are and how to implement and operate on them.

---

#### Objectives

- Understand the concept of a stack and its LIFO property.
- Learn basic operations like pushing, popping, and peeking.

---

#### What is a Stack?

A stack is a data structure that serves as a collection of elements, with two main principal operations:
- `push`: Add an element to the top of the stack.
- `pop`: Remove the most recently added element that was not yet removed.

In a stack, the new elements are added or pushed onto the top, and removal or popping occurs at the top as well.

---

#### Operations and Implementations

**Basic Operations**

- `push`: Add an element to the top of the stack.
- `pop`: Remove and return the top element from the stack.
- `peek`: Look at the top element without removing it.

**Example Code in JavaScript**

Here's a simple JavaScript implementation of a stack using an array:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return 'Stack is empty';
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());  // Output: 2
console.log(myStack.pop());   // Output: 2
console.log(myStack.isEmpty());  // Output: false
```

---

#### Conclusion

Stacks are incredibly useful in various scenarios in computing—function calls, undo mechanisms, parsing expressions, etc. Mastering stacks will serve you well as you delve further into data structures and algorithms.