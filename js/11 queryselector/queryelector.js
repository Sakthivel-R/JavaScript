


/**************************    querySelector     *******************/

//the queryselector() method returns the first element that
// -matches a specified CSSselector(s) in the document

// document.querySelector(selector);
 let element = document.querySelector('dev')
 console.log(element.innerText)
 element.style.color="orange"
/********************    querySelectorAll    *******************/

//the querySelectorAll() method returns all elements in th document 
// -that matches a specified CSS selector(s),as a staticNodeList object.

// document.querySelectorAll(selector);

// it return staticnodelist so we convert it to array
let elementAll = document.querySelectorAll('dev')
console.log(elementAll)
Array.from(elementAll).forEach(function(item){
    item.style.color="pink"
})



// in lwc we use this.template.queryselector('dev)  instend
//- of document.queryselector('dev)








