const bcrypt = require('bcrypt')
const users = []
const PreferenceModel = require('./preference.model')

const UserModel = {
    create: (user) => {
        const userObj = {
            id: Math.floor(Math.random() * 1000),
            email: user.email,
            password: bcrypt.hashSync(user.password, 10),
            role: user.role
        }
        users.push(userObj)
        PreferenceModel.create({
            userId: userObj.id,
            keywords: [],
        })
        console.log(users)
        return userObj
    },
    findByEmail: (email) => {
        return users.find(user => user.email === email)
    },
    findById: (id) => {
        return users.find(user => user.id === id)
    }
}

module.exports = UserModel