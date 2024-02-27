//Functions Allows user to write resuable block of codes and also provides ways to organize and structure codes
//Declaring a function
function greet() {
    console.log('Hello to the world of functions!');
}

//Calling a funcition;
greet();

//functionDeclaration();
//Function declaration;
//can call a function before its declaration but can't call it before function expression;
function functionDeclaration() {
    console.log('Hello! I am a function declaration!');
}
functionDeclaration();

//functionExpression();
//Function expression - Can't not be hoisted;
const functionExpression = function () {
    console.log('Hello! this is function expression');
}
functionExpression();

//Functions with parameters
function greetme(name) {
    console.log('Hello', name + '!');
}
greetme('Regel');

//Function with a return value
function sum(a, b) {
    console.log('I am printed before return value');
    return a + b; //Return marks the end of the code block, anything after it will be Muted/unreachable;
}

console.log('The sume of a and b is ', sum(10,20));


