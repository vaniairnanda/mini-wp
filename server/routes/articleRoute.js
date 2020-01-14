const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const authentication = require('../middleware/authentication')



router.use(authentication)
router.post('/', (req, res) => {
    res.send('ini page post artikel')
})



module.exports = router