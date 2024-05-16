
// Dates
let myDate = new Date()
console.log(myDate.toString());//output: Thu May 16 2024 11:39:57 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Output: Thu May 16 2024
console.log(myDate.toLocaleString());//Output: 5/16/2024, 11:39:57 AM
console.log(myDate.toTimeString());//Output: 11:39:57 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());//Output: Thu, 16 May 2024 11:39:57 GMT
console.log(myDate.toISOString());//Output: 2024-05-16T11:39:57.996Z
console.log(myDate.toJSON());//Output: 2024-05-16T11:39:57.996Z
console.log(typeof myDate);//Output: object

let myCreatedDate = new Date(2023, 0, 23)// here Month start from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());//1/23/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // give timestamp in mili seconds from 1st jan 1970 till now
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert miliseconds to seconds we divide by 1000 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//+1 since month start from 0
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// }) // this is done to customize the default format
