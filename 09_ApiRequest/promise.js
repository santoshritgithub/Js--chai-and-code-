//Way one 

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB call, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promises comsumed");
// })

//***** Note: .then belongs for resolve and .catch belongs for reject *****

//Way two

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async task 2 completed");
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log("Task 2 completed");
// })


//Way three
//(i)
// new Promise(function(resolve,reject){
//     resolve({
//         user:"Sunny Paji",
//         email:"sunny@gmai.com"
//     })
// }).then((user)=>{
//     console.log(user)
// })

//(ii)
// new Promise(function(resolve,reject){
//     resolve({
//      username:"Santosh",
//      email:"2822063.csepietgroup@gmail.com"
//     })
//  }).then(function(user){
//      console.log(user);
//  })

////Way four
// const promiseFour = new Promise((resolve, reject)=>{
//     let error = true;
//     if(!error){
//         resolve({username:"Ashwin", Password:"1234"})
//     }else{
//         reject('ERROR: Username and password not Match')
//     }
// })
//  promiseFour.then((user)=>{
//   console.log(user);
//   return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolve or rejected"))


////Way five
// const promisefive = new Promise((resolve, reject)=>{
//     let error = false;
//     if(!error){
//         resolve({
//             username:"Javascript",
//              Password:"js123"
//         })
//     }else{
//         reject("ERROR: javascript fail to execute")
//     }
// })
// async function promisefiveId(){
//     try {
//         const identify = await promisefive
//         console.log(identify)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// promisefiveId().finally(()=>{
//     console.log("Js promise is executed")
// });

//Displaying of data of any API using fetch with try and catch
// async function Allusers(){
//     try {
//         const display = await fetch('https://api.github.com/users/santoshritgithub')
//         // console.log(display);
//         const data = await display.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }
// Allusers();

//Displaying same thing using .then & .catch
fetch('https://api.github.com/users/santoshritgithub')
.then((response)=>{
   return response.json();
})
.then((data)=>{
   console.log(data)
})
.catch((error)=>{
    console.log("E: ",error)
})