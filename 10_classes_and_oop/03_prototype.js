let myName = "hitesh     "
let mychannel = "chai     "


// console.log(myName.trim().length);
// console.log(myName.trueLength); // this is a chalange

let myHero = ["amir, salman"]

let heroPower = {
    amir: "pk",
    salman: "tereNaam",

    getSalmanPower : function(){
        console.log(`salman power is ${this.salman} `);
        
    }
}
 
// create prototype in obj "it will working also in array and function"
Object.prototype.wasim = function(){
    // console.log(`wasim is present in all object`);  
}


// create prototype in array "at will not working in object"
Array.prototype.heyWasim = function(){
    // console.log(`wasim says hello`);
}

// heroPower.wasim(); // object call 
// myHero.wasim(); // array call in both arr and obj have make wasim method
// heroPower.heyWasim(); // heywasim is not working bcz we defiend it in array not in obje
myHero.heyWasim();



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // inheritance
}

Teacher.__proto__ = User // all user properties have assign to Teacher properties


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let userName = "kahiKandwalo";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

userName.trueLength();
"wasim   ".trueLength(); // the above chalange/problem is slove here 
"    Haider   ".trueLength();



