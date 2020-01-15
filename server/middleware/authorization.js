const Article = require('../models/article')

module.exports = function (req, res, next) {
    console.log('masuk authorization')
    console.log(req.params.id, 'param')
    Article.findOne({_id: req.params.id})
           .then(data => {
               console.log(data, 'data')
               if (data) {
                   if (data.userId === req.currentUserId) {
                       console.log(data.userId, 'userId vs currentUserId', req.currentUserId)
                       next()
                   } else {
                       next({
                           statusCode: '401',
                           errmessage: 'You are unauthorized to access this page' 
                       })
                   }
               } else {
                   next({
                       statusCode: '404',
                       errmessage: 'Article not found'
                   })
               }
           })
           .catch(err => {
               next(err)
           })
}