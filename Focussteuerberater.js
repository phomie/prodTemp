function() {
    const creativeSettingsfocussteuerberater = {
        iframecreator: function iframeCreator(width, height, src, id) {
            var ifrmelem = document.createElement("iframe");
            ifrmelem.id = id;
            ifrmelem.frameBorder = "no";
            ifrmelem.scrolling = "no";
            ifrmelem.src = src;
            ifrmelem.width = width + "px";
            ifrmelem.height = height + "px";
            ifrmelem.allow = "autoplay";
            ifrmelem.style["pointer-events"] = "all";
            ifrmelem.sandbox = "allow-same-origin allow-scripts allow-popups";
            ifrmelem.style["z-index"] = "6000";


            return ifrmelem;
        },

        regex: function is_url(str) {
            regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

            if (regexp.test(str)) {

                return true;
            } else {

                return false;
            }
        },

        checkfordiv: function checkfordiv() {
            var checkContainerLoadedIntvlCnt = 0;
            var checkContainerLoaded = setInterval(function() {
                if (document.querySelectorAll('[atf-formatsize="4x4"]') !== 'undefined') {

                    killInterval(checkContainerLoaded);

                    var footerelement = document.querySelector('[atf-formatsize="4x4"]');
                    footerelement.style.textAlign = "center";
                    return footerelement;

                }

                if (checkContainerLoadedIntvlCnt > 0.5) {
                    killInterval(checkContainerLoaded);

                }


                checkContainerLoadedIntvlCnt++;
            }, 0.5);


            function killInterval(interv) {
                clearInterval(interv);
            }

        },
        findAdkeyValue: function ResponseAdKEY() {
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
        },
        focussteuerberater: {
            homepage: {
                fireplace: {
                    billboardwidth: 1290,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 235,
                            marginleftLeftSky: -845,
                            marginleftRightSky: 605,
                            marginlefttehstickxs: 0,
                            left: 0,
                            bottom: 7,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1356,
                            left: 169,
                            bottom: -57,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {

                },


                wallpaper: {
                    billboardwidth: 744,
                    leadboardcalc: 1710,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 1357,
                            marginlefttehstickxs: 0,
                            left: 842,
                            bottom: 407,
                            condition: 7,
                            leadboardmarginleft: -160,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 682,
                            bottom: 343,
                            condition: 0,
                            leadboardmarginleft: 0,
                        }],
                    }],


                },
            },
            channel: {

                fireplace: {

                },
                dynamicSitebar: {

                },
                wallpaper: {

                },

            },
            article: {
                fireplace: {

                },
                dynamicSitebar: {

                    maxheight: 1300,
                    maxheight1: 1150,
                    maxheight2: 950,
                    maxheight3: 665,
                    maxheight4: 400,

                },
                wallpaper: {

                },

            },

        },

    }

    return creativeSettingsfocussteuerberater


}