//Synchronouse Function;
console.log('First');
console.log('Second');
console.log('Third');

//Asynchronous Programming
console.log('First');
setTimeout(() => {console.log('Second');}, 5000);
console.log('Third');

