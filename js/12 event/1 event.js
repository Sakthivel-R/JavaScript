
// addEventListener(action , what happen) = register an event handler
// removeEventListener() =remove an event handler



// function firstFunction(){
//     console.log("welcome")
// }

// let btn = document.querySelector("button")
// btn.addEventListener("click" , firstFunction)



document.addEventListener("mousemove" , handler)

function handler(){
    document.querySelector(".demo").innerHTML = Math.random()
    document.querySelector("#hi").innerHTML = " chnged to sp"
}

function removeevent(){
    document.removeEventListener("mousemove" , handler)
}

