//! Colleciton variabele. 
//? We can access every where through out the Colleciton.

//? ↪  1. Colleciton. 
//?     ↪ 2. Request. 


//* =======================================================================================
//* =======  variable     ==  initial level            ==  current value            =======
//* =======================================================================================
//* =======  url_collet   ==  https://localhost:3000   ==  https://localhost:3000   =======
//* =======================================================================================

//Todo variable name can be any thing but alway use meanling full name.
//Todo current value => will reassing.
//? to access baseURL we pass link like [ {{url_collet}}/api ].


//! How to set Collection variable using pre-request [in pre-request section]. [.set()]
// Set baseURL
pm.collectionVariables.set("url_collet","https://localhost:3000")
// Set id
pm.collectionVariables.set("personId_envOne","1")


//! How to print or get variable using test [in test section]. [.get()]
pm.collectionVariables.get("url_collet")
pm.collectionVariables.get("personId_envOne")

//! How to delete variable using test [in test section]. [.unset()]
pm.collectionVariables.unset("url_collet")
pm.collectionVariables.unset("personId_envOne")
