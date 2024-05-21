// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suyash",
            lastname: "Jain"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }//obj3 will have obj1 and obj2 separately

//Two ways to copy the values of object to other object
//1)using assign 2)using spread operator
//assign-->Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object
const obj3 = Object.assign({}, obj1, obj2, obj4)//Here {} is target and obj1,obj2 and obj4 are source objects

//We will be Using spread most of the times rather than assign
const obj5 = {...obj1, ...obj2,...obj4}
// console.log(obj3);
// console.log(obj5);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

//Important
// console.log(Object.keys(tinderUser));//Return the Array of keys
// console.log(Object.values(tinderUser));//Return the Array of Values
// console.log(Object.entries(tinderUser));//Return the Array of [Key,value]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//Determines whether an object has a property with the specified name.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//De-structure
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//This is JSON and not the object//JSON-Javascript object Notation
//IN JSON keys are also strings
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//We can also get array of objects
[
    {},
    {},
    {}
]
