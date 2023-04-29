const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const catchAsync = require("../../utils/catchAsync");
require('dotenv').config()

const register =  catchAsync( async (req, res) => {
    try {
        const user = User.create(req.body)
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})


const login = async (req, res) => {
    try {
        const user = await User.findByEmail(req.body.email)
        if (!user) {
            return res.status(401).json({error: 'unauthorized'})
        }
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) {
            return res.status(401).json({error: 'unauthorized'})
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        })
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

const verify = catchAsync(async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json(err)
        }
        res.json(decoded)
    })
})

module.exports = {
    register,
    login
}