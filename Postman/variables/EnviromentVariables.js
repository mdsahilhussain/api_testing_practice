//!  Enviroment variabele.
//?  Accessible in all collecions, but we need to switch to particular enviroment.

//Todo How to create Enviroment.
//?  Top Left side [option add new enviroment]

//* =======================================================================================
//* =======  variable      ==  initial level            ==  current value            ======
//* =======================================================================================
//* =======  url_web_env   ==  https://localhost:3000   ==  https://localhost:3000   ======  [web enviroment all variabel not work in mob enviroment]
//* =======================================================================================
//* =======  url_mob_env   ==  https://localhost:3000   ==  https://localhost:3000   ======  [mob enviroment all variabel not work in web enviroment]
//* =======================================================================================

//Todo variable name can be any thing but alway use meanling full name.
//Todo current value => will reassing.
//? to access baseURL we pass link like [ {{}}/api ].


//! How to set Enviroment variable using pre-request [in pre-request section]. [.set()]
// Set baseURL
pm.environment.set("url_web_env","https://localhost:3000")
// Set id
pm.environment.set("personId_envOne","1")


//! How to print or get variable using test [in test section]. [.get()]
pm.environment.get("url_web_env")
pm.environment.get("personId_envOne")

//! How to delete variable using test [in test section]. [.unset()]
pm.environment.unset("url_web_env")
pm.environment.unset("personId_envOne")
