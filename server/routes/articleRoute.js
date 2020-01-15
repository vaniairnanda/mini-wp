const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.get('/', articleController.getArticles)
router.post('/', articleController.createArticle)
router.delete('/:id', authorization, articleController.deleteArticle)



module.exports = router