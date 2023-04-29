const express = require('express');
const router = express.Router();

const preferencesController = require('../controllers/preference.controller')


router.get('/', preferencesController.getPreferences)
// router.post('/', preferencesController.createPreferences)
router.put('/', preferencesController.updatePreferences)

module.exports = router;