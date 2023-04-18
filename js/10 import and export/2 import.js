
/*******************     import    *************/
// import keyword to import variables or method from a given file path or miodule

// multiple import
// import {name,getname} from'/filepath'

// imports all exported members
// import * as utils from '/filepath'

// imports a modle with a default member
// import user from './filepath'

/******* normal import *****/

// import minus , {pi,add} from './1 export.js'

// console.log(pi)
// add(1,2)
// minus(5,3)

/************  import all  *************/
// default not import by this method
import * as sakthi from './1 export.js'
console.log(sakthi.pi)
sakthi.add(1,2)