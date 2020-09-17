const HttpError = require('../model/http-error')
const User = require('../model/user')

const testUsers = (req, res) => {
    res.json({users: 'users 123'});
}

exports.testUsers = testUsers