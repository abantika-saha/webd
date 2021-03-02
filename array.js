// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// a1=[1,2,3];
// a2=[1,2,3];
// a1!=a2(because js identifies by address)
// a1=[1,2,3]
// a2=a1 (now a1===a2 is true)
// a2.push()
// a1 (output = [1,2])
// a2 (output = [1,2])
// const a1=[1,2]
// a1=[1,2,3] -> gives error;
// but a1.push(4), gives a1=[1,2,3,4]
