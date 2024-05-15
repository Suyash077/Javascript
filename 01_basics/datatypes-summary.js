//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol return a unique Symbol value
const id = Symbol('123')
const anotherId = Symbol('123')

//Return value for both id and anotheId are Different even though they have same input string '123'

console.log(id === anotherId); //Return false as id is not equal to anotherId

// const bigNumber = 3456543576654356754n  --> by using n after the number the datatype will convert to BigInt

// Reference (Non primitive)

// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];

//Object
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
//Return type of variables in JavaScript
console.log(typeof scoreValue);//number
console.log(typeof outsideTemp);//***object***
console.log(typeof userEmail);//undefined
console.log(typeof isLoggedIn);//boolean
console.log(typeof id);//symbol
console.log(typeof anotherId);//symbol
console.log(typeof heros);//**object**
console.log(typeof myObj);//object
console.log(typeof myFunction);//function

// https://262.ecma-international.org/5.1/#sec-11.4.3