function checkEvenOrOdd(num) {
    if (num%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let num1 = 10;
let num2 = 11;
console.log('The num1 is ', checkEvenOrOdd(num1) );
console.log('The num2 is ', checkEvenOrOdd(num2) );