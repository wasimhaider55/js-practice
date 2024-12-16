// singleton or constructor methos
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "wasim",
    "full name": "wasim haider",
    [mySym]: "mykey1",
    age: 18,
    location: "peshawar",
    email: "wasim@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "wasim@chatgpt.com";
// Object.freeze(JsUser) // locked the object mean cannot change 
JsUser.email = "wasim@amazon.com" // cannot overwrite bcz it is freez
// console.log(JsUser.email);
// console.log(JsUser);


JsUser.greeting = function () {
    console.log("good morning sir ");   
}

// console.log(JsUser.greeting()); // unfreez object uper which i haved freezed
// console.log(JsUser.greeting);  // function reference call 


JsUser.greetingTwo = function () {
    console.log(`good morning ${this.name}`);  // this is used for current contex of jsUser  
}

console.log(JsUser.greetingTwo());

