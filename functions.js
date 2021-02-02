
// Declaring a variable
let name = "Bader"
 let numStatus;
 let num = 8;
 let result;

 // greating function
function greet(name) {

  console.log("Hello "+ name)
}

greet(name); // print greeting

// check if odd return true 
function isOdd(n) {
return (n % 2 == 0 ) ? false:true

}

isOdd (num);


// calcuate how many odds smaller than the number
function oddsSmallerThan(n) {
return parseInt(n/2)}

oddsSmallerThan(num);
/*
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 */

function squareOrDouble(n) {
 
  if (isOdd(n)){
    return  n*n
    
  }else {
   return  2*n;
   
  }
}

squareOrDouble(num);


module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
