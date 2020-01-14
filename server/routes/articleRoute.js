const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const authentication = require('../middleware/authentication')



router.use(authentication)
router.post('/', articleController.createArticle)



module.exports = router