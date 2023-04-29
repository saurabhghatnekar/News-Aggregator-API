const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route')
const preferencesRoutes = require('./preferences.route')
const verifyToken = require('../middlewares/verifyToken')

router.use('/', authRoutes)
router.use('/preferences', verifyToken, preferencesRoutes)
router.use('/news', verifyToken, require('./news.route'))

module.exports = router;
