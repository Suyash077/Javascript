const accountID=12235
let accountEmail="Suyash@gmail.com"
var accountPassword="1234567"
/*
we don't use var
because of issue in block scope and functional scope
*/
accountCity="Jaipur"
let accountState;

accountEmail="Yash@gmail.com"
accountPassword="777777"
accountCity="Panna"

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])