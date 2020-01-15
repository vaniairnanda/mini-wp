const express = require('express')
const router = express.Router()
const user = require('./userRoute')
const article = require('./articleRoute')
router.get('/', (req, res) => {
    res.send('ini home')
})

router.get('*', (req, res) => {
    res.send('404 page not found')
})
router.use('/users', user)
router.use('/articles', article)



module.exports = router