// function greet(name){
//     console.log(name ,"Hello Aman");

//     return name+" Hello";
// }

// const res = greet("Aman");
// console.log(res);

// greet(123);
// greet("amana");


// function multiply(a,b){
//     console.log("Multiplying " + a + " and " + b);
//     return a*b; 
// }

// const mu = multiply(5,2);
// const mus = multiply(5,7);
// console.log(mu);
// console.log(mus);

// arrow function Greet:
// const divi = (a,b) => res = a/b;
// let amn = divi(10,2);
// console.log(amn);



// Arrow Function:

const multiply = (a,b) => {
    console.log("Multiply", a , " and ", b);
    return a*b;
};

const ret = multiply(4,5);
console.log(ret);
multiply(5,6);


// Default Parameter :
const greetfunction = (name = "Guest") => console.log("hi" ,name);
greetfunction("Aman");




