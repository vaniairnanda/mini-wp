if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
    
}


const express = require('express')
const app = express()
var mongoose = require('mongoose')
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
mongoose.connect('mongodb://localhost/miniwp', {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected')
});

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)
app.use('/', (err, req, res, next) => {
    if(err) {
        console.log(err)
        err.statusCode = 500
        if (err.name === 'ValidationError') {
            res.status(401).json({message : err.message})
        } else if (err.name === 'MongoError') {
            res.status(err.statusCode).json({
                status: 'fail',
                message: err.message
            })
        } else if (err.name === 'JsonWebTokenError') {
            res.status(401).json({
                message: 'You are not authenticated, please log in'
            })
        } else if (err.message) {
            res.status(err.statusCode).json({message: err.message})
        }
        res.status(err.statusCode).json({message: err})
    } 
    })
app.listen(process.env.PORT, () => {
    console.log('app running on port', process.env.PORT)
})