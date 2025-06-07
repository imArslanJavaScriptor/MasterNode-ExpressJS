function greet() {
    console.log("Greet")
}
// greet()

// functions are first class
function logFunction(fn) {
    fn()
} 
logFunction(greet)

// function expression
// const fn = function() {
//     console.log("Function Expression")
// }
// fn()

// kisi bhi first class function ke andr directly 1
// function pass kr na called function expression on the fly
logFunction(function() {
    console.log("Function Expression")
})
