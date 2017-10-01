const express = require('express')

const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('Its working. Respond with a resource')
})

router.get('/me', (req, res, next) => {
    res.json({ name: 'John', last: 'Doe' })
})


module.exports = router
