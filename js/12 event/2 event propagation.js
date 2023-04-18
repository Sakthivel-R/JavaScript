
// it explains the order in ewhich events are received on the page
//- from the elements where the events occurs and propagated through the 
// -DOM tree

// two event models 
//                  1. event bubbling(bottom to top ) use currently and lwc


// below code is html code

// <form onclick="alert('i am form')">
// i am form
// <div onclick="alert('i am div')"> 
//     i am div
//     <p onclick="alert('i am p')"> 
//         i am p
//     </p>
// </div>
// </form>












//                  2.event capturing   we not tack