// method 1 we stored promises in variable
const promiseOne = new Promise(function (resolve, reject) {
     //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("async task is completed")
        resolve();
    }, 1000);
})
promiseOne.then(function () { // you need to connect resolve method for .then 
    console.log("promised consumed");    
})


// method 2 
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("async task number 2");
        resolve() 
    }, 1000);
}).then(function() {
    console.log("async task 2 completed");   
})


// method 3
const promiseThree = new Promise(function (res, rej) {
    setTimeout(() => {
        res({username : "wasim", email : "wasim.dev55@gmail.com"})     
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);   
})


// method 4
const promiseFour = new Promise(function (res, rej) {
    setTimeout(() => {
        let error = false
        if(!error) {
            res({username: "wasim haider", password: "khanSaab"})
        } else {
            rej("Error Something went Wrong");    
        }
    }, 1000);
})


promiseFour
.then((user) => {
    // console.log(typeof user);   
    console.log(user);   
    console.log(user.username);   
})
.catch((Error) => {
    console.log(Error);   
})
.finally(() => {
    console.log("the promise are either resolve or rejected");  
})


// method 5 
const promiseFive = new Promise(function (res, rej) {
    setTimeout(() => {
        let error = true;
        if(!error) {
            res({username: "javascript", password: "1245"})
        } else {
            rej("Error: Js went Wrong");    
        }
    }, 1000);
})

async function consumedPromiseFive() {
    try {
    const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error);
        
    }   
}

consumedPromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))