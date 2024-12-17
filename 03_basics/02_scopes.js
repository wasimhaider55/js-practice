var a = 20; // try not to used var 
let b = 30;
const c = 40;

// console.log(a);
// console.log(b);
// console.log(c);


if (true) {
    var score1 = 20;
    let score2 = 30;
    const score3 = 40;
}
// console.log(score1);  // executed bcz of  global scope 
// console.log(score2); // cannot execute bcz of scope 
// console.log(score3); // cannot execute bcz of scope



function one(){
    const username = "wasim"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // the var is not in the scope

     two()

}

// one()



if (true) {
    const username = "wasim"
    if (username === "wasim") {
        const website = "code with wmh"
        // console.log(username + website);
    }
    // console.log(website); // scope problem
}

// console.log(username); // scope problem



// ++++++++++++++++++ interesting ++++++++++++++++++

function addOne(num){
    return num + 1
}

console.log(addOne(5));


// console.log(addTwo(7)); // Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num + 2
}
console.log(addTwo(7));

