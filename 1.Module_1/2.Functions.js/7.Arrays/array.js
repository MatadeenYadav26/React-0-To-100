// // Array in JS are Heterogenios in nature : in array they can store multiple types of data types together. but in Java and Cpp it's Homogeneous.

// const arr = ['string','c',69,true,345,{ name:"Aman"},()=>"Hello"]  // Heterogeneous Nature

// console.log(arr)
// console.log(arr[6]())

// //for off loop:
// for (let value of arr) {
//     console.log(value); // prints all one by one 
// }

// // array creation using new keyword:

// const arr2 = new Array("eat","c",12,true)

// console.log(arr2)

// // for length of arr:
// console.log(arr.length) 

// // common array methods : push(),pop(),foreach(),sort(),includes(),indexof(),splice().

// arr.push("Pushed");
// console.log(arr);
// arr.pop();
// console.log(arr);

//foreach():-
// arr.forEach((value,index,array) => {
    //     console.log(value,index,array);
    // })
    
// const a=[53,67,2,3,1,5,98];
//     a.sort()
//     console.log(a);


// a.includes()  : it checks if an elen=ment is present or not.
// console.log(a.includes(3)) 
// console.log(a.indexOf(3))
// console.log(a.includes(33)) 

// splice() : removes arr element from index a to b index number
// a.splice(0,3);
// console.log(a);
// 3rd prameter add elems in place of removed ones
// a.splice(0,3,99,"Kumar","asdf","ASDFDCCD","69");
// console.log(a);

//2.ADVANCE ARRAY METHODS:

// 1.filter method:

// const a =[4,1,2,6,8,5];

// const b = a.filter((value,index)=> value%2 != 0) // odd numbers

// console.log(b);
// console.log(a);

// const c = a.filter((value,index)=> value%2 == 0) // even numbers

// console.log(c);
// console.log(a);


//2.map method:

// const b = a.map((value,index) => 2*value)

// console.log("b",b);
// console.log("a",a);


//3.Chainig : pehle fiter kiya fir map bhi kardiya:-

// const a =[4,1,2,6,8,5];

// // const b = a.filter((value) => value%2 != 0).map((value,index) => 2*value);

// const b = a.map((value) =>{ //array to object form output:-
//     return{
//         "name":"Aman"+value,
//         "age": value
//     }
// })

// console.log("b",b);
// console.log("a",a);



// 4. Find method:- can be used to find something from an array.

// const a =[4,1,2,6,8,5];
// const b = a.map((value) =>{ //array to object form output:-
//     return{
//         "name":"Aman"+value,
//         "age": value
//     }
// })

// // const c = b.find((value)=> value.name ==="Aman6") 
// const c = b.find((value)=> value.age <= 4)  // only gives the first value not the range , as <=4 so it will give only 4.
// // for getting output of as a range use filter() not find() , its only for a specific value.


// console.log(c);
// console.log("b",b);
// console.log("a",a);

//  5. Reduce() method:
// const a =[4,1,2,6,8,5];

// to get sum of the array:
// const res = a.reduce((prev,cur,idx) => cur+prev, 0)

// console.log("Sum of Array:",res);

// console.log("a",a);

// 2D array to flat array:

const a = [[1,2,3],[4,5,6],[7,8,9]];

const b = a.reduce((prev,cur)=> prev.concat(...cur),[])

console.log(b)
console.log(a)

