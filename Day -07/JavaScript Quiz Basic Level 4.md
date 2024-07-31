# JavaScript Quiz Basic Level 4


### Theory

1. What are anonymous functions in JavaScript?
   * Anonymous functions are functions without a name. 
   * Usually we use `function hello () { console.log("Hello") }` to declare a function. Here, `hello` is the name of the function.
   * Anonymous functions do not have a name.
   * We usually see them in callbacks.
   * We can also understand anonymous functions with IIFEs or _Immediately Invoked Function Expressions_. Example:- 
   ```js
   (function () {
       console.log("Hello")
   })() // Output:- Hello
   
   (() => {
       console.log("Hello")
   })() // Output:- Hello
   ```
   

2. Explain Strict comparison and Abstract comparison in JavaScript?
   * Abstract comparison first tries to convert the value on both sides to a common data type. For example in `6 == '6'` JS will either convert `6` to `string` and compare to it will compare `'6'` to `int` and then compare it.
   * Strict comparison does not do any kind of type conversion. It just checks values on the both sides as is.
   ```js
   console.log(6 == "6") // Output:- True
   console.log(6 === "6") // Output:- False
   ```
   
3. Difference between arrow function and regular functions?
   * There are a lot of differences between arrow functions and regular functions in JS but the most important difference is the way that they're written.
   * A regular function can be written like this :- 
   ```js
   function hello() {
       console.log("Hello")
   }
   ```
   * Or like this :- 
   ```js
   const hello = function () {
       console.log("Hello")
   }
   ```
   * Notice that every time we need to write the `function` keyword in order to declare the function.
   * ES6 introduced the arrow functions. We write them like this :- 
   ```js
   const hello = () => {
       console.log("Hello")
   }
   ```
   * Notice that now, there is no need to write the `function` keyword.
   * Not just this, we can write the arrow functions in a much shorthand way. Example :- 
   ```js
   // If there's only one line in the function, we can skip the {}. This will be by default returned to the user too. Hence, this acts as a return statement.
   const hello = () => console.log("Hello")
   
   // If there is only one arguement, we can skip the ()
   const hey = name => console.log(`Hello ${name}`)
   
   // If there are no arguements, we can just write _ and make it even shorter
   const hi = _ => console.log("Hey there!")
   ```
   * But, at the end of the day, arrow functions are just compiled back to the regular functions by the interpreter. We can say that in a way, they act as a _syntactical sugar_ for developers to write better code. We can prove this by using Babel - a compiler for JS.
   * <img src="https://i.imgur.com/0ynr0NZ.png"> </img>


4. What is Hoisting In JavaScript?
   * (Source: MDN) JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
   * The most basic type of hoisting is `function hoisting`. This basically means that we can use and call the function before it is declared.
   * While executing, the JS interpreter will first interpret the code relating to the function - basically reading / interpreting it first than the other code in the file. Hence we say that functions are hoisted at the top.
   ```js
   function sayHello(name) {
       console.log(`Hello ${name}`)
   }
   
   sayHello("ABC") // Output:- Hello ABC
   ```
   ```js
   sayHello("ABC") // Output:- Hello ABC
   
   function sayHello(name) {
       console.log(`Hello ${name}`)
   }
   ```

5. JavaScript is a garbage collected programming language, explain how?
   * The main things to know:
     * Garbage collection is performed automatically. We cannot force or prevent it.
     * Objects are retained in memory while they are reachable.
     * Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we’ve seen in the example above.
   * [Source](https://javascript.info/garbage-collection)

6. Explain Shallow copy vs Deep copy in Javascript
   * (Source: MDN) A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
   * This basically means that if we change the source variable, then the second variable which was initialized with the reference of the source variable will also change.
   * For Example :- 
   ```js
   const arr1 = [1, 2, 3, 4, 5]
   const arr2 = arr1
   console.log(arr1, arr2) // Output:- [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
   
   arr1[2] = "Hello"
   console.log(arr1, arr2) // Output:- [ 1, 2, 'Hello', 4, 5 ] [ 1, 2, 'Hello', 4, 5 ]
   ```
   * (Source: MDN) A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
   * This basically means that if we deep copy the value of one variable to another variable, the second variable will not get initialized with the reference of the first one. Instead, new memory will be allocated for the second variable. Hence, any change made in the first variable will not be reflected in the second variable.
   ```js
   const arr1 = [1, 2, 3, 4, 5]
   const arr2 = JSON.parse(JSON.stringify(arr1))
   console.log(arr1, arr2) // Output:- [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
   
   arr1[3] = "Hello"
   console.log(arr1, arr2) // Output:- [ 1, 2, 3, 'Hello', 5 ] [ 1, 2, 3, 4, 5 ]
   ```

7. What is Object.freeze
   * (Source: MDN) The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. 
   * Example :- 
   ```js
   const myObj = {
      "first": 1,
      "second": 2
   }
   console.log(myObj) // Output:- { first: 1, second: 2 }
   
   myObj["third"] = 3
   console.log(myObj) // Output:- { first: 1, second: 2, third: 3 }
   
   Object.freeze(myObj)
   
   myObj["fourth"] = 4 // will throw error if used in strict mode.
   console.log(myObj) // Output:- { first: 1, second: 2, third: 3 }
   ```
   


### Programs

1. Write a function that generates a random number between two ranges, -100 to 0 and800 - 900.
```js
const randomInTwoRange = (min1, max1, min2, max2) => {
   const num1 = Math.floor(Math.random() * (max1 - min1) + min1)
   const num2 = Math.floor(Math.random() * (max2 - min2) + min2)

   return [num1, num2]
}

console.log(randomInTwoRange(-100, 0, 800, 900)) // Output:- [ -28, 893 ]
console.log(randomInTwoRange(-100, 0, 800, 900)) // Output:- [ -21, 844 ]
console.log(randomInTwoRange(-100, 0, 800, 900)) // Output:- [ -90, 850 ]
```