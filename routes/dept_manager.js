const express = require('express')
const departmentManagersController = require('../controllers/dept_manager')
const router = express.Router()

router.get('/', departmentManagersController.getAllDepartmentManagers)

module.exports = router