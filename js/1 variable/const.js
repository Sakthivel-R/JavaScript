//            const keyword 
//it can not be updated and can't be re declared
// it support function and block not global level

const nam ="global"
console.log(nam)
//nam="global level"
//const nam = "hi"
console.log(window.nam )

function abc(){
    const demo="function level"
    console.log(demo)
}
abc()
const demo="summa"
console.log(demo)


if(2==2){
    const demo ="block level"
    console.log(demo)
}

console.log(demo)