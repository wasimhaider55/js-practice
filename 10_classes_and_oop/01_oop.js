// const user = {
//     username: "wasim",
//     loginCount: 8,
//     isSignedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // // console.log(`Username: ${this.username}`);
//         // console.log(this);
//     }
// }

// // console.log(user.username)
// // console.log(user.getUserDetails());
// // console.log(this);





function User(username, loginCount, isSignedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn

    this.greating = function(){
        console.log(`Welcome ${this.username}`);   
    }
    // return this;
}

const userOne = new User("wasim", 9, true);
const userTwo = new User("chaiOurCode", 6, true);
console.log(userOne.constructor);
// console.log(userTwo);


