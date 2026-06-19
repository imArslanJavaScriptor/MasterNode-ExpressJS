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
// let firstName = "HM"
// let lastName = ""
// setTimeout(() => {
//     lastName  = "Arslan"
// }, 2000);

// console.log(`${firstName} ${lastName}`)


// Handle with Promises
let firstName = "HM"
let lastName = ""
const setLastName = new Promise((resolve, reject) => {
    setTimeout(() => {
        // lastName = "Arslan"
        resolve(lastName = "Arslan")  
    }, 2000);
})

// setLastName.then((val) => {
//     console.log(`${firstName} ${lastName}`)
//     console.log(val)
// })


// async / await
// setLastName.then((val) => {
//     console.log(`${firstName} ${lastName}`)
//     console.log(val)
// })

const displayFullName = async () => {
    lastName = await setLastName;
    console.log(`${firstName} ${lastName}`)
}

displayFullName()