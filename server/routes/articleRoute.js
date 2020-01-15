const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.get('/', articleController.getArticles)
router.use(authentication)
router.post('/', articleController.createArticle)
router.delete('/:id', authorization, articleController.deleteArticle)
router.patch('/:id', authorization, articleController.publishArticle)
router.put('/:id', authorization, articleController.editArticle)



module.exports = router