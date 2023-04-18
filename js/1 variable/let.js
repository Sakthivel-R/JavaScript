//         let keyword
//  it can be update but not re declare
//   it support function and block level not global
let nam="demoo"
nam =" demo for let "
console.log(nam)

// let nam="hi"  we can not re declare the same name in let
console.log(window.nam)
//it show undefined because it not global level

function demo(){
    let demoo="function level"
    console.log(demoo)
}
demo()

//console.log(demoo)

if (2==2){
    let demo1 ="block level"
    console.log(demo1)
}

console.log(demo1)