const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//Note:
//A falsy  value is a value that is considered false when encountered in a Boolean context.
//a truthy value is a value that is considered true when encountered in a Boolean context.

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values 
// "0", 'false', " ", [], {}, function(){}

//Checking if array is empty or not
if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
//Checking if object is empty or not
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
//when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")