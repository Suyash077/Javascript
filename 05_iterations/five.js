const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

//Note: for each loop don't return any value

console.log(values);//output: undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//filter method

/* Returns the elements of an array that meet the condition specified in a callback function. 
   If no elements met the condition, an empty array is returned.
*/

//Note: function used as parameter in filter is called as call back function.

const newNums = myNums.filter( (num) => {
    return num > 4
} )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

//console.log(newNums); //Output: [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')//Outputs objects with genre='History'

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})//outputs object with publish year >= 1995 and genre='History'
  console.log(userBooks);