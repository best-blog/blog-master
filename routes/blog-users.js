const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({users: 'users ok'});
})

router.get('/123', (req, res) => {
    res.json({users: 'users 123'});
})

module.exports = router;