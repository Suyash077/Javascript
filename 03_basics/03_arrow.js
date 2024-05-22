const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
//Note:this points to the current context

user.welcomeMessage()
/*
Output
hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
user.username = "sam"
user.welcomeMessage()
console.log(this);//Output: {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//Output: Undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);//Output: Undefined
// }


//Arrow Function
const chai =  () => {
    let username = "hitesh"
    console.log(this);//Output: {}
}

//chai()

//Note: So we can't use this in normal function as well as arrow function.It is used in context with objects.


const addTwo = (num1, num2) => {
    return num1 + num2//Explicit Return
}

//Important Note: when we use () => {} with arrow function then it's necessary to write the return keyword but 
//when we use () => () with arrow function we don't need to write the return keyword

// const addTwo = (num1, num2) =>  num1 + num2 //Implicit Return

// const addTwo = (num1, num2) => ( num1 + num2 )//Implicit Return

//Returning an object
//const addTwo = (num1, num2) => ({username: "hitesh"})


//console.log(addTwo(3, 4))