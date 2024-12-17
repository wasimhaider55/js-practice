// for of loops "this is not working using objects (it's not for object)"

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5,6]

for (const num of arr) {
    //console.log(num);
}

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

// Map

const map = new Map();
map.set("pk", "pakistan")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set("pk", "pakistan") // not executed bcz map is just for unique collection

console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// for of loop is not working on object mean it cannot iterate the object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }