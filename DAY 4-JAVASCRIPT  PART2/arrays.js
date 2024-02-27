//Topic: Introduction to Arrays
//Creating an array
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];
console.log('Character 2 : ', characters[1]);
console.log('Character 5 : ', characters[4]);
console.log('the last character : ', characters[characters.length-1]);


//Modifying array elements
characters.push('sasuke');
console.log('Modified Array :', characters);
characters.pop();
console.log('Modified Array :', characters);
characters[0] = 'crybaby';
console.log('Modified Array :', characters);


//Array Iteration
for (let i = 0; i < characters.length; i++) {
    console.log('character ', i+1, characters[i]);
}

characters.forEach(function(character){
    console.log(character);
});
//characters.forEach((element)=>console.log(element));

//Array Methods
//indexOf

console.log(characters.indexOf('layla'));

//includes
console.log('Includes a value: ', characters.includes('sasuke'));

//join
console.log('Joined array:', characters.join(' - '));

//slice(start, end), character array still be there, nothing be changed on the original array;
//A new array containing the extracted elements.
let slicedArray = characters.slice(1,4);
console.log('slicedArray: ', slicedArray);

//splice(start, deleteCount, item1, item2), item are those added to from the start position;
//return value: An array containing the deleting elements;
let removedElements = characters.splice(0,2);
console.log('Removed elements: ', removedElements);
console.log('Updated Array:', characters);


