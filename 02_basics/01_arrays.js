// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9) //push_front
//myArr.shift() // pop_front

//console.log(myArr.includes(9));//Returns boolean value
//console.log(myArr.indexOf(3));//Returns index if present else return -1

const newArr = myArr.join()//Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr); 
console.log( newArr);


// slice, splice
console.log("A ", myArr);//Output: A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)//Returns a copy of a section of an array without changing the original array

console.log(myn1);//Output: [ 1, 2 ]
console.log("B ", myArr);//Output: B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)//Removes elements from an original array and returning the deleted elements.
//Parameters (start — location in the array from which to start removing elements. deleteCount — The number of elements to remove.)
console.log(myn2);//Output: [ 1, 2, 3 ]
console.log("C ", myArr);//Output: [ 0, 4, 5 ]