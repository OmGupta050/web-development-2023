// Singleton
//Object.create

//Object Literals

const mySum = Symbol("Key1");

const jsUser = {
    name: "Om",
    "fullname": "Om Gupta",
    [mySum]: "myKey1",
    age: 18,
    location: "Moradabad",
    email: "om@rockstar.com",
    isLoggedIn: false,
    lastLoginDays: ["Thursday", "Sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser.[mySum]);
// console.log(typeof jsUser.mySum);

jsUser.email = "om@coding.com";
// Object.freeze(jsUser);
jsUser.email = "om@coder.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello jsUser");
}
jsUser.greetingTwo = function() {
    console.log(`Hello jsUser ${this.name}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());