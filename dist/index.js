"use strict";
var obj = { x: 0 };
var arr = [];
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
function test(x) {
    if (x === null) {
        console.log("dd");
    }
    else {
        console.log("Hello" + x.toLocaleUpperCase());
    }
}
var dasd = null;
var inputLogin = {
    username: "admin",
    password: "admin",
};
function checkLogin(login) {
    return "\u0110\u00E2y l\u00E0 th\u00F4ng tin login" + login;
}
console.log(checkLogin(inputLogin));
