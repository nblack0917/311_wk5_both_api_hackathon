const express = require('express')
const employeeJoinDepartments = require('../controllers/employee-join-departments')
const router = express.Router()



router.get('/hi', employeeJoinDepartments.joinWithDepartments)



module.exports = router