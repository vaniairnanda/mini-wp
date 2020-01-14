require('dotenv').config()

const express = require('express')
const app = express()
var mongoose = require('mongoose')
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
mongoose.connect('mongodb://localhost/miniwp', {useNewUrlParser: true})

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
        if (err.name === 'ValidationError') {
            res.status(401).json({message : err.name})
        } else if (err.name === 'MongoError') {
            res.status(err.statusCode).json({
                status: 'fail',
                message: err.message
            })
        } else {
            res.status(err.statusCode).json({
                message: err.errmessage
            })
        }
    } else {
        res.status(500).json({message: err})
    }
    })
app.listen(process.env.PORT, () => {
    console.log('app running on port', process.env.PORT)
})