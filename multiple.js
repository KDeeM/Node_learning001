// this file is used to show how to export multiple content
function log( message ){
  console.log( message );
  return;
}

function sum( ...numbers ){
  let arr = numbers;
  arr.reduce(
    function( total = 0, num ){
      return total + num;
    }
  )
  return;
}

// module functions and variables are exported by
// declaring them as part of the module.exports object
module.exports.log = log;
module.exports.sum = sum;

// to view the details about a module, run the module
// and log out the 'module' global keyword
/*
console.log( module );
*/