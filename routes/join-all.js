const express = require('express')
const joinAllController = require('../controllers/join-all')
const router = express.Router()



router.get('/allinfo', joinAllController.joinAll)



module.exports = router