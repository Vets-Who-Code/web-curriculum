### Architectural Patterns in Software Engineering

#### Introduction
- **Objective**: Acquire a comprehensive understanding of Architectural Patterns and their role in structuring software systems.

#### What Are Architectural Patterns?
- **Definition**: Architectural patterns are high-level structures that offer guidelines for organizing code and system components into a cohesive and maintainable unit.

---

#### Types of Architectural Patterns

##### 1. MVC (Model-View-Controller)
- **In-Depth Explanation**: This pattern separates the application into three interconnected components.
- **Use-Case**: Primarily used in web applications.
- **JavaScript Code Example**:
  ```javascript
  class Model {
    constructor(data) {
      this.data = data;
    }
  }
  class View {
    render(data) {
      console.log(`Rendering: ${data}`);
    }
  }
  class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
    updateView() {
      this.view.render(this.model.data);
    }
  }
  ```

##### 2. Layered Architecture
- **In-Depth Explanation**: Divides the system into a series of layers, each with a specific responsibility.
- **Use-Case**: Business applications and enterprise systems.
- **JavaScript Code Example**:
  ```javascript
  class PresentationLayer {
    constructor(businessLayer) {
      this.businessLayer = businessLayer;
    }
    execute() {
      return this.businessLayer.execute();
    }
  }
  ```

##### 3. Client-Server
- **In-Depth Explanation**: This pattern divides the system into servers providing services and clients consuming those services.
- **Use-Case**: Distributed systems.
- **JavaScript Code Example**:
  ```javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.end('Server responding');
  });
  ```

##### 4. Event-Driven Architecture
- **In-Depth Explanation**: This architecture focuses on producing, detecting, and reacting to events.
- **Use-Case**: Real-time processing systems.
- **JavaScript Code Example**:
  ```javascript
  const events = require('events');
  const emitter = new events.EventEmitter();
  emitter.on('event', () => {
    console.log('An event occurred');
  });
  ```

##### 5. Microservices
- **In-Depth Explanation**: A software architectural style that structures an application as a collection of loosely coupled, independently deployable services.
- **Use-Case**: Systems that need to be highly maintainable and scalable.
- **JavaScript Code Example**:
  ```javascript
  // Using Express to create independent services
  const express = require('express');
  const app = express();
  app.get('/service1', (req, res) => res.send('Service 1'));
  ```

---

#### Advantages and Disadvantages
- **MVC**:
  - **Advantages**: Separation of concerns, easier to maintain.
  - **Disadvantages**: Can increase complexity with a large codebase.
- **Layered Architecture**:
  - **Advantages**: Isolation between layers, easier to update specific layers.
  - **Disadvantages**: Performance overhead, possible redundancy.
- **Client-Server**:
  - **Advantages**: Scalability, resource sharing.
  - **Disadvantages**: Server bottlenecks, single points of failure.
- **Event-Driven Architecture**:
  - **Advantages**: Scalability, real-time processing.
  - **Disadvantages**: Complexity, debugging is challenging.
- **Microservices**:
  - **Advantages**: Scalability, independence between services.
  - **Disadvantages**: Network latency, complexity in service coordination.

#### Summary
- Architectural patterns provide a blueprint for simplifying the design and organization of complex systems.