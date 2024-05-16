const score=100
console.log(score);

const balance=new Number(100) // Created the object of Number class with value as 100
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//---> gives ans upto 2 decimal places

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));

const hundreds=1000000
console.log(hundreds.toLocaleString());//Gives values according US standards
console.log((hundreds.toLocaleString('en-IN')));// Gives Value according to Indian Standards

const maxi=Number.MAX_VALUE
console.log(maxi);

const mini=Number.MIN_VALUE
console.log(mini);



//+++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 50

//Getting a random integer between two values
console.log(Math.floor(Math.random() * (max-min)) + min)// The maximum is exclusive and the minimum is inclusive

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// The maximum is inclusive and the minimum is inclusive
