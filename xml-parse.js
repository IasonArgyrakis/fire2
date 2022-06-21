

module.exports = {
    kathimerini: function (feed) {

        let fireitems = []
        let items = feed.rss.channel[0].item
        items.forEach(item => {
                console.log(item)
                item["media:keywords"].forEach(key => {
                    if (key.includes("ΠΥΡΚΑΓΙΑ")) {
                        fireitems.push(item)
                    } else if (key.includes("ΦΩΤΙΑ")) {
                        fireitems.push(item)
                    }
                })
            }
        )
        return fireitems
    },
    tovima: function (feed) {

        let fireitems = []
        console.log(feed)
        let items = feed.rss.channel[0].item
        items.forEach(item => {
                console.log(item)
                item["media:keywords"].forEach(key => {
                    if (key.includes("ΠΥΡΚΑΓΙΑ")) {
                        fireitems.push(item)
                    } else if (key.includes("ΦΩΤΙΑ")) {
                        fireitems.push(item)
                    }
                })
            }
        )
        //return fireitems
    },


}
;