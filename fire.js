const express = require('express')
const axios = require('axios').default
const app = express()
const port = 3000
var fireParser = require("./xml-parse")
const parseString = require('xml2js').parseString;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    let kathimarini,tovima
    axios.get('https://feeds.feedburner.com/kathimerini/DJpy')
        .then(function (response) {
            let xml=response.data
            let js
            parseString(xml, function (err, result) {
                js=result
            });
            kathimarini=(fireParser.kathimerini(js))

        })
    axios.get('https://www.tovima.gr/tag/news-feed/feed/')
        .then(function (response) {
            let xml=response.data
            let js
            parseString(xml, function (err, result) {
                js=result
                console.log(result)
            });
            tovima=fireParser.tovima(js)

        })
    res.json(tovima)



})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})