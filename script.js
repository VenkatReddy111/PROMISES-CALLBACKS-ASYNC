///////////////call back functions//////////
//let posts = [{ id: 1, name: "venkat", age: 25 }, { id: 2, name: "surya", age: 26 }, { id: 1, name: "raju", age: 27 }]

// function show(){
//     setTimeout(() => {
//         var array='';
//         posts.forEach((post)=>{
//            array+= `<li>${post.name}</li>`
//         })
//         document.body.innerHTML=array;
//     },1000 );

// }

// function add(onemore,showhere){
//     setTimeout(() => {
//         posts.push(onemore);
//         showhere();
//     }, 4000);

// }

// add({id:4,name:"jaydev",age:60},show);




//////////////////2)Promises//////////////

//let posts = [{ id: 1, name: "venkat", age: 25 }, { id: 2, name: "surya", age: 26 }, { id: 1, name: "raju", age: 27 }]

// function show() {
//     setTimeout(() => {
//         var array = '';
//         posts.forEach((post) => {
//             array += `<li>${post.name}</li>`
//         })
//         document.body.innerHTML = array;
//     }, 1000);

// }


// function add(onemore) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(onemore);
//             isDone = true;
//             if (isDone) {
//                 resolve();
//             } else {
//                 reject('this has been rejected');
//             }
//         }, 4000);

//     }
//     )
// }
// add({id:4,name:"jaydev",age:60},show).then(show).catch((error)=>{
//     console.log(error)
// });



///////////Promise.all() method//////////////

///it is used when we have all resolves

// const promise1=Promise.resolve("hello world");
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        resolve('goodbye')
//     },2000)
// });
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
//     return res.json();
// })

// Promise.all([promise1,promise2,promise3,promise4]).then(values=>{
//     console.log(values);
// })



////////3)Async,await,fetch////////////

async function add() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
add();


