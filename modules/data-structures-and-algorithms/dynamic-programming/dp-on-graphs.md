### **DP on Graphs: Shortest Path, Maximum Flow**

#### Lesson Overview

Dynamic programming (DP) is not only useful for sequence-based problems but also for graph algorithms. This lesson focuses on applying dynamic programming to solve graph-based problems, specifically finding the shortest path and maximum flow in a network graph.

---

#### Objectives

- Learn how to apply dynamic programming to find the shortest path in a graph.
- Understand the concept of maximum flow in network graphs and how DP can solve it.

---

#### Topics Covered

1. **Shortest Path**

    - One of the most common problems in graph algorithms is to find the shortest path between two nodes. Dijkstra's and Bellman-Ford algorithms can be optimized using dynamic programming.

    **Example in JavaScript: Dijkstra's Algorithm with DP**

    ```javascript
    function dijkstra(graph, start) {
      const distances = {};
      const visited = {};

      for (const node in graph) {
        distances[node] = Infinity;
      }
      distances[start] = 0;

      while (Object.keys(visited).length < Object.keys(graph).length) {
        const minNode = Object.keys(distances).reduce((min, node) => {
          return visited[node] ? min : Math.min(min, distances[node]);
        }, Infinity);

        visited[minNode] = true;

        for (const neighbor in graph[minNode]) {
          const newDistance = distances[minNode] + graph[minNode][neighbor];
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
          }
        }
      }

      return distances;
    }
    ```

2. **Maximum Flow**

    - Maximum flow problems involve finding the best way to push the maximum amount of "flow" from a source to a sink in a network graph. Ford-Fulkerson and Edmonds-Karp algorithms commonly solve this problem.
    
    **Example in JavaScript: Ford-Fulkerson Algorithm with DP**

    ```javascript
    // Note: This is a simplified example. The graph is represented as an adjacency matrix.
    function fordFulkerson(graph, source, sink) {
      const parent = Array(graph.length).fill(-1);
      let maxFlow = 0;
      
      while (true) {
        const queue = [[source, Infinity]];
        while (queue.length) {
          const [u, flow] = queue.shift();
          
          for (const [v, capacity] of graph[u].entries()) {
            if (parent[v] === -1 && capacity) {
              parent[v] = u;
              const newFlow = Math.min(flow, capacity);
              if (v === sink) return newFlow;
              queue.push([v, newFlow]);
            }
          }
        }
        
        if (parent[sink] === -1) break;
        
        let bottleneck = Infinity;
        for (let v = sink; v !== source; v = parent[v]) {
          bottleneck = Math.min(bottleneck, graph[parent[v]][v]);
        }

        for (let v = sink; v !== source; v = parent[v]) {
          graph[parent[v]][v] -= bottleneck;
          graph[v][parent[v]] += bottleneck;
        }
        
        maxFlow += bottleneck;
      }

      return maxFlow;
    }
    ```

---

#### Conclusion

Dynamic Programming is exceptionally versatile and can be applied to graph-based problems like shortest path and maximum flow effectively. Mastering these applications will extend your problem-solving abilities, providing you with a powerful toolset for dealing with complex computational issues.