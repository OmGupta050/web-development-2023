// Primitives
// 7 types : String, Number, Boolean, Symbol, BigInt, Null, and Undefined

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = False;
const outsideTemp = null;
let userEmail;

const id = symbol('123');
const anotherId = symbol('123');

// console.log(id === anotherId);

// const bigNumber = 12345678912345678912;
const bigNumber = 12345678912345678912n;


// Reference (Non-Primitives)
// Array, Objects, and Functions

const heros = ["Ironman","Spiderman", "Shaktiman"];
let myObj = {
    name : "Om",
    age : 18,
};

const myFunction = function(){
    // console.log("Hello World");
}