// 5 shallow copy
var arr10 = ['a','b','c']
arr10.push("sakthi")
console.log(arr10)

var arr11 = arr10
arr11.push(33)
console.log(arr10)
console.log(arr11)  

// it is disadvange of push,pull,etc.. operator
// arr10 value is copy to arr11 
// we add value to arr11 or arr10
// it also reflect to arr10 or arr11


// avoid by using spread operator
// in above we use reference but in spread it use shallow copy

var arr12=['a','b','c']
var arr13=[...arr12]
arr13.push("sakthivel")

console.log(arr12)
console.log(arr13)