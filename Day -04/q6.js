/*
Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.
 */

const checkGrade = (Maths, Science, English, Exam) => {
	if(isNaN(Maths) || isNaN(Science) || isNaN(English)) return NaN
	if(Exam === "") return "No Exam Selected"

	const totalMarks = Maths + Science + English
	const finalExamCheck = Exam === "Final-Exam" && totalMarks >= 90
	const semesterExamCheck = totalMarks >= 89 && totalMarks <= 100
	let grade

	console.log(`Maths :- ${Maths}, Science :- ${Science}, English :- ${English}, Exam :- ${Exam}`)

	if(finalExamCheck || semesterExamCheck) grade = "A+"

	return grade === "A+"

}

console.log(checkGrade(50, 60, 30, "Final-Exam"))
console.log(checkGrade(45, 30, 20, "Semester-Exam"))
console.log(checkGrade(10, 15, 17, "Semester-Exam"))