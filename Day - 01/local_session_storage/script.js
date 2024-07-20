const session_stg = document.getElementById("session_stg")
const local_stg = document.getElementById("local_stg")

sessionStorage.setItem("random_val", Math.random().toString())
// localStorage.setItem("random_val", Math.random().toString())
// set the value once and now it will persist through all reloads!!

session_stg.innerHTML = `Here is the value of session storage :- <b>${sessionStorage.getItem("random_val")}</b>`

local_stg.innerHTML = `Here is the value of local storage :- <b>${localStorage.getItem("random_val")}</b>`
