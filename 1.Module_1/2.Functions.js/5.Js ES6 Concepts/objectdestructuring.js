// // Object Destructuring:

// // const person = {
// //     name : "Aman",
// //     age : 21,
// //     City : "Surat",
// //     InActive : true
// // }

// // // const {name,age} = person;

// // // console.log(name , age);
// // // console.log(person.name , person.City); // output is same but here , you are passing complete object inside , that is unnecessary , better pass drctly or whenever non unique object variables exists


// // // renaming elements
// // const {name: naam ,City , ...others} = person;
// // console.log(naam , City);

// // //use of spread operators for rest left elements:
// // console.log(others);


// // object destructuring for Arrays:

// const x = [1,2,3,4,5]

// const [a,b,...c] = x;

// console.log(a,b,c);

// // for array destructuring we use :[], for objects : {}, 
