
/*********************         Promise        ********************/

// it is an object that may produce a single value sometime in the future
// it is used to handle asynchronous operations in js
// fetch data from server is asynchronous


// A promise has three states 
//      1. pending()
//      2. fulfilled()      resolve()
//      3. rejected()       reject()

// function checkIsSuccess(data){
//     return new Promise(function(resolve, reject){
//         if(data ==="success"){
//             return resolve("successfull")
//         } else {
//             return reject("unsuccessfull")
//         }
//     })
// }

// // console.log(checkIsSuccess("succ"))

// checkIsSuccess('success').then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.error(error)
// })

fetch('use server link just github link ').then(function(result){
    return result.json()
}).then(function(response){
    console.log(respo)
})