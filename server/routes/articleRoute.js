const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.get('/', articleController.getArticles)
router.use(authentication)
router.post('/', articleController.createArticle)
router.use(authorization)
router.delete('/', articleController.deleteArticle)



module.exports = router