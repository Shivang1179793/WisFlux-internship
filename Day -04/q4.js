/*
Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
 */

const checkDifference = (number) => {
	if(isNaN(number)) return NaN

	const difference = number - 13

	console.log(`Number :- ${number}, Difference :- ${difference}`)

	if(difference > 13) {
		return Math.abs(difference * 2)
	}

}

console.log(checkDifference(5))
console.log(checkDifference(28))
console.log(checkDifference("hello"))


