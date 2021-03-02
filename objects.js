// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

let var=name;
dog[var] //gives Rusty
dog.var //error
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    7 : "age"
}
let var=7;
let varr = 7;
dog[varr] //output -> "age"
dog.varr //undefined
