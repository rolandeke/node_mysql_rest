const router = require('express').Router()
const Employees = require('../models/Employees')



//GET: ALL EMPLOYEES
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

//GET: ONE EMPLOYEE
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

router.delete('/:id', (req, res) => {

    const {
        id
    } = req.params
    const empIndex = Employees.findIndex(emp => emp.id == parseInt(id))
    if (empIndex < 0) {
        console.log("Invalid Id")
    } else {
        const deletedEmp = Employees.splice(empIndex, 1)
        console.log(deletedEmp)
        res.json(Employees)
    }



})

module.exports = router