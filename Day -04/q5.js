/*
Write a JavaScript program to find the largest of three given integers.
 */

const checkLargest = (number1, number2, number3) => {
	if(isNaN(number1) || isNaN(number2) || isNaN(number3)) return NaN

	console.log(`${number1}, ${number2}, ${number3}`)

	if((number1 === number2) && (number1 === number3)) return "All Numbers are same"
	if((number1 > number2) && (number1 > number3)) return `${number1} is greater than ${number2} and ${number3}`
	if((number2 > number1) && (number2 > number3)) return `${number2} is greater than ${number1} and ${number3}`
	if((number3 > number1) && (number3 > number1)) return `${number3} is greater than ${number1} and ${number2}`
}

console.log(checkLargest(10, 20, 30))
console.log(checkLargest(10, 30, 20))
console.log(checkLargest(30, 20, 10))