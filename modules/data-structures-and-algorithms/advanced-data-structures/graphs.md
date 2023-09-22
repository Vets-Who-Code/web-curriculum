###  **Graphs**

#### Lesson Overview

In this lesson, we'll focus on graphs as a data structure, looking at different ways to represent them and the types of graphs you may encounter. Understanding graphs is key to mastering a variety of algorithms and real-world applications.

---

#### Objectives

- Define what a graph is and how it is different from other data structures.
- Understand the different representations of graphs.
- Identify the types of graphs and their unique characteristics.

---

#### What is a Graph?

A graph is a set of vertices and a set of edges that connect pairs of vertices. Unlike trees and linked lists, graphs can have cycles and can be either connected or disconnected. Graphs can model a wide array of real-world problems, from network routing to social networks.

---

#### Representations of Graphs

Graphs can be represented in multiple ways, each with its own pros and cons.

1. **Adjacency Matrix**: A two-dimensional array where the cell at the \(i^{th}\) row and \(j^{th}\) column is a boolean representing whether there is an edge from vertex \(i\) to vertex \(j\).

    ```javascript
    const adjacencyMatrix = [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0]
    ];
    ```

2. **Adjacency List**: An array of lists. The \(i^{th}\) element is a list of all vertices connected to the \(i^{th}\) vertex.

    ```javascript
    const adjacencyList = [
      [1],
      [0, 2, 3],
      [1, 3],
      [1, 2]
    ];
    ```

---

#### Types of Graphs

1. **Undirected Graphs**: Edges do not have a direction. If vertex \(A\) is connected to vertex \(B\), then \(B\) is also connected to \(A\).

2. **Directed Graphs (DiGraphs)**: Edges have a direction. If \(A\) is connected to \(B\), it doesn't mean \(B\) is connected to \(A\).

3. **Weighted Graphs**: Edges have weights or costs associated with them, often representing distances, costs, etc.

4. **Unweighted Graphs**: All edges are identical.

---

#### Conclusion

Graphs are a highly flexible and commonly used data structure. Understanding the basics of graph representation and the types of graphs will give you a strong foundation to learn more complex graph algorithms and solve real-world problems effectively.