const preferences = []
const PreferenceModel = () => {
    return {
        create: (preference) => {
            preference.id = Math.floor(Math.random() * 1000)
            preferences.push(preference)
            return preference
        },
        findAll: () => {
            return preferences
        },
        findById: (id) => {
            return preferences.find(preference => preference.id === id)
        },
        update: (userId, preference) => {
            //update the preference array with the new keywords for the user
            const index = preferences.findIndex(preference => preference.userId === userId)
            preferences[index].keywords = preference.keywords
            return preferences[index]

        },
        delete: (id) => {
            const index = preferences.findIndex(preference => preference.id === id)
            preferences.splice(index, 1)
            return true
        },
        findPreferenceByUserId: (userId) => {
            return preferences.find(preference => preference.userId === userId)
        }
    }
}

module.exports = PreferenceModel()
