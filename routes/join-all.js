const express = require('express')
const joinAllController = require('../controllers/join-all')
const router = express.Router()



router.get('/', joinAllController.joinAll)
router.get('/id/:emp_no', joinAllController.salaryById)
router.get('/:first_name', joinAllController.salaryByName)



module.exports = router