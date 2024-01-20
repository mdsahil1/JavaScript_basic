const accountId = 203040
let accountEmail = "mdsahil123@google.com"
var accountPassword ="12345"
accountCity ="Kolkata"
let accountState;

// accountId = 2 not allowed 
accountEmail="sahil123@gmail.com"
accountPassword="34232"
accountCity="Patna"

/*
prefer not to use var bcoz of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountId,accountState])