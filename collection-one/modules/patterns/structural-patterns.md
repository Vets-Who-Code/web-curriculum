### Structural Design Patterns in Software Engineering

#### Introduction
- **Objective**: Gain a deep understanding of Structural Design Patterns and their applications in JavaScript.

#### What Are Structural Design Patterns?
- **Definition**: These patterns focus on simplifying the structure by identifying simple ways to realize relationships between entities.

---

#### Types of Structural Design Patterns

##### 1. Adapter
- **In-Depth Explanation**: Allows incompatible interfaces to work together.
- **Use-Case**: When you want to use an existing class with a different interface.
- **JavaScript Code Example**:
  ```javascript
  class OldSystem {
    oldMethod() {
      return "old method";
    }
  }
  class Adapter {
    request() {
      const old = new OldSystem();
      return old.oldMethod();
    }
  }
  ```

##### 2. Bridge
- **In-Depth Explanation**: Separates abstraction from its implementation.
- **Use-Case**: When you want to avoid a permanent binding between an abstraction and its implementation.
- **JavaScript Code Example**:
  ```javascript
  class Abstraction {
    constructor(implementation) {
      this.implementation = implementation;
    }
    operation() {
      return this.implementation.operationImpl();
    }
  }
  ```

##### 3. Composite
- **In-Depth Explanation**: Composes objects into tree structures to represent part-whole hierarchies.
- **Use-Case**: UI hierarchies, organizational structures.
- **JavaScript Code Example**:
  ```javascript
  class Leaf {
    operation() {
      return "Leaf";
    }
  }
  class Composite {
    constructor() {
      this.children = [];
    }
    add(child) {
      this.children.push(child);
    }
    operation() {
      return `Composite: ${this.children.map(child => child.operation()).join(" ")}`;
    }
  }
  ```

##### 4. Decorator
- **In-Depth Explanation**: Adds new functionality to an object without altering its structure.
- **Use-Case**: Enhancing UI components, extending capabilities of classes.
- **JavaScript Code Example**:
  ```javascript
  class Coffee {
    cost() {
      return 5;
    }
  }
  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
    cost() {
      return this.coffee.cost() + 2;
    }
  }
  ```

##### 5. Facade
- **In-Depth Explanation**: Provides a unified interface to a set of interfaces in a subsystem.
- **Use-Case**: Simplifying complex libraries, hiding implementation details.
- **JavaScript Code Example**:
  ```javascript
  class ComplexSystem {
    operation1() {}
    operation2() {}
  }
  class Facade {
    constructor(system) {
      this.system = system;
    }
    simplifiedOperation() {
      this.system.operation1();
      this.system.operation2();
    }
  }
  ```

##### 6. Flyweight
- **In-Depth Explanation**: Minimizes memory usage or computational expenses by sharing as much as possible.
- **Use-Case**: Handling large numbers of objects that share common properties.
- **JavaScript Code Example**:
  ```javascript
  class Flyweight {
    constructor(sharedState) {
      this.sharedState = sharedState;
    }
  }
  ```

##### 7. Proxy
- **In-Depth Explanation**: Provides a placeholder for another object to control access to it.
- **Use-Case**: Lazy initialization, controlling access.
- **JavaScript Code Example**:
  ```javascript
  class RealObject {
    request() {
      return "Real Object";
    }
  }
  class ProxyObject {
    constructor() {
      this.realObject = new RealObject();
    }
    request() {
      return this.realObject.request();
    }
  }
  ```

---

#### Advantages and Disadvantages
- **Adapter**: 
  - **Advantages**: Integration of incompatible interfaces.
  - **Disadvantages**: Increased overall code complexity.
- **Bridge**:
  - **Advantages**: Separation of concerns, improved extensibility.
  - **Disadvantages**: Complexity, more classes.
- **Composite**:
  - **Advantages**: Simplifies client code, easier to add new types.
  - **Disadvantages**: Design can become overly general.
- **Decorator**:
  - **Advantages**: Flexibility, adherence to Single Responsibility Principle.
  - **Disadvantages**: Can complicate code, may introduce many small objects.
- **Facade**:
  - **Advantages**: Simplifies complex systems, easier to understand and use.
  - **Disadvantages**: Hidden complexities, may create unwanted dependencies.
- **Flyweight**:
  - **Advantages**: Memory and performance optimization.
  - **Disadvantages**: Complexity, may lead to premature optimization.
- **Proxy**:
  - **Advantages**: Control over object access, additional functionality.
  - **Disadvantages**: May introduce latency, complexity.

#### Summary
- Structural Design Patterns provide methodologies for organizing complex systems into simpler, more efficient structures.
