// Variables

const token = "hajksdhfkjhahjweuiryuih696969";








// Data Types

/* 
    Boolean: true or false

    null: Not Real aka Dalton

    undefined: Exists but empty

    Number: Integer or Float

    BigInt: 9007199254740992n

    String: "" '' ``

    Symbol

    Array
*/

// Structural types

/* 
    Objects

    Functions
*/

let WomanNot = {
    name: "Something",
    age: 100,
    isGay: true,
    partner: "Man",
    gayFunc: gayFunction()
}

let Man = {
  name: "Something",
  age: 100,
  isGay: true,
  partner: WomanNot,
  gayFunc: gayFunction(WomanNot.isGay),
};


function gayFunction(isGay) {
    return isGay
}







console.log(Man.gayFunc);

let price;

let c;

// console.log("your mom said \"asdfasdfasdf\"")

price = 21

c = "mouth"

// console.log(`${price} ${b} ${c}`);

// ARRAYS

let arrayhehe = [1, 2, 3, 4, 5, 6, 7, 8]



console.log(arrayhehe.length)

// LOOOOOOOOOPS
console.log("                               ");
//FOR LOOPS

for (let i = arrayhehe.length - 1; i > -1; i--) {
    const element = arrayhehe[i];
    console.log(element);
}

for (let i = 0; i < arrayhehe.length; i++) {
    const element = arrayhehe[i];
    
}

console.log('                               ');

// DO ... WHILE


// do {
//     i++
//     console.log(i);
// } while (i < 4);

// WHILE
2
let prices = 0;

while (prices < 200) {
    // run shit

    prices += 50
    console.log(prices);

    // keyboardinterupt control+c
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const iterator of object) {
    
// }

arrayhehe.forEach(el => {
    console.log(el);
})
console.log("                               ");

// Functions

// :3


// function somethingUnique() {
//     // let i = 1;
//     return i   
// }

// let uniqueSomething = function () {
//     return somethingUnique()
// }
let mayoz = 0;

let cheesez = 100;

let yuh = (mayo, cheese, bread = 1) => {
  return `${mayo}, ${bread}, ${cheese}`;
};

let a = 1;

let b = a

a = a + b

console.log(a);
console.log(b);

console.log("                               ");
let otherNumber = 10
let num = 1
let num2 = 2
let num3 = 3



function addsTwo(number) {
    return number + 2
}

let numArray = [num, num2, num3]
console.log(numArray);
for (let i = 0; i < numArray.length; i++) {
    const element = numArray[i];
    console.log(addsTwo(element));
}
console.log("                               ");

console.log(addsTwo(otherNumber));
console.log(otherNumber)

console.log("                               ");

console.log(yuh(mayoz, cheesez));





 






