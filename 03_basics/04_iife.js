//Immediately invoked function expressions
(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();//semicolon is used to end the iife

/*
Note: 
1)iife is used to immediately invoke the function
2)iife is used to solve the problem caused by global scope pollution
*/

((name)=>{
    //unamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})("Suyash");
