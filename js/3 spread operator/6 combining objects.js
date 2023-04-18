// 4 combining objects


let obj1={ name : 'salesforce' , age:3}
let obj2={ name : 'sakthi' , age:23}
let obj3={...obj1 , ...obj2}
console.log(obj3)

let obj5={ name : 'salesforce' , age:3 , date: '29/10/2000'}
let obj6={ name : 'sakthi' , age:23 , 'summa':"hello"}
let obj7={...obj5 , ...obj6}
//right obj 6 is override the same name in obj 5
console.log(obj7)
