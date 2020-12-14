const express = require('express')
const employeeJoinDepartments = require('../controllers/employee-join-departments')
const router = express.Router()



router.get('/', employeeJoinDepartments.joinWithDepartments)
<<<<<<< HEAD
router.get('/id/:emp_no', employeeJoinDepartments.departmentById)
router.get('/:first_name', employeeJoinDepartments.departmentByName)
=======
>>>>>>> c3713608b9220190fb67ce9af4321ecf1dc14d50



module.exports = router