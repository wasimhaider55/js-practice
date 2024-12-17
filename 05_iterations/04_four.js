// for in loops "which is not working on map"

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//   console.log(`${key} is shortcut of ${myObject[key]}`); 
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) { // for in loop is  not working on map bcz it cannot iterate the map 
//     console.log(key);
// }