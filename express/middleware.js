const reqFilter = (req, res, next) => {
    const salary = req.query.salary
    if(!salary) {
        res.send("Salary Not Provided")
    } else if(salary < 50000) {
        res.send("Your Salary is below 50K ")
    } else {
        next()
    }
}

module.exports = reqFilter