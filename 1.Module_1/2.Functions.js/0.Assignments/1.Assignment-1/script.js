//QUESTION:01: Calculator Problem with js:-

// let num1 = Number(prompt("Input Num 1: "));
// let num2 = Number(prompt("Input Num 2: "));
// let operator = (prompt("Operator: "));


// if(operator === "+"){
//     console.log(num1+num2)
// }
// else if(operator === "-"){
//     console.log(num1-num2);}
// else if(operator === "*"){
//     console.log(num1*num2);}
// else if(operator === "/"){
//     console.log(num1/num2);}
// else if(operator === "%"){
//     console.log(num1%num2);}
// else{
//     console.log("Invalid Operator!")
// }

// Perfect code:
// let num1 = Number(prompt("Enter First Number:"));
// let num2 = Number(prompt("Enter Second Number:"));
// let operator = prompt("Enter Operator (+, -, *, /, %):");

// let result;

// if (operator === "+") {
//     result = num1 + num2;
// }
// else if (operator === "-") {
//     result = num1 - num2;
// }
// else if (operator === "*") {
//     result = num1 * num2;
// }
// else if (operator === "/") {
//     result = num1 / num2;
// }
// else if (operator === "%") {
//     result = num1 % num2;
// }
// else {
//     console.log("Invalid Operator!");
// }

// if (result !== undefined) {
//     console.log(`Result: ${result}`);
// }



//Assignment 2: Average Marks Generator
// Take marks of students and calculate the average.


// let marks1 = Number(prompt("Input marks of subject-1: "));
// let marks2 = Number(prompt("Input marks of subject-2: "));
// let marks3 = Number(prompt("Input marks of subject-3: "));
// let total = (marks1+marks2+marks3);
// let avg = (total/3);

// console.log(`Your averge marks is : ${avg}.`)


// Perfect output:

// let num1 = Number(prompt("Enter First Number:"));
// let num2 = Number(prompt("Enter Second Number:"));
// let operator = prompt("Enter Operator (+, -, *, /, %):");

// let result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         break;

//     case "-":
//         result = num1 - num2;
//         break;

//     case "*":
//         result = num1 * num2;
//         break;

//     case "/":
//         result = num1 / num2;
//         break;

//     case "%":
//         result = num1 % num2;
//         break;

//     default:
//         console.log("Invalid Operator!");
// }

// if (result !== undefined) {
//     console.log(`Result: ${result}`);
// }

// BMI Program:

// let weight = Number(prompt("Tell weight in Kg: "));
// let height = Number(prompt("Tell height in m: "));
// let BMI = (weight/height**2);

// console.log(`Your BMI is: ${BMI}`);


//Perfect Code:

// let weight = Number(prompt("Enter weight in kg:"));
// let height = Number(prompt("Enter height in meters:"));

// if (weight <= 0 || height <= 0) {
//     console.log("Invalid input!");
// }
// else {
//     let bmi = weight / (height ** 2);
//     console.log(`Your BMI is: ${bmi.toFixed(2)}`); // toFixed(length after decimals) decides decimal lentgh   
// }



// Switch case: Grades to Remarks:-

let grade = prompt("Input Your Grade: ").toUpperCase(); // for both caeses to work

switch(grade){
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Very Good");
        break;

    case "C":
        console.log("Good");
        break;

    case "D":
        console.log("Average");
        break;
    
    case "E":
        console.log("Poor");
        break;

    case "F":
        console.log("Fail!");
        break;

    default:
        console.log("Vo Alag hi Level ka Banda Tha!")
}
