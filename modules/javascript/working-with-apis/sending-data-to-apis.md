### Lesson 3: Sending Data to APIs

#### Introduction
- **Objective**: To gain a comprehensive understanding of how to send data to APIs using various HTTP methods like POST, PUT, and DELETE and how to manage the responses.

---

#### Key Concepts in Sending Data to APIs

##### 1. Making POST Requests to APIs
- **In-Depth Explanation**: POST requests are utilized to send new data to an API endpoint. These requests include a payload—usually in JSON format—that the server processes.
  
- **Use-Case**: Creating new records, such as adding a new user or submitting a form.
- **JavaScript Code Example**:
  ```javascript
  fetch('https://api.example.com/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'New Item', price: 100 })
  })
  .then(response => response.json())
  .then(data => console.log(data));
  ```

##### 2. Sending Data and Handling Responses
- **In-Depth Explanation**: When sending data via POST, PUT, or DELETE, it's crucial to handle the API responses effectively. This includes checking for success status codes and dealing with errors.
  
- **Use-Case**: Validation, error-handling, and subsequent UI updates.
- **JavaScript Code Example**:
  ```javascript
  fetch('https://api.example.com/items/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ price: 200 })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to update data');
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
  ```

##### 3. PUT and DELETE Requests
- **In-Depth Explanation**: PUT requests are generally used to update existing records, while DELETE requests remove them. These also include handling responses appropriately.
  
- **Use-Case**: Updating or deleting records like modifying a user profile or removing an item from a shopping cart.
- **JavaScript Code Example**:
  ```javascript
  fetch('https://api.example.com/items/1', {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      console.log('Item deleted');
    } else {
      throw new Error('Failed to delete item');
    }
  })
  .catch(error => console.error(error));
  ```

---

#### Summary
- Sending data to APIs is a cornerstone of many interactive web applications. This lesson delves into how to use POST, PUT, and DELETE methods to send data to APIs and handle the responses. These methods enable you to create, update, and delete records, enhancing the capabilities of your web applications. With this knowledge, you're well-prepared to interact with APIs at a more advanced level.