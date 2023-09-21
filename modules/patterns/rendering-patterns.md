### Creational Patterns in Software Engineering

---

#### Introduction
- **Objective**: To understand what Creational Patterns are and how they help manage object creation in software design.

#### What Are Creational Patterns?
- **Definition**: Creational patterns deal with the process of object creation, abstracting the instantiation process and making the system independent of how its objects are created, composed, and represented.

---

#### Types of Creational Patterns

##### 1. Singleton
- **In-Depth Explanation**: Ensures a class has only one instance and provides a global point of access to it.
- **Use-Case**: Logging, database connections, configurations.
- **JavaScript Code Example**:
  ```javascript
  let singletonInstance = null;

  class Singleton {
    constructor() {
      if (!singletonInstance) {
        singletonInstance = this;
      }
      return singletonInstance;
    }
  }
  ```

##### 2. Factory Method
- **In-Depth Explanation**: Define an interface for creating an object but leave the choice of its type to subclasses.
- **Use-Case**: Payment gateway integrations, API connectors.
- **JavaScript Code Example**:
  ```javascript
  class AnimalFactory {
    createAnimal(type) {
      if (type === 'Dog') return new Dog();
      if (type === 'Cat') return new Cat();
    }
  }
  ```

##### 3. Abstract Factory
- **In-Depth Explanation**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
- **Use-Case**: UI components, theming.
- **JavaScript Code Example**:
  ```javascript
  class UIAbstractFactory {
    createButton() {}
    createPanel() {}
  }
  ```

##### 4. Builder
- **In-Depth Explanation**: Allows for the construction of a complex object step by step.
- **Use-Case**: Parsing complex documents, constructing UI.
- **JavaScript Code Example**:
  ```javascript
  class CarBuilder {
    setWheels(wheels) {
      this.wheels = wheels;
      return this;
    }
    build() {
      return new Car(this);
    }
  }
  ```

##### 5. Prototype
- **In-Depth Explanation**: Creates new objects by copying an existing object, known as a prototype.
- **Use-Case**: Object cloning, reducing database calls.
- **JavaScript Code Example**:
  ```javascript
  class Prototype {
    clone() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
  }
  ```

---

#### Advantages and Disadvantages
- **Singleton**:
  - **Advantages**: Global state management, reduced redundancy.
  - **Disadvantages**: Global state may lead to issues, singleton abuse.
- **Factory Method**:
  - **Advantages**: Encapsulation of object creation, loose coupling.
  - **Disadvantages**: Can become complex, may lead to subclass proliferation.
- **Abstract Factory**:
  - **Advantages**: Encapsulation, easier to add new types.
  - **Disadvantages**: Complexity, dependency between families of objects.
- **Builder**:
  - **Advantages**: Simplifies object creation, promotes immutability.
  - **Disadvantages**: Overhead for simple objects, can become verbose.
- **Prototype**:
  - **Advantages**: Faster object creation, reduced memory footprint.
  - **Disadvantages**: Shallow vs deep copy issues, clone maintenance.

#### Summary
- Creational patterns help in managing object creation by controlling which classes to instantiate and how to go about the instantiation process.