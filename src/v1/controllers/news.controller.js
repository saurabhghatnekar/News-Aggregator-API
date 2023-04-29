const catchAsync = require("../../utils/catchAsync");
const {PreferenceService} = require("../services");
require('dotenv').config()
const axios = require('axios')

let everythingEndpoint = 'https://newsapi.org/v2/everything'
let topHeadlinesEndpoint = 'https://newsapi.org/v2/top-headlines'

const getNews = catchAsync(async (req, res) => {
    let {user} = req
    let preferences = await PreferenceService.getUserPreferences(user.id)
    console.log(preferences)
    let userKeywords = preferences || []
    console.log("userKeywords")
    if (userKeywords.length === 0) {
        userKeywords = ['bitcoin']
    }
    let keywords = userKeywords.join(' OR ')
    let url
    if (keywords === '') {
        url = `${everythingEndpoint}?apiKey=${process.env.NEWS_API_KEY}`
    } else {
        url = `${everythingEndpoint}?q=${keywords}&apiKey=${process.env.NEWS_API_KEY}`
    }

    const response = await axios.get(url)
    const data = response.data
    // console.log(data)
    res.json({
        data: data,
        message: "Successfully News Retrieved"
    });
})

const getTopHeadlines = catchAsync(async (req, res) => {
    let {user} = req
    let preferences = await PreferenceService.getUserPreferences(user.id)
    let userKeywords = preferences.keywords
    let keywords = userKeywords.join(' OR ')
    let url = `${topHeadlinesEndpoint}&apiKey=${process.env.NEWS_API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    res.json({
        data: data,
        message: "Successfully News Retrieved"
    });
})

module.exports = {
    getNews,
    getTopHeadlines
}

