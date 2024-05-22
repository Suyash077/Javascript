var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c=30
    console.log("INNER: ", a);
    //a and b are accessible within the block scope(Curly braces) 
}

console.log(a);//Output:300
//console.log(b);//Error: b is not defined
console.log(c);//output:30-->Because of the problem in scope we avoid using var


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    //console.log(website);//Error: website is not defined
}

//console.log(username);//Error: username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5)) //Output: 6
// //1st way to declare a function
// function addone(num){
//     return num + 1
// }



// addTwo(5)//Error: Cannot access 'addTwo' before initialization

// //2nd way to declare a function
// const addTwo = function(num) //Here we are declaring the function as well as holding the function in addTwo Variable
// {
//     return num + 2
// }