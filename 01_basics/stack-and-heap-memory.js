//Stack (Primitive)  Heap(Non-Primitive)

let myName="Suyash"
let anotherName=myName //copy of myName is stored in anotherName

anotherName="yash"

console.log(myName);
console.log(anotherName);

//Object=>Non-primitive=>Heap Memory
let user1=
{
    email: "user@google.com",
    upiId:  "user@ybl"
}

let user2=user1 //User2 and user1 will point to same memory location

user2.email="Yash@gmail.com"
user2.upiId="Yash@ybl"

console.log(user1.email);
console.log(user2.email);
console.log(user1.upiId);
console.log(user2.upiId);
