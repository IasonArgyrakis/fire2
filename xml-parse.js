

module.exports = {
    kathimerini: function (feed) {

        let fireitems = []

        let items = feed.rss.channel[0].item
        items.forEach(item => {

                item["media:keywords"].forEach(key => {
                    if (key.includes("ΠΥΡΚΑΓΙΑ")) {
                        fireitems.push(item)
                    }
                })
            }
        )
        return fireitems
    },


}
;