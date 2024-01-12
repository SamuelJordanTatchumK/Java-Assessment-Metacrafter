/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
for(var i=1; i<=5; i++) {
 console.log(i);
}
console.log("I'm Hungry")

// Functions
function functionName() {
    console.log("Hello World");
  }
functionName()

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye");
  }
  myFun();

const ourArray = [];
let j = 0;

while (j < 5) {
  ourArray.push(j);
 // j++;
console.log(ourArray);
j++;}

//Iterate odd numbers
const Array = [];

for (let k = 0; k < 10; k += 2) {
    Array.push(k);
    console.log(Array);
}

//COUNT BACKWARD
const Array1 = [];

for (let t = 10; t > 0; t -= 2) {
    Array1.push(t);
    console.log(Array1);
}

//ITERATE THROUGH AN ARRAY
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

//The parseInt() function parses a string and returns an integer
const a = parseInt("007");
console.log(a)

function tryIt(numberAsString) {

    if (parseInt(numberAsString) == 123) {
      return console.log("Yay!");
    }
  
    console.log("Boo!");
  }
  
  tryIt("123");