// We can import code from other modules
// ./ - in the same directory
// ../ - up one directory
// ./<dir>/ - inside a directory
const logger = require("./multiple");
const random = require("./single");

// the imported code can be accessed from the 
logger.log("I am a working!");
console.log( random() );

// variables can be declared such as in normal js.
let greeting = "Hello there explorer, how are you doing?";
console.log(greeting);

// objects such as the dom are non existent within node
// such statement will thus cause errors.
/*
let wontWork = document.querySelector(".wontWork");
*/