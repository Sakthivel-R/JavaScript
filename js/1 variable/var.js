// 3 key words is uesd to declare variables
// console is used to print the value
console.log("testing")


//                     var keyword 

//it can be updated and also re declare

// var keyword is used in global and function  not in block level
// in js if we use var keyword the value is stored in windows objct

var nam="global level"
nam="global level 1"
// console.log(nam)
console.log(window.nam)

var nam = "hi"
console.log(nam)


/************        function creation  **********/

function abc(){
    var demo = 100
    console.log(demo)
}
abc()

//console.log(demo)

//   block level   is open and end with {}  
if(2==2){
    var x =10
}
console.log(x)
// we declare x in block but allow to print outside so it not support block level