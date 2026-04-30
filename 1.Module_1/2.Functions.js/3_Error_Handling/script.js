// Error Handling : 

// 1):Syntax Error :-
// const a = (5+3
// const a = (5+3;
// const a = 4+5; no Error.

// 2):Refrence Error :-
// const a = 5+6;
// console.log(b); // error


// 3): Type Error :-
// let a = "Hello";
// let b = a*2;
// console.log(b);


// throw new Error('Something went Wrong! did you understand')

// try and catch:- 
// try{
//     console.log(age);
// }
// catch (exeption){
//     console.log("Aman is Logging",exeption);
    
// }

// Try Catch and Finally:

try{
    console.log(2);
}
catch (exeption){
    console.log("Aman is Logging",exeption);
}
finally{
    console.log("Alwyas excecuted");
    
}