///////1)Promises using variable////////

// var promise=new Promise((resolve,reject)=>{

//     isDone=false;
//     if(isDone){
//         resolve('i cleaned the room')
//     }else{
//         reject('i dint cleaned the room')
//     }
// })

// promise.then(function(result){
//    console.log(result)
// }).catch(function(result){
// console.log(result)
// });


///////////2) promises using functions//////


// function add(){
//     return new Promise((resolve,reject)=>{
//         resolve('cleaned the room')
//     })
// }

// function add1(message){
//     return new Promise((resolve,reject)=>{
//         resolve(message+" "+'removed the garbage')
//     })
// }
// function add2(message){
//     return new Promise((resolve,reject)=>{
//         resolve(message+" "+'and won the icecream.')
//     })
// }

// add().then(function(result){
//       return add1(result)
// }).then((result)=>{
//       return add2(result);
// }).then(function(result){
//     console.log("finally,"+" " +result)
// }).catch((error)=>{
//   console.log(error)
// }
// )

