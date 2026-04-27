// // function greet(name){
// //     console.log(name ,"Hello Aman");

// //     return name+" Hello";
// // }

// // const res = greet("Aman");
// // console.log(res);

// // greet(123);
// // greet("amana");


// // function multiply(a,b){
// //     console.log("Multiplying " + a + " and " + b);
// //     return a*b; 
// // }

// // const mu = multiply(5,2);
// // const mus = multiply(5,7);
// // console.log(mu);
// // console.log(mus);

// // arrow function Greet:
// // const divi = (a,b) => res = a/b;
// // let amn = divi(10,2);
// // console.log(amn);



// // Arrow Function:

// const multiply = (a,b) => {
//     console.log("Multiply", a , " and ", b);
//     return a*b;
// };

// const ret = multiply(4,5);
// console.log(ret);
// multiply(5,6);


// // Default Parameter :
// const greetfunction = (name = "Guest") => console.log("hi" ,name);
// greetfunction("Aman");


// Create a Calculator:
// HigherOreder Functions : A function that takes other functions as a parameter or arguments in JS.

// const Calculate = (a , b , operation) => {
//     return operation(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// // function multiply(a,b){
// //     return a*b;
// // } or use arrow function
// const mulRes = Calculate(4,6,(a,b)=>a*b);





// const res = Calculate(4,5,add)
// // const mulRes = Calculate(4,5,multiply)

// console.log(res);
// console.log(mulRes);

// curring:
// const multiple = (a) => {
//     return(b) => a*b;
// }


// const double = multiple(2); // created a function that doubles anything.
// const res =  double(5);

// console.log(res);

// const triple = multiple(3);// created s function that triples anything.
// const resu = triple(5);

// console.log(resu);


// console.log(double(10));
// console.log(triple(15));



console.log(this);

function greet() {
    console.log(this);
}

greet();


// object :

const obj = {
    age: 34;
    Walk(){
        console.log(this);
        g
    }
}


obj.walk
