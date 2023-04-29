const express = require('express');
const router = express.Router();
const indexRouterv1 = require('./v1/routes/index');

router.use('/v1', indexRouterv1);


module.exports = router;

