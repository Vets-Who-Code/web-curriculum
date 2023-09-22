### **Trees**

#### Lesson Overview

In this lesson, we'll focus on trees as a data structure, specifically concentrating on binary trees and binary search trees. We'll explore their properties, how they're used, and their fundamental differences.

---

#### Objectives

- Understand what a tree data structure is and its components.
- Grasp the concept of a binary tree and its properties.
- Learn about binary search trees and how they differ from binary trees.

---

#### What is a Tree?

A tree is a hierarchical data structure that consists of nodes connected by edges. The topmost node is known as the root, and each node below it has zero or more child nodes. Unlike arrays, linked lists, stacks, and queues, trees are non-linear and can be visualized as an upside-down tree.

---

#### Binary Trees

A Binary Tree is a tree in which each node has at most two children, commonly referred to as the "left child" and the "right child."

**Properties of Binary Trees:**

- **Full Binary Tree**: Every node has 0 or 2 children.
- **Complete Binary Tree**: All levels, except possibly the last, are completely filled, and the nodes are as left as possible.
- **Balanced Binary Tree**: The depth of the two subtrees of every node never differs by more than 1.

**Example Code in JavaScript for Binary Trees**

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
```

---

#### Binary Search Trees (BST)

A Binary Search Tree is a Binary Tree with the following additional properties:

- The left subtree contains only nodes with keys less than the node's key.
- The right subtree contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example Code in JavaScript for Binary Search Trees**

```javascript
class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BSTNode(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new BSTNode(value);
      else this.right.insert(value);
    }
  }
}

const bstRoot = new BSTNode(10);
bstRoot.insert(5);
bstRoot.insert(15);
bstRoot.insert(8);
```

---

#### Conclusion

Understanding trees and their specialized types like binary trees and binary search trees is fundamental in computer science. They form the backbone of many algorithms and systems, such as databases and file systems. Learning how to manipulate these data structures is crucial for problem-solving and algorithmic thinking.