//            filter()

// return new array with all the elements thet satisfy the condition

// syntax    

// arrayname.filter(function(currentItem, index, actualArray){

// })
let arr=[2,3,4,5,6,7]

let newArray = arr.filter(function(currentItem , index , array){
    console.log(`currentitem : ${currentItem}  index : ${index}  array : ${array}`)
    return currentItem > 5
})

console.log(newArray)