const express = require('express')
const employeeJoinDepartments = require('../controllers/employee-join-departments')
const router = express.Router()



router.get('/', employeeJoinDepartments.joinWithDepartments)
router.get('/id/:emp_no', employeeJoinDepartments.departmentById)
router.get('/:first_name', employeeJoinDepartments.departmentByName)



module.exports = router