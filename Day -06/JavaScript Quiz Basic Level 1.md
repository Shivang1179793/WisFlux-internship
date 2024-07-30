# JavaScript Quiz Basic Level 1

### Theory

1. What is JavaScript?
    * Javascript is a scripting language for the web. It can be used in combination with HTML and CSS to make web pages more dynamic and better.
2. What is the difference between b/w let and var?
    * `let` is block scoped while `var` is global scoped.
3. Why do we prefer const over var?
    * `const` doesn't let us reassign the variable and it's value while `var` let's us reassign the variable and it's value.
4. What is the use of javascript in web browsers?
    * JS is used in browsers to make content dynamic.
5. What are Objects?
    * According to MDN, `An object is a collection of properties, and a property is an association between a name (or key) and a value.`
    * We can think of objects as Python Dictionaries. Just like in python, a dict is a collection of key - value pairs and each pair is identified by it's key, in JS too, every object is a collection of key - value pairs.
    * Also, just like python, the value can have any data type. It doesn't compulsory need to have a `string` or an `int`. The value can also contain another object.
6. What is an array and how is it different from an Object in Javascript?
    * An array is an ordered collection of items which belong to any data type.
    * An object is a collection of key - value pairs where values can have any data type.
    * The main difference between an array and an object is that a particular element in an array can be uniquely identified by it's __index__ while a particular element in an object can be uniquely identified by it's __key__.
7. What is a function?
    * A function is a resuable block of code that can be called _n_ number of times.
8. How can we implement call by value and call by reference in Javascript?
    * __Call By Value Only Works on Primitive Data Types like int, boolean, etc__
        ```js
        let a = 10
        a = b // assigning value of a to b. 
        console.log(a, b)
        ```
    * __Call By Reference Works with Objects and Functions__
        ```js
        let a = { name: "ABC" }
        let b = a // assigning b to a
    
        a.name = "DEF" // mutating the value of a property of a
    
        console.log(a, b) // DEF will be printed two times since b only stores a reference to a
        ```
9. What are the primitive data types in Javascript?
    * (Reference : MDN) In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
10. What is DOM?
    * A DOM is the Document Object Model which is a Tree structure containing all the difference elements of a webpage as nodes.
11. Why do we need DOM?
    * When a web page gets made, it's essential that it follows a certain set of format and syntax. If the web page is made in the form of the tree where there is a root node and all the elements of a web page like `<body>` or `<div>` are made to be the nodes of that tree, building / accessing and traversing the webpage would be really easy. Hence, a DOM is required.


### Programs

1. Average of array nums in JavaScript
```js
const average_of_array = (arr) => {
	let sum = arr.reduce((result, item) => result+item, 0)

	return (sum / arr.length)
}

console.log(average_of_array([1, 2, 3, 4, 5])) // Output - 3
```

2. Swap two numbers by reference?
```js
const swap_nums = (num1, num2) => {
	let temp = num1
	num1 = num2
	num2 = temp

	return { num1, num2 }
}

console.log(swap_nums(2, 3)) // Output - { num1: 3, num2: 2 }
```

3. Print the fibonacci sequence?
__First 50 Fibonacci Numbers__
```js
const printFibonacci = (nterm) => {
   const number = nterm
   let n1 = 0, n2 = 1, nextTerm
   
   console.log('Fibonacci Series:')
   
   for (let i = 1; i <= number; i++) {
       console.log(n1)
       nextTerm = n1 + n2
       n1 = n2
       n2 = nextTerm
   }
}

printFibonacci(50)
```
4. Sort an array by both ascending and descending order?
```js
const sortArray = (arr) => {
	let ascending = new Int32Array(arr).sort()
	let descending = new Int32Array(arr).sort().reverse()
	return {
		"ascending": Array.from(ascending),
		"descending": Array.from(descending)
	}
}

console.log(sortArray([3, 5, 29, 4, 10])) // Output - { ascending: [ 3, 4, 5, 10, 29 ], descending: [ 29, 10, 5, 4, 3 ] }
```

5. Show a variable value in an HTML webpage using DOM?
```js
let a = 10
document.write(a)
```