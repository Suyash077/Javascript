function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName -->   Reference to the function
// sayMyName() --> Execute the function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){//In js undefined is false so if (username == undefined) then we print Please enter a username 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("suyash"))

// ... is rest parameter basically The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))//Output: [ 200, 400, 500, 2000 ]

const user = {
    username: "suyash",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));