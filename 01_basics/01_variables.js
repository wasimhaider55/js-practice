const accountId = 144553
let accountEmail = "wasim@google.com"
var accountPassword = "12345"
accountCity = "Peshawar"
let accountState; // output will  be undefiend 

// accountId = 22;   cannot overwrite the constant variables
// console.log(accountId);


accountEmail = "wh@hc.com"
accountPassword = "21212121"
accountCity = "Hangu"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/