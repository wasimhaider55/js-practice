// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
// console.log(myArr[0]);

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0]);


// Array methods

myArr.push(6)
myArr.push(7)
// console.log(myArr);

myArr.pop()
// console.log(myArr);


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // array join and also converted into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice


console.log("A", myArr);
const mya1 = myArr.slice(1,5); // slice have not range include
console.log(mya1);


const mya2 = myArr.splice(1,3); // splice have include range but splice also change the original array of instance 
console.log(mya2);
console.log("B", myArr);
