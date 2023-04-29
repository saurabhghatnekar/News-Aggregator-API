//validate middleware

const {check, validationResult} = require('express-validator');

const validate = (req, res, next) => {
    //if auth route check for email and password
    let validations = []
    if (req.path === '/register') {
        console.log("here")
        validations = [
            check('role', 'Role is required').exists(),
            check('email', 'Email is required').exists().isEmail(),
            check('password', 'Password is required').exists().isLength({min: 6})
        ]

    }
    //if login route check for email and password
    if (req.path === '/login') {
        validations = [
            check('email', 'Email is required').exists().isEmail(),
            check('password', 'Password is required').exists().isLength({min: 6})
        ]
    }
    //validate

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    next();
}

module.exports = validate;