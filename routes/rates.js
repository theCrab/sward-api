const express = require('express')
const cheerio = require('cheerio')
const request = require('request')
const router  = express.Router()

/* Get Rates listing */
router.get('/', (req, res, next) => {

})

router.post('/', (req, res, next) => {

})


export class ExchangeRateScrapper {
    bankUrls =  { 
        kenya: 'https://www.centralbank.go.ke',
        uganda: 'https://www.bou.or.ug/bou/home.html',
        tanzania: 'http://bot.go.tz/FinancialMarkets/ExchangeRates/ShowExchangeRates.asp' 
    }

    exchangeRates = { 
        kenya: { usd: 0, gbp: 0, eur: 0 }, 
        uganda: { usd: 0, gbp: 0, eur: 0 }, 
        tanzania: { usd: 0, gbp: 0, eur: 0 }
    }

    constructor() {

    }

    get Kes() {
        request(bankUrls.kenya, (err, res, html) => {
            if (!err) {
                let $ = cheerio.load(html)

                $('.someCless').filter(() => {
                    let data = $(this)

                })
            }
        })
    }

    get Tzs() {

    }

    get Ugs() {
        request(bankUrls.uganda, (err, res, html) => {
            if (!err) {
                let $ = cheerio.load(html)

                $('#right').filter(() => {
                    let data = $(this)

                })
            }
        })
    }
}