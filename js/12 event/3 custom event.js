
// in custom event we can create out own custom event using 
// -CustomEvent constructor
// syntax
// new CustomEvent("eventname" , {option}) 

document.addEventListener("hello" , function(data){
    console.log("hello has called and send"  , data.detail)
})

function callCustomMethod(){
    let event = new CustomEvent("hello" , {
        detail:{name:"saKTHIVEL"}
    })
    document.dispatchEvent(event)
}