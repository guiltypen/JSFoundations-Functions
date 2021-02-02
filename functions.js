
// Declaring a variable
let name = "Bader"
 let numStatus;
 let num = 7;
 let result;

 // greating function
function greet(name) {

  console.log("Hello "+ name)
}

greet(name); // print greeting

// check if odd return true 
function isOdd(n) {
numStatus = (n % 2 == 0 ) ? false:true

}

isOdd (num);
console.log("is the number odd? "+ numStatus)

// calcuate how many odds smaller than the number
function oddsSmallerThan(n) {
 
  if (numStatus == true){
    console.log (`There are   ${(n/2) - 0.5}  Odds smaller than ${num}`)
  }else
  console.log (`There are   ${(n/2)}  Odds smaller than ${num}`)
 
}

oddsSmallerThan(num);
/*
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 */

function squareOrDouble(n) {

  if (numStatus == true){
    result = n*n
  }else
   result = 2*n;
}

squareOrDouble(num);
if (numStatus == true) {
console.log(`since ${num} is odd the square is ${result}`);
}else {

}console.log(`since ${num} is even the double is ${result}`);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
