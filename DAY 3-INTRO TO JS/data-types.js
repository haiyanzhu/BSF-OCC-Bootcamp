
//Numbers - Represents numeric values example: 0-9
let score = 58;
console.log("Type of score :", typeof score);

//String - Represents textual data ('') or ("")
let playerName = "Mario_123";
console.log("The type of playerName:", typeof playerName);
let number = "58";
console.log('The type of Nuber:', typeof number);

//Boolean - Represent a value of true or false;
let isAdmin = true;
isAdmin = false;
console.log("The type of isAdmin:", typeof isAdmin);


//NULL: Represents intentional absence of value
let car = null;
console.log("The value of car:", car);
console.log("The type of car:", typeof car);

//Undefined: Represents unintentional absence of value
let city;
console.log("The value of city:", city);
console.log("The type of city:", typeof city);

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
console.log("The value of syml", sym1);
console.log("The value of syml", sym2);
console.log("The value of syml", sym3);
