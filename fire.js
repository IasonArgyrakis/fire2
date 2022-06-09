const express = require('express')
const axios = require('axios').default
const app = express()
const port = 3000
var fireParser = require("./xml-parse")
const parseString = require('xml2js').parseString;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    axios.get('https://feeds.feedburner.com/kathimerini/DJpy')
        .then(function (response) {
            let xml=response.data
            let js
            parseString(xml, function (err, result) {
                js=result
            });
            res.json(fireParser.kathimerini(js))

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });


})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})