//                 some()

//return true if atleast one element in the array satisfy the condition

// syntax    

// arrayname.some(function(currentItem){

// })
let arr=[2,3,4,5,6,7]

let newArray = arr.some(function(currentItem ){
    
    return currentItem > 5
})

console.log(newArray)
