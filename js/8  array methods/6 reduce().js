//                     reduce()

//this method reduces the array to a single value(left to right)

// syntax    

// arrayname.reduce(function(total, currentItem, index, actualArray){

// }, intialvalue)

let arr=[12, 78 , 11, 30]

let newArray = arr.reduce(function(total, currentItem ){
    
    return total+currentItem
},0)

console.log(newArray)