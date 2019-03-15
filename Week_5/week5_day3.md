# Modulo, Base-10 / Base-2 Number Systems

## The Mod Operator
- What does it mean to Mod?
- Think of remainder when you divide
- Any interger, 'k', can be represented with the equation
   <pre>k = qx + r</pre>
   - Where 'q' is the quotient, 'x' is the multiple and 'r' is the remainder
- This tells us that doing INTEGER division, we have a remainder in the range:
   - 0 through (k - 1)
- Example:
  <pre>Let k = 25
       Let q = 4 (so 25 / 4) 
       
       Then we can find an x = 6
       
       25 = 4* (6) + r
       
       Solve for r, we get:
       r = 1</pre>
Quick Watch: [Modular](the mod operator)
Link: [Modular Arithmetic](https://artofproblemsolving.com/wiki/index.php/Modular_arithmetic/Introduction)

###  Goal:
- In Codepen, write a function `circleArray(arr)` that prints the contents of an FOUR times
   - I.E., for array ['hi', 'hello', 'hey'], print:
   - 'hi', 'hello', 'hey', 'hi', 'hello', 'hey', etc.
- You MUST use only ONE loop
- You MUST use the modular operator ('%')
- Write a comment stating the Big O of this Algorithm

<hr>


## Primality
- What constitutes a prime number?
- Question: What is the smallest prime?
- QUestion: What is the largest prime? (think about this)

### Prime numbers are VERY important in security
- Check out RSA and Primes in Network security at your own leisure
   A simple explaination on [Primes in Cryptography](https://crypto.stackexchange.com/questions/20867/why-are-primes-important-for-encryption)
- Every integer can be be broken down into a multiple of Primes
   This is called [Prime Factorization](https://www.mathsisfun.com/prime-factorization.html)


### Goal:
- In Codepen, write a function `isPrime(n)` that checks if number is prime
- The return value is either true or false (a boolean)
- Is this optimized? What can be done different?
- Remeber the mod operator!!
   - Extra: 
     - Can you write a function that prints the first `n` prime numbers?
     - Can it be easier if you just use your `isPrime(n)` function?

<hr>

### Takeaways
- Number theory (properties of Integers) are important to CS
- Modular can check for an integer
- Prime has far reaching consequences on Security Systems
- If Prime Factorization can one day be solved in Polynomial time - Delete all your online sensitive data!

Extra Link: [Types of Primality Tests](https://crypto.stanford.edu/pbc/notes/numbertheory/millerrabin.html)

