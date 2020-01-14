const Article = require('../models/article')

class articleController {
    static createArticle(req, res, next) {
        Article.create({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            published: false,
            image: req.body.image,
            userId: req.currentUserId
        })
        .then(data => {
            res.status(201).json({message: 'Article successfully created'})
        })
        .catch(err => {
            next(err)
        })
    }
}



module.exports = articleController