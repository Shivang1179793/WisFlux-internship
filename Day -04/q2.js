/*
Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
 */

const no1 = document.getElementById("no1")
const no2 = document.getElementById("no2")
const mul = document.getElementById("mul")
const div = document.getElementById("div")

mul.addEventListener('click', (e) => {
	e.preventDefault()
	document.getElementById("result").innerText = `The answer is :- ${parseInt(no1.value * no2.value)}`
})

div.addEventListener('click', (e) => {
	e.preventDefault()
	document.getElementById("result").innerText = `The answer is :- ${parseInt(no1.value / no2.value)}`
})