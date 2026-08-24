// arrays 

const myArr = [1, 2, 4, 5, 7]
const myheroes = ["hitesh", "mitesh"]

const myArr2  = new Array(1, 3, 5, 6 ,3 )
console.log(myArr[0]);

// array methods 

// myArr.push(6)
// console.log(myArr);
// myArr.push(6)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() 

// console.log(myArr);
// console.log(typeof newArr);
// console.log(myArr);

// slice, slice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);




