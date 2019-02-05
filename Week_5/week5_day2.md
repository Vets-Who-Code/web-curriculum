# Call Stack && Recursion

## Call Stack

#### Answer before watching:
- What do you think a 'stack' data structure is?
   - How does it work?
- BONUS: Can  you name and describe any other types of data structures?

Watch: [The JS Call Stack](https://www.youtube.com/watch?v=W8AeMrVtFLY&pbjreload=10)
- The Call Stack is a universal concept in programming, not just JS

### Goal:
- Write a program on codepen with 2 simple functions
   - Function One should be called `Outer`
   - Function Two should be called `Inner`
     - They can be as simple as a `console.log('Calling Outer!')`, etc.
     - Inside `Outer`'s definition, make a call to `Inner`
   - Call `Outer`
   - Then Call Inner 
   - Write a comment describing the call stack order in your program.
     - You must state: When a call is pushed/popped on/off the stack

<hr>

## Recursion
- A tough concept to consider in CS theory
- What happens when a function calls itself?

#### Answer before watching:
- What are some pitfalls to this?
- How do you stop a stack overflow / infinite loop?
   - How would it end?

Watch: [Recursion](https://www.youtube.com/watch?v=KEEKn7Me-ms)


### Goal:
- Write two functions on codepen
- Both functions take an integer argument, `n` and does [Factorial](https://www.youtube.com/watch?v=pxh__ugRKz8) operation on it
   - `iterative_Factorial(n)` 
     - Returns the Factorial result using iteration 
     - i.e., `for` or `while` loops
   - `recursive_Factorial(n)` 
     - Returns the Factorial result using Recursion
     - The function must call itself
     - If you run into trouble, ask yourself two things:
       1. Do you have an end condtion aka `base case`
       2. Is the recursive call headed towards this `base case`? (being decremented, incremented, etc.)

<hr>

## Takeaways
- Recursion is a tough concept to internalize
- Debugging can be really tough
- Always set a base case, and ensure your inner, 'recursive' call heads towards that case
- It is typically not algorithmically fast, but it is clean and simple
- Recusion vs iteration - both are mathetical concepts
- Explore more on your own! 




