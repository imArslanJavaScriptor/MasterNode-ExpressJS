const express = require("express")
const reqFilter = require("./middleware")

const app = express()

const router = express.Router()
router.use(reqFilter)

app.get("/", (req, res) => res.send("Home Page"))
app.get("/about", (req, res) => res.send("About Page"))

// Router Level Middleware
// This is how it works instead of app start with router

router.get("/access", (req, res) => res.send("Access Page"))
router.get("/importent", (req, res) => res.send("Impotent Page"))
router.get("/careers", (req, res) => res.send("Careers Page"))

// At the end mount the router on the app
app.use("/", router)

app.listen(3000, () => console.log("App is listening on PORT:3000"))