//1. For Loop : initialization  , conditional , updqtion

// for(let i = 0 ; i<=5 ;i++){
//     if(i==2) continue;
//     console.log(i,i*2,i*3);

//     // if(i==2) break;
// }



//2. While Loop:-

// let i = 0 ; //initialization
// while(i<11){ // condition
//     console.log(i);
//     i++; //updation
// }



//3. Do While Loop:- to run your loop atleast once. bfore cheacking anycodition.

// let i = 0; // initialization
// do{
    // console.log(i);
    // i++; //updation
// }while(i<5); //condition : as codition checking is at last so , atleast 1 time the loop will run.


//4. break and continue;

//  -break: used to terminate loop imidiately when it is encountred.
//  -continue: used to skip current itteration of loop and control flow the program goes to next itteration.


//5. ForIn Loop: it is used to ittirate over the properties of an object: Inside an Object

// const person ={
//     name:"Aman",
//     age: 21,
//     company:"Yadav Industries"
// }

// for( let property in person ){

//     console.log(property,person[property])
// }


//6. For..of Loop : allows us to ittirate over characters in string or values in array:inside an Array

const a = [1,3,5,7,8];

for(let val of a) {
    console.log(val);
}

const b = "Apple";

for (let character of b){
    console.log(character);
    
}