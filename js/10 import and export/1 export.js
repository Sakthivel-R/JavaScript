

/*******************   export   ***************/

// export keyword is used to export variabes or many
// -method from file

//   export cont name ="sakthivel"

// export default keyword is used to export only one variable or a -
// - method from a file

// export  default user = "sakthivel"

/******************     normal export     ****************/

//  export const pi = 3.14

// export function add(a,b){
//     console.log(a+b)
// }


/*****************   export together    ***********/ 
// const pi = 3.14

// function add(a,b){
//     console.log(a+b)
// }

// export {pi , add}

/******************  export with alias   ***********/

const pi_data = 3.14

function add(a,b){
    console.log(a+b)
}

export {pi_data as pi , add}

/**************  export with default   **********/

export default function minus(a,b){
    console.log(a-b)
}