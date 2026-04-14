// function call in js
const person1 = {name:"dotto"};
const person2 = {name: "jagger"};
const person3 = {name:"abel"};

function greet(greeting) {
    return greeting+ "" + this.name; 
}
greet.call(person3,"hello");
console.log(person3);