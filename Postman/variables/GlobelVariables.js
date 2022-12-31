//! Globel variabele. 
//? We can access every where through out the workspace.

//? 1. Wrokspace. 
//? ↪  2. Colleciton. 
//?     ↪ 3. Request. 


//* ====================================================================================
//* =======  variable  ==  initial level            ==  current value            =======
//* ====================================================================================
//* =======  baseURL   ==  https://localhost:3000   ==  https://localhost:3000   =======
//* ====================================================================================

//Todo variable name can be any thing but alway use meanling full name.
//Todo current value => will reassing.
//? to access baseURL we pass link like [ {{baseURL}}/api ].

//! How to set Collection variable using pre-request [in pre-request section]. [.set()]
// Set baseURL
pm.globel.set("baseURL","https://localhost:3000")
// Set id
pm.globel.set("personId_envOne","1")


//! How to print or get variable using test [in test section]. [.get()]
pm.globel.get("baseURL")
pm.globel.get("personId_envOne")

//! How to delete variable using test [in test section]. [.unset()]
pm.globel.unset("baseURL")
pm.globel.unset("personId_envOne")