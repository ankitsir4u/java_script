function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 
}
const result = addTwoNumbers(3,5);
// console.log("Result:", result);/

function loginUserMessage(username){
    if (!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"));

function calculateCarPrices(val1, val2, ...num1){
    return num1 
}
// console.log(calculateCarPrices(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    prices:199
}
function handleObject(anyobject){
    console.log(` username is ${anyobject.username} and price is ${anyobject.prices}`);

}
 handleObject(user);
handleObject({
    username:"sam",
    price:199
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));


