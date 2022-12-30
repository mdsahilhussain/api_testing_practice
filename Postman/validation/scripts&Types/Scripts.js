//Todo  There are two type of script.
//Todo  1. pre-request Script.
//Todo  2. test Script.

//! Pre-request Script
//? pre-request script associated with a request will execute before the request is sent.

//! Test Script
//? A test script associated with a request will execute after the request is sent.


//! working flow of this
//? pre-request => request => response => test.

//! This script associated with all this level.
//? 1. Collection level. 
//? ↪  2. Folder level. 
//?     ↪ 3. request level. 

// Now the runing scope is
//? 1. Collection level (pre-request scipt). 
//? ↪  2. Folder level (pre-request scipt). 
//?     ↪ 3. request level (pre-request scipt).
//?        ↪ 4. request sent => 5.response resive
//?                                            6. Collection level (test scipt). 
//?                                            ↪  7. Folder level(test scipt). 
//?                                                ↪ 8. request level(test scipt).