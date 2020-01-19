const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
class userController {

    static register(req, res, next) {
        console.log('masuk method controller')
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then(result => {
                res.status(201).json({message: 'Registration success!'})
            })
            .catch(err => {
                next(err)
            })
    }


    static login(req, res, next) {
        User.findOne({email: req.body.email})
            .then(result => {
                if (result) {
                   let checkPassword = bcrypt.compareSync(req.body.password, result.password)
                   if (checkPassword) {
                       let access_token = jwt.sign({ id: result._id}, process.env.SECRET)
                       console.log(access_token, 'masuk login')
                       res.status(200).json({access_token : access_token})
                   } else {
                       next({name:'Bad request', statusCode:'400', message: 'Email/Password wrong'})
                   }
                } else {
                    next({name:'Bad request', statusCode:'400', message: 'Email/Password wrong'})
                }
            })
            .catch(err => {
                next(err)
            })
    }

}



module.exports = userController