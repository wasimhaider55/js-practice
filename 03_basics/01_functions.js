function myName(){
    console.log("w");
    console.log("a");
    console.log("s");
    console.log("i");
    console.log("m");   
}
// myName();


// method 1
function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
// addTwoNumbers(4,5)


// method 2
function addTwoNumbers(number1, number2){
    let result = number1 + number2 ;
    return result
    console.log("wasim haider"); // code will not execute after result   
}

// result = addTwoNumbers(4,4)
// console.log(result);


// method 3
function addTwoNumbers(number1, number2){
    return number1 + number2   
}
const result = addTwoNumbers(7,7)
// console.log(result);



function loginUserMessage(username = "Haider"){
    if (!username) {
        console.log(" Please enter the user name"); 
        return       
    }
    return `${username} just logged in`
}

// loginUserMessage("Haider") // just function called 
// console.log(loginUserMessage("wasim"));


// Rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000,5000))

const user = {
    username: "wasim",
    age: 99
}

function handleObject(anyobject){
    // console.log(`User name is ${anyobject.username} and age is ${anyobject.age}`);   
}
// handleObject(user)

// pass the whole object here 
handleObject({
    username : "Haider",
    age : 299
})


const myarr = [100,300,400,5000];

function retrunSecondValue (anyarray) {
return anyarray[2];
}

// console.log(retrunSecondValue(myarr));

// pass the whole array here 
// console.log(retrunSecondValue([100,300,400,5000]));


