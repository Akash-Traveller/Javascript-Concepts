let a = prompt("Hey whats you Hobby?");

a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid hobby");
}
else if(a<8){
  alert("You are a kid");
}
else if(a<16 && a>=8){
  alert("your a kid & you dont have access for anything");
}
else{
  alert("You can now join");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<16? "not applicable" :"applicable"))