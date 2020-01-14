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


    static getArticles(req, res, next) {
        Article.find({published: true})
                .then(result => {
                    if (result.length >= 1) {
                        res.status(200).json({result : result})
                    } else {
                        next({
                            statusCode: 404,
                            message: 'No article to display'
                        })
                    }
                })
                .catch(err => {
                    next(err)
                })
    }

    static deleteArticle(req, res, next) {
        Article.findOneAndDelete({_id: req.params.id})
               .then(result => {
                   res.status(200).json({message: 'Article successfully removed'})
               })
               .catch(err => {
                   next(err)
               })
    }


}



module.exports = articleController