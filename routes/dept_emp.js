const express = require('express')
const departmentEmployeesController = require('../controllers/dept_emp')
const router = express.Router()

router.get('/', departmentEmployeesController.getAllDepartmentEmployees)

module.exports = router