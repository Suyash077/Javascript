//Singelton
//Object.create//Create the object by constructor method

//Object Literals
const mySym=Symbol("key1")
const Jsuser={
    name: "Suyash",
    "full name": "Suyash Jain",
    [mySym]: "mykey1",//Syntax to use symbol as key. we use [] for using symbol as key
    age: 18,
    location: "Jaipur",
    email: "Suyash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Note: Object stores Data as <key,value> pair, Where it always stores key as a string 
//For example key name will be stored as "name" age will be stored as "age"


//Ways to Access the object 
console.log(Jsuser.email);//In this way we can't access the "full name"
console.log(Jsuser["email"]);//This way to access is preferred 

console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email="Suyash@chatgpt.com"
Object.freeze(Jsuser)//If we want that there shouldn't be any further changes in existing property attributes and values then we can freeze the object
Jsuser.email="Suyash@microsoft.com"//Changes will not be reflected as object is freezed
console.log(Jsuser);


Jsuser.greeting=function(){
    console.log("Hello Js User");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this point to the current object
}

console.log(Jsuser.greeting);//output: [Function (anonymous)] // Basically it gives reference of the function and don't execute the function
console.log(Jsuser.greeting());//It executes the function
console.log(Jsuser.greetingTwo());