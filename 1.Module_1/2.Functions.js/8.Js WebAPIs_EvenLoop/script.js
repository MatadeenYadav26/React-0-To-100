// //setTimeout() :-



// console.log("Code Starting!"); // callStack

// const id1 = setTimeout(()=>{
//     console.log("Inside Code!1");
// },0) // even if setTimeout is set at 0ms , then too it will run after free codes!

// const id2 = setTimeout(()=>{
//     console.log("Inside Code!2");
// },3000)                          //Web API --> CallBack Queue  --> callStack

// clearTimeout(id2);  //Web API --> CallBack Queue  --> callStack

// console.log("Code Ended!"); // call stack





//SetInterval() :-


// let i = 0;

// function showTime(){
//     const time = new Date();
//     console.log(time.toISOString());
//     i++;
//     if(i==5) clearInterval(id)
// }

// const id = setInterval(showTime,1000);




//EventLoop:-
//Since JS is Single Threaded, But can handle asynchronous operations such as : timers , network requests , user interactons : using the Event Loop.

//EventLoop is responsible for managing and executing JS asynchronous operations, it ensures tasks are executed without in correct order without blocking the main thread.

// Working : CallbackQueue  --> Call stack (things from call stack can be only executed!) -->WebApis

// call stack is our main js code execution stuff
// callback queue are asynchronous stuff that comes from web APIs , but problem is ,it has to wait untill all tasks gets finished and call stack gets empty for callback Queue to run.





