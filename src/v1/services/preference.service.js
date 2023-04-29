const PreferenceModel = require('../models/preference.model');

const getUserPreferences = (userId) => {
    const resp =  PreferenceModel.findPreferenceByUserId(userId);
    return resp.keywords;
}

const createPreference = (preference) => {
    return PreferenceModel.create(preference);
}

const updatePreference = (userId, toUpdate) => {
    return PreferenceModel.update(userId, toUpdate);

}

const deletePreference = (id) => {
    return PreferenceModel.delete(id);
}

module.exports = {
    getUserPreferences,
    createPreference,
    updatePreference,
    deletePreference

}