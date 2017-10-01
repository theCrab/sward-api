const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: '135.00' })
})

/* GET about page. */
router.get('/about', (req, res, next) => {
    res.send('Hello from about page')
})

module.exports = router
