const router = require('express').Router()



router.get('/', (req, res) => {
    res.send("<h1>All Employees</h1>")
})


module.exports = router