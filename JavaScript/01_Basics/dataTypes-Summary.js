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

// console.log(typeof myFunction);

//************************************* Stack and Heap Memory **************************************

// Stack (Primitive), Heap (Non-Primitive)

let myEmailid = "omg@gmail.com";
let anotherEmailid = myEmailid;
anotherEmailid = "gom@gmail.com";

// console.log(anotherEmailid);
// console.log(myEmailid);

let userOne = {
    email: "ogm@gmail.com",
    upi: "ogm@icici.upi"
}

let userTwo = userOne;
userTwo.email = "mog@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);
