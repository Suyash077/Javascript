//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop using normal function
coding.forEach( function (val){
    console.log(val);
} )

//for each loop using arrow function
coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)// here we pass the refrence of the function

//Arrow function can take many parameters
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//Array of Objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

//Accessing the property of object inside the array of objects using for each loop
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
