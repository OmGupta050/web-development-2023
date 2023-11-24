// console.log("O");
// console.log("M");

function sayMyName(){
    // console.log("O");
    // console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result

    // return number1 + number2
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "Paul"){
    if(!username){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Om"));
// console.log(loginUserMessage("Om"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Om",
    price: 199
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "Paul",
    price: 499
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));