//               sort()

//sort the elements of an array



let arr=['sakthhivel' , 'vijay' , 'dinesh']


console.log(arr.sort())

// sorting of numbers

// a=33 b=21  a-b   retur value is -(negative)  positionswap   psitive or 0 nothing happen


var num=[21,33,10,8,44]

let sortednum=num.sort(function(a,b){
    console.log(`a  ${a}   b : ${b}`)

    // assending
    // return a-b
    
    // decending
    return b-a
})

console.log(sortednum)