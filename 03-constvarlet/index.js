console.log("JavaScript tutorial 3: var, let and const")

let b = "Akash";
const author = "Kumar"
// author = 5 // Throws an error because constant cannot be changed

b = 4
const harry = 0;

let c = null
let d  = undefined  

//blocked scope
{
  let b = 'this'
  console.log(b)
}
console.log(b)

//var can be updated & re-declared within scope
//let can be updated but not re-declared 