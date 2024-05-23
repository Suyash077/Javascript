
// for of Loop
//The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
//Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections) 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);//output: 1 2 3 4 5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)//works fine.
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/


for (const key of map) {
    //console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/


for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

/*
IN :- India
USA :- United States of America
Fr :- France
*/

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);//Error: myObject is not iterable 
// }


//Note: objects are not iterable by for of loop



