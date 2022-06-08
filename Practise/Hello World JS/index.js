// For loop
// for(let i = 0; i < 10; i++)
// {
//     console.log("Hello World")
// }

// While loop
// let i = 10;
// while(i >= 0){
//     console.log("Hello World")
//     i--
// }

// do While
// let j = 0;
// do{
//     console.log("Hello World")
//     j++
// }while(j<10)

// For...In
// Objects
let animal = {
    name : "Zebra",
    leg: 4
};

for(let key in animal) {
    console.log(key, animal[key]);
}

// Arrays
let names = ["Rahul", "Neha", "Aman", "Rishabh"];
for(let index in names){
    console.log(index, names[index])
}

// For...of
for(let name of names){
    console.log(name)
}

