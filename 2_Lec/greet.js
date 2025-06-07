function greet() {
    return("Hello Arslan MERNStack Developer 🕵️‍♀️")
}

function sub (a, b) {
    const res = a > b ? a - b : b - a
    return res
}

// module.exports  -> It always return empty object

module.exports = {
    greet,
    sub
}