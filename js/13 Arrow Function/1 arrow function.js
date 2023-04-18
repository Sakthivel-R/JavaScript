
// it allow us to write shorter function syntax
// ex.
//     function getname(){       getName = () =>{          getname=()=>"nikhil"
//       return"nikhil"     --->   return"nikhil"    --->    
//     }                             }
//      normal function       arrow function with return    arrow function without return

// arrow syntax automatically binds this to the surrounding code's contex




// function abc(){
//     console.log("normal function")
// }

// abc()

const abc = () => console.log("normal function.")
abc()


// {} use this we we use more wrien more than one operation

const sum = data /* ()our choise use for one parameter */=>{
    let sum=data+10
    return sum
}

console.log(sum(10))



// const sum2 = (a,b)=>{
//     let sum=a+b
//     return sum
// }

// console.log(sum2(10,20))



const sum2=(a,b)=> a+b
console.log(sum2(2,3))

var arr=[1,2,3,4]
let newarr= arr.map((item) => item*2)
console.log(newarr)

//  problem solved by arrow function

// let obj ={
//     name:"sakthivel",
//     getname:function(){
//         console.log(this.name)
//     }
// }

// obj.getname()

// we use another function inside the method
// it show error for name not assessed in fullname , fullname function 
// - is confused to read where is name


// let obj ={
//     name:"sakthivel",
//     getname:function(){
//         console.log(this.name)
//         function fullname(){
//             console.log("my full name is:"+ this.name)
//         }
//         fullname()
//     }
// }

// obj.getname()



// in this place we use arror fun

let obj ={
        name:"sakthivel",
        getname:function(){
            console.log(this.name)
            let fullname =()=>console.log("my full name is:"+ this.name)
            
            fullname()
        }
    }
    
    obj.getname()
















