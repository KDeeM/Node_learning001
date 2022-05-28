// functions can be created such as in normal javascript.
function randomNumber(  ){
  return Math.random();
}

// when exporting a single item from a module, it can 
// be set as the value of the 'module.exports' variable
// rather than setting it inside the 'module.exports' object;
module.exports = randomNumber;