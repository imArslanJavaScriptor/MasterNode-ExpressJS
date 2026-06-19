// Synchronous Example
// console.log("A");
// console.log("B");
// console.log("C");

// Asynchronous Example
// console.log("a");
// setTimeout(() => {
//   console.log("b");
// }, 2000);
// console.log("c");


// Exmaple of Asnychrnous Disadvantageous
let firstName = "HM"
let lastName = ""
setTimeout(() => {
    lastName  = "Arslan"
}, 2000);

console.log(`${firstName} ${lastName}`)