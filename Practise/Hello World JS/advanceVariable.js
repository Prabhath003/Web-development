let foo = 'bar';
var bar = 'foo';

function sayHello() {
    let foo = 'bash';
    var bar = 'foobar';
    console.log(foo);
    console.log(bar);
}

sayHello();
console.log(foo);
console.log(bar);