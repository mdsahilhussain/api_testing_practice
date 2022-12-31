//! Local variabele. 
//? We can access in local.



//! How to set Collection variable using pre-request [in pre-request section]. [.set()].
// Set id
pm.variables.set("personId_envOne","1")


//! How to print or get variable using test [in test section]. [.get()]
pm.variables.get("personId_envOne")

//! How to delete variable using test [in test section]. [.unset()]
pm.variables.unset("personId_envOne")