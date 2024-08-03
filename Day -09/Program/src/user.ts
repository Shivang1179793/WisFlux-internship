enum Gender {
	Male = "Male",
	Female = "Female"
}

export default interface User {
	name: string,
	age: number,
	email: string,
	gender: Gender
}