
//                destructuring        
// it is uesd to  unpack the array and object


/***************************  object destructuring ********************/

let obj={ 
    nam : "sakthivel",
    age : 3,
    type : "object"
}

// var nam=obj.nam
// var age=obj.age


let {nam , age, type} = obj
console.log(nam)
console.log(age)
console.log(type)