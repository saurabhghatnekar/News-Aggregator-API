const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller')
const validate = require('../middlewares/validate')

router.post('/register', validate, AuthController.register)
router.post('/login', validate, AuthController.login)


module.exports = router;