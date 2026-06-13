export const isAuthenticated = (req, res, next) => {
    console.log("isAuthenticated Middleware is Called")
    next()
}
