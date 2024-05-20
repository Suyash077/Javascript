const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const all_new_heros = [...marvel_heros, ...dc_heros]//... is called Spread and it basically concatinate both arrays

console.log(all_new_heros);//Output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat-->Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)//we can specify the depth also but here we put infinity
console.log(real_another_array);
/*Output:
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Hitesh"))//output: false
console.log(Array.from("Hitesh"))//output: [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting--->output: []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//output: [ 100, 200, 300 ]