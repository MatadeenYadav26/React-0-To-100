// exporting function:

// exporting one by one:
// export function greet(){
//     console.log("Hello from export!");
// }

// export const PI = (22/7);

//exporting all at once:

function greet(){
    console.log("Hello from export!");
}

const PI = (22/7);

// export{greet,PI};



//rename : export and import:-
// export{greet as swagat,
//        PI as py,
//     };


// default export : only 1 per file :-

// export default function  add(a,b){
//         return a+b;
// }


// export default in bundle:

function  add(a,b){
        return a+b;
}


export default{
    PI,
    add,
    greet,
}

