//           every()

// return true or false if every element in the array satisfy the condition

// syntax    

// arrayname.every(function(currentItem){

// })
let arr=[2,3,4,5,6,7]

let newArray = arr.every(function(currentItem ){
       console.log(currentItem)
       return currentItem > 1
})

console.log(newArray)