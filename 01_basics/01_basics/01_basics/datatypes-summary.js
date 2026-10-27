// premittive 
//  7 types : string , number , boolean  , null, undefined, symbol,  BigInt

const score = 180
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3455678n // after number add n , the number made automaticallty BigInt


// reference ( non-premitive)

// array , objects, functions

const  heroes = ["shakti", "naagraj", "doga"]
let myObj = {
    name:"hello",
    age: 22,
}
const myFunction = function(){
    console.log("hello  world");
}
console.log(typeof outsideTemp);