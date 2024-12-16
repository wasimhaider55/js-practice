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

console.log(loginUserMessage("wasim"));
