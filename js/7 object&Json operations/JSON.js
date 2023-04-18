// JSON java script object notation 

let obj = {
    nam : "sakthivel",
    age : 33,
    dob : '29/10/2000'
}

/*********************    1 JSON.stringify    ******************/

let str= JSON.stringify(obj)
console.log(str)

/*********************     2 JSON.parse       ******************/

console.log(JSON.parse(str))