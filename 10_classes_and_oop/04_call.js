function setUserName(username) {
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username) // call can do  other function properties execution 
    this.email = email
    this.password = password
}

const chai = new createUser("wasim", "wasim@gmail.com", "123")
console.log(chai);
