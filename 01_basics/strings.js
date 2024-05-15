const name="Suyash"
const repocount=50

//console.log(name + " " + repocount + " value");  --> outdated

console.log(`Hello my name is ${name} and my repocount is ${repocount} `); //-->use of backticks Preferred

const gameName=new String('suyashsj')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);

/*
A String is defined as a sequence or an array of characters. Strings are treated as objects in the Java programming language. 
The term "immutable string" in Java refers to a string object that cannot be altered, but the reference to the object can be changed. 
Every time we make a modification, a new instance of that string is created and the previous value is copied to the new String with the change. 
The String class is marked final to prevent overriding the functionality of its methods.
*/

console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 5)// negative means it reads from last to and then goes to ind-1 here ind=5 
console.log(anotherString);

const newStringOne = "   Suyash    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Suyash.com/Suyash%20jain"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));