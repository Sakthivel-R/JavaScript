






// 6 nested copy
var arrobj = [
    {name : "sakthivel"},
    {name : "salesforce"}
]

var arrobj1=[...arrobj]
console.log(arrobj1)
arrobj1[0].name = "luffy"
console.log(arrobj1)
console.log(arrobj)

//because it is two level data structure
// shallow copy only work in one level data structure


// hack for nested copy
var arr_obj = [
    {name : "sakthivel"},
    {name : "salesforce"}
]

var arr_obj1=JSON.parse(JSON.stringify(arr_obj))

arr_obj1[0].name = "luffy"
console.log(arr_obj1)
console.log(arr_obj)
