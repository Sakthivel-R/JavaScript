
let timerId=window.setTimeout(function(){
    console.log("setTimeout")
}, 2000)

// 2000 milysecond it is 2 sec delay
// it means the output is display after 2sec and the id is store into timerId
// when timerId is print it print '1' then after 2sec print 'settimeout'
console.log(timerId)

// if you clear delay 
clearTimeout(timerId)






