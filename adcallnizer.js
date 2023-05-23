topSlotArr = []
console.log('topSlotArr', topSlotArr);
thecollectedTop = []
thecollectedcontent = []
thecollectedvertical = []
thecollectedfooter = []


adsobjects = googletag.pubads().getSlots();
adsobjects.forEach(function(item) {
    var adslotSizes = item.getSizes();
    thesize = [];
    if (item.getAdUnitPath().includes("top")) {
        for (key of adslotSizes) {
            const objEntries = Object.entries(key);
            thekeys = Object.fromEntries(objEntries) //generating object
            values = Object.values(thekeys)
            valurstring = JSON.stringify(values)
            valurstring1 = valurstring.slice(1, -1)
            valurstring2 = valurstring1.replace(",", "x")
            thesize.push(valurstring2)
        }

        thsizetostring = JSON.stringify(thesize).slice(1, -1)
        thsizetostring1 = thsizetostring.replace(/"/g, "")
        thecollectedTop.push(item.getAdUnitPath(), thsizetostring1)

    }

    if (item.getAdUnitPath().includes("content")) {
        thecontentsize = []
        thecombinearr = []

        for (key of adslotSizes) {
            const objEntries = Object.entries(key);
            thekeys = Object.fromEntries(objEntries) //generating object
            values = Object.values(thekeys)
            valurstring = JSON.stringify(values)
            valurstring1 = valurstring.slice(1, -1)
            valurstring2 = valurstring1.replace(",", "x")
            thecontentsize.push(valurstring2)
        }

        thsizetostring = JSON.stringify(thecontentsize).slice(1, -1)
        thsizetostring1 = thsizetostring.replace(/"/g, "")
        thecombinearr.push(item.getAdUnitPath(), thsizetostring1)
        thecollectedcontent.push(thecombinearr)
    }

    if (item.getAdUnitPath().includes("vertical")) {
        thecontentsize = []
        thecombinearr = []

        for (key of adslotSizes) {
            const objEntries = Object.entries(key);
            thekeys = Object.fromEntries(objEntries) //generating object
            values = Object.values(thekeys)
            valurstring = JSON.stringify(values)
            valurstring1 = valurstring.slice(1, -1)
            valurstring2 = valurstring1.replace(",", "x")
            thesize.push(valurstring2)
        }

        thsizetostring = JSON.stringify(thesize).slice(1, -1)
        thsizetostring1 = thsizetostring.replace(/"/g, "")
        thecombinearr.push(item.getAdUnitPath(), thsizetostring1)
        thecollectedcontent.push(thecombinearr)

    }
    if (item.getAdUnitPath().includes("footer")) {
        for (key of adslotSizes) {
            const objEntries = Object.entries(key);
            thekeys = Object.fromEntries(objEntries) //generating object
            values = Object.values(thekeys)
            valurstring = JSON.stringify(values)
            valurstring1 = valurstring.slice(1, -1)
            valurstring2 = valurstring1.replace(",", "x")
            thesize.push(valurstring2)
        }

        thsizetostring = JSON.stringify(thesize).slice(1, -1)
        thsizetostring1 = thsizetostring.replace(/"/g, "")
        thecollectedfooter.push(item.getAdUnitPath(), thsizetostring1)

    }
})
console.log('topSlotArr', topSlotArr);
topSlotArr.push(thecollectedTop, ...thecollectedcontent, thecollectedvertical, thecollectedfooter)