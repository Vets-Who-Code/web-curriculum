### Lesson 2: Event Handling

#### Introduction
- **Objective**: To gain a comprehensive understanding of event handling in JavaScript, including adding event listeners to DOM elements, understanding various event types, event propagation, and the concept of event delegation.

---

#### Key Concepts in Event Handling

##### 1. Adding Event Listeners
- **In-Depth Explanation**: The `addEventListener` method allows you to attach an event handler to a DOM element. This method takes two primary arguments: the type of the event and the callback function that should execute when the event occurs.
  
- **Use-Case**: To capture user interactions such as clicks, keypresses, and form submissions. 
- **JavaScript Code Example**:
  ```javascript
  const button = document.querySelector('button');
  button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event Object:', event);
  });
  ```
- **Additional Notes**: You can also remove an event listener using `removeEventListener`.

##### 2. Event Types and Propagation
- **In-Depth Explanation**: Numerous event types can be listened for, such as `click`, `mousemove`, `keydown`, etc. Event propagation has three main phases: capturing, target, and bubbling. By understanding these phases, you can control how events are handled.
  
- **Use-Case**: Building complex UI interactions, validating forms, and creating drag-and-drop features.
- **JavaScript Code Example**:
  ```javascript
  document.addEventListener('click', function(event) {
    console.log('Capturing Phase:', event.eventPhase === 1);
  }, true);
  
  document.addEventListener('click', function(event) {
    console.log('Bubbling Phase:', event.eventPhase === 3);
  }, false);
  ```
- **Additional Notes**: The third optional parameter in `addEventListener` specifies whether to capture the event in the capturing phase (`true`) or bubbling phase (`false`).

##### 3. Event Delegation and Handling Multiple Events
- **In-Depth Explanation**: Event delegation is a technique where you attach a single event listener to a parent element to handle events for multiple child elements. It relies on the fact that events bubble up through the DOM tree.
  
- **Use-Case**: Useful for elements that share similar behavior, such as list items or buttons in a grid.
- **JavaScript Code Example**:
  ```javascript
  const list = document.querySelector('ul');
  list.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
      clickedElement.classList.toggle('selected');
    }
  });
  ```
- **Additional Notes**: Event delegation is particularly useful for dynamically added elements where attaching individual event listeners is not feasible.

---

#### Summary
- Understanding event handling in JavaScript is crucial for building interactive web applications. This extended lesson provided a more in-depth exploration of how to add event listeners, manage different event types, control event propagation, and effectively use event delegation. Armed with this knowledge, you'll be better equipped to handle a wide range of event-driven programming scenarios.