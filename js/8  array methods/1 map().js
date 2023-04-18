//               map()

// loop over the array and returnss new array based on the value return

// syntax    

// arrayname.map(function(currentItem, index, actualArray){

// })
let arr=[2,3,4,5,6,7]

let newArray = arr.map(function(currentItem , index , array){
    console.log(`currentitem : ${currentItem}  index : ${index}  array : ${array}`)
    return currentItem*2
})

console.log(newArray)
