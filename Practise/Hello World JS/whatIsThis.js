// let counter = createCounter();
// let counter1 = createCounter();

// function createCounter() {
//     return {
//         count: 0,
//         increment: function() {
//             this.count++;
//              console.log(this);
//         }
//     }
// }


// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// console.log(counter1);

// var count = 0;
// function incrementCounter(counter) {
//     this.count++;
//     console.log(this);
// }

// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();
console.log(this);

class Car {
    constructor(name) {
        this.name = name;
        this.start = function () {
            console.log(this.name + ' started');
            console.log(this);
        };
    }
}

let swift = new Car('Swift');
// swift.start();

console.log(this)