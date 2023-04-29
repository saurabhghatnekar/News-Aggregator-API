//verifyToken
require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization']

    if (bearerHeader) {
        try {
            req.token = bearerHeader.split(' ')[1]
            const decoded = jwt.verify(req.token, process.env.JWT_SECRET)
            const userId = User.findById(decoded.id)
            if (!userId) {
                return res.sendStatus(403)
            }
            req.user = userId
            next()
        } catch (e) {
            console.log(e)
            return res.sendStatus(403)
        }
    }
}

module.exports = verifyToken