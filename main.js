"use strict";
let age = 20;
if (age >= 18) {
    console.log("you are eligible for id card");
}
else {
    console.log("you are not eligible");
}
;
let email = "anaya@gmail.com";
let pass = "qwerty";
if (email == "anaya@gmail.com" && pass == "qwerty") {
    console.log("logged");
}
else {
    console.log("invalid creds");
}
let firstame = "ali";
if (firstame == "ali") {
    console.log("you cannot log in");
}
let A = 99;
if (A <= 100) {
    console.log("grade A");
}
else {
    console.log("pass");
}
;
let percentage = 35;
if (percentage >= 90 && percentage < 100) {
    console.log("A+ grade");
}
else if (percentage >= 80 && percentage <= 89.99) {
    console.log("A grade");
}
else if (percentage >= 70 && percentage <= 79.99) {
    console.log("B grade");
}
else if (percentage >= 60 && percentage <= 69.99) {
    console.log("c grade");
}
else
    console.log("fail");
