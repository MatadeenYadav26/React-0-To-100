// console.log("Calling the API");

// const response = fetch("https://dummyjson.com/users");

// response.then((data)=>{
//     console.log("Got the data",data);

//     const result = data.json();
//     result.then((res)=>{
//         console.log("Got the users",res);

//         const users = res.users;

//         for(let user of users){
//             console.log(user.id,user.firstName);
            
//         }
        
//     })  
// })
// .catch((error) =>{
//     console.log("Did not got the error!",error);
    
// })

// console.log("Got the response ",response);


// Creating promise : we use Promise() constructor

// const promise = new Promise((resolve,reject)=>{

//     const allGood = false;
//     setTimeout(()=>{
//         console.log("Hello");
//         resolve("secret data")
//     },5000)    
// })

// promise.then(data => {
//     console.log("Got the data,", data);
// })


// setTimeout(()=>{
//     console.log("Hello");
//     if(allGood) {
//         resolve("Secret Data!");
//     } else{
//         reject("All was not Good")
//     }

// },5000);  
// })

// promise.then((data)=>{
//     console.log("Got that Data!",data);    
// }).catch(err => {
//     console.log("Got the error,",err);
    
// }) // if u dont add catch js gonna throw exception as uncaught, always try to catch your errors if u got any

// })

// // Promises Chaining


// const res = fetch("https://dummyjson.com/users").then(data =>{
//     console.log("Got the data",data);

//     return data.json();
    
// }).then(data =>{
//     console.log("Got the json data",data);
// }).catch(err=>{
//     console.log("Got the error",err);
// }).finally((data) =>{
//     console.log("Finally will be always executed");
// });



// initiate the booking
// add the guest
// process the payment

function initBooking(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Booking Initiated");
            resolve({
                bookingId:"asdfgh",
                name
            })
        },2000)
    })
};

function addTheGuests(booking, guest) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Added the Guests");
            booking["guest"] = guest;
            // resolve(booking);
            reject("Guests are not Valid!",guest)
        },2000)
    })
};

function processPayments(booking, payment) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Payment Processed");
            booking["payment"] = payment;
            resolve(booking);
        },2000)
    })
};


// initBooking("Aman").then(booking=>{
//     console.log("Got the booking",booking);
//     return addTheGuests(booking,["Aman","Anuj","Abhay"]);
// }).then(booking => {
//     console.log("Got the booking",booking)
//     return processPayments(booking, {
//         paymentId : "sdsdsdsd",
//         amount : 3299
//     })   
// }).then(booking =>{
//     console.log("Got the booking",booking);
// }).catch(err =>{
//     console.log("Got the error: ",err);
    
// })



// Async-Await:-

async function bookingFlow() {
    try{
    let booking = await initBooking("Aman");
    booking = await addTheGuests(booking,["Aman","Atul"]),
    booking = await processPayments(booking,{
        paymentsId : "asasasas",
        amount : 32889,
    });
    console.log(booking);
} catch (error){
    console.log("Got the error: ",error);
}


    }

bookingFlow();
