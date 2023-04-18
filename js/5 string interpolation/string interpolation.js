//               string interpolation
// it allows you to embed expressions in the string
// template string use back_tricks(``) rather than single & double quotes
// it used in dynamic sutivation

var name ="sakthi"
var name1="vel"

console.log(name + name1)


var str= " my first name is "+ name +" and last name is " + name1 

console.log(str) 

var a=2
var b=3
var str1= " the sum of " + a + " and "+ b + " is " +a + b
console.log(str1)
console.log(a+b)

// it is confused in adding instend of 

var a = 20
var b = 30
console.log(`the sum of ${a} and ${b} is ${a+b}`)

console.log(`my name is ${name + name1}`)

var id =123
console.log(`https://salesforce.com/${id}`)

