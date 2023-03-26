// https://zenquotes.io/api/random

// Write a function to get random quotes

const axios = require('axios')
require('dotenv').config()


const ENDPOINT = process.env.ENDPOINT
/**
 * 
 * @returns quote fetched from our base endpoint
 */
async function fetchQuote() {
    let response = await axios.get(ENDPOINT)
    return response.data[0]
}

/**
 * 
 * @returns collect the quote from the fetchQuote Function
 */
async function getQuote() {
    return fetchQuote().then(data => {
        let quote = data.q
        let author = data.a
        return `${quote} ~ ${author}`
    })
}

getQuote().then(data => {
    console.log(data)
})