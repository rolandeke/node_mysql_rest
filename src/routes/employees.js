const router = require('express').Router()
const Employees = require('../models/Employees')



router.get('/', (req, res) => {

    const emp = Employees

    if (!emp) return res.json({
        err: "No Recoreds Found",
        data: emp
    })

    res.json({
        err: "",
        data: emp
    })
})

router.get('/:id', (req, res) => {
    const emp = Employees.find(emp => emp.id == parseInt(req.params.id))
    if (!emp) {
        res.status(404).json({
            err: "Employee Not Found",
            data: emp
        })
    } else {
        res.json({
            err: "",
            data: emp
        })
    }
})



module.exports = router