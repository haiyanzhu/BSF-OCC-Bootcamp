//Loops - loops are used to repeatedly execute a block of code until a specific condition is met
//They provide a way to automate code

//For loop
for (let i = 1; i <=5; i++) {
    console.log('For loop:', i);
}

//While loop
let count = 1;
while (count <= 10) {
    console.log('While loop:', count);
    count++;
    console.log('While loop:', count);
}

let counter = 1;
do {
    console.log('Do while count: ', counter++);
} while (counter <= 5);