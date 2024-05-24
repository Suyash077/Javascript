//Map method and chaining

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map method : Calls a defined callback function on each element of an array, and returns an array that contains the results.

//const newNums = myNumers.map( (num) => { return num + 10})

/*output: [
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ]
*/

//Chaining : It is a mechanism for calling a method on another method of the same object.

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
/*
Output: [
  41, 51,  61, 71,
  81, 91, 101
 ]
 */