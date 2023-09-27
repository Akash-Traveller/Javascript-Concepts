// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)

/*
let obj = {
  raj: 90,
  dev: 45,
  uat: 56,
  loc: 57
}

// For in loop
// for (let a in obj) {
//   console.log("Marks of " + a + " are " + obj[a])
// }

// For of loop
for (let b of "aaa") {
  console.log(b)
}
*/

//forloop
// for(i=0;i<5;i++) {
//     console.log(i);
// }

// For in loop
// let test = {
//     raj: 10,
//     dev: 56
// }

// for (let b in test) {
//     console.log('test' + b + 'raj' + test[b]);
// }