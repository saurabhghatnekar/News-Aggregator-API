require('dotenv').config()
const catchAsync = require("../../utils/catchAsync");
const PreferenceService = require('../services/preference.service')


const getPreferences = catchAsync(async (req, res) => {
    const preferences = await PreferenceService.getUserPreferences(req.user.id)
    res.json({
        data: preferences,
        message: "Successfully Preferences Retrieved"
    });

})

const updatePreferences = catchAsync(async (req, res) => {
    let {keywords} = req.body
    if (keywords) {
        console.log(keywords)
        const updatedPreferences = PreferenceService.updatePreference(req.user.id, {keywords})
        res.json({
            data: updatedPreferences,
            message: "Successfully Preferences Updated"
        })
    }
    else {
        res.status(400).json({
            message: "Make sure you pass keywords in the body."
        })
    }


})


module.exports = {
    getPreferences,
    updatePreferences
}