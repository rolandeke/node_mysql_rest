const express = require('express')
const employeeRoute = require('../src/routes/employees')
const app = express()



//Routes
app.use('/employees', employeeRoute)









const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
    if (err) throw err;

    console.log(`Server Running on Port: ${PORT}`)
})