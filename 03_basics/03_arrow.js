const user = {
    username: "wasim",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); this is used for current context 
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // show empty obj in browser and window in obj in node




// const chai = function (){
//     let username = "wasim"
//     // console.log(this.username); // this is just used in obj not in the function 
// }

// chai()


// const chai = () =>{
//     let username = "wasim"
//     console.log(username); // this is just used in obj not in the function 
// }

// chai()




// Method 1
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,5));

// Method 2
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(4,5));


// Method 3
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(6,5));



