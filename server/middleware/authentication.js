var jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = function(req, res, next) {
    const token = req.headers.access_token
    try {
        let decoded = jwt.verify(token, process.env.SECRET)
        User.findOne({
            _id: decoded.id
        })
            .then(result => {
                if (result) {
                    req.currentUserId = result.id
                    next()
                } else {
                    res.status(500).json({
                        message: 'Token does not match'
                    })
                }
                
            }) 
            .catch(err => {
                console.log('masuk sini')
                next(err)
            })
        
    } catch(err) {
        console.log('masuk err try catch', err)
        next(err)
    }
}