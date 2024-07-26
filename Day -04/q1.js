/*
Q1 - Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
 */
const triangleArea = (length, breadth, height) => {
	console.log(`Length :- ${length}, Breadth :- ${breadth}, Height :- ${height}`)
	if (isNaN(length) || isNaN(breadth) || isNaN(height)) {
		return NaN
	}
	const s = (length + breadth + height) / 2
	return `Area :- ${Math.sqrt((s * (s - length) * (s - breadth) * (s - height)))}`
}


const length = 5
const breadth = 6
const height = 7

console.log(triangleArea(5, 6, 7))
console.log(triangleArea('hello', 6, 7))
