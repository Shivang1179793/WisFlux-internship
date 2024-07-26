/*
Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.
 */

const celciusToFahrenheit = (celcius) => {
	if(isNaN(celcius)) return NaN

	return `${celcius}⁰C is :- ${((celcius * 1.8) + 32)}⁰F`
}

const fahrenheitToCelcius = (fahrenheit) => {
	if(isNaN(fahrenheit)) return NaN

	return `${fahrenheit}⁰F is :- ${((fahrenheit - 32) * (5 / 9))}⁰C`
}

console.log(celciusToFahrenheit(60))
console.log(fahrenheitToCelcius(45))
console.log(celciusToFahrenheit("hello"))
console.log(fahrenheitToCelcius("hello"))