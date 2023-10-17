const accountId = 987654
let accountEmail = "om@gmail.com"
var accountPass = "12345"
accountcity = "Moradabad"
let accountState;

// accountId = 23 // not allowed

accountEmail = "omg@gmail.com"
accountPass = "54321"
accountcity = "Jaipur"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPass);
// console.log(accountcity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountcity, accountState]);