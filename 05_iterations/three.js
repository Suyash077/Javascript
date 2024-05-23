const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);//works fine
}

//Note:Objects are iterable using for in loop

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//Note: Maps are not iterable using for in loop

/*
Note:

Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.

The for...in statement iterates over the enumerable string properties of an object, while the for...of statement iterates over 
values that the iterable object defines to be iterated over.

*/