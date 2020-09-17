const express = require('express')
const router = express.Router();

const usersController = require('../controllers/users-controllers')

router.get('/', (req, res) => {
    res.json({users: 'users ok'});
})

router.get('/123', usersController.testUsers)

module.exports = router;