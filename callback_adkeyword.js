function ResponseAdKEY() {
    var objTProof = window.parent.dataLayer[3]
    isAdkeySet = Object.prototype.hasOwnProperty.call(objTProof, "atf-targeting");

    if (isAdkeySet == true) {
        function GetAdKeyValue(object) {
            for (const prop in objTProof) {
                singleresult = objTProof[prop];
                return singleresult.adkeyword;
            }
        }
        return GetAdKeyValue(objTProof)
    } else {

        function GetAdKeyValue(object) {

            return document.querySelector('atf-ad-slot').getAttribute("atf-targeting-adkeyword")
        }
        return GetAdKeyValue()
    }
}
ResponseAdKEY()
    //******************************************* */




function ResponseAdKEY() {
    function findObjectByKey(array, key) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key]) {
                return array[i][key];
            }
        }
    }
    theDataLayer = window.parent.dataLayer;
    objToAnalyse = findObjectByKey(theDataLayer, ['atf-targeting'][0]);
    if (objToAnalyse) {
        return objToAnalyse.adkeyword
    } else {
        function GetAdKeyValue(object) {
            return document.querySelector('atf-ad-slot').getAttribute("atf-targeting-adkeyword")
        }
        return GetAdKeyValue()
    }
}
ResponseAdKEY()