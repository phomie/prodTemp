function() {
    const creativeSettings = {
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
      
        
         
        




        playboy: {
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

        daskochrezept: {
            homepage: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    topcontSizeMl: -130,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 257,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 299,
                            marginlefttehstickxs: 0,
                            left: -83,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1000,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -48,
                            marginleftRightSky: 1365,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -240,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 525,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: 0,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    topcontSizeMl: -130,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 257,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 299,
                            marginlefttehstickxs: 0,
                            left: -83,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1000,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 744,
                    leadboardcalc: 1710,
                    thepositionofskys: 20,
                    thepositionofskys2: 20,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -48,
                            marginleftRightSky: 1365,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -240,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 525,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: 0,
                        }],
                    }],
                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    topcontSizeMl: -130,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 257,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 299,
                            marginlefttehstickxs: 0,
                            left: -83,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1000,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 744,
                    leadboardcalc: 1710,
                    thepositionofskys: 15,
                    thepositionofskys2: 15,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -48,
                            marginleftRightSky: 1365,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 0,
                            leadboardmarginleft: -240,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 525,
                            bottom: 408,
                            condition: 0,
                            leadboardmarginleft: 0,
                        }],
                    }],
                },

            },

        },

        emotion: {
            homepage: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -162,
                            marginleftRightSky: 943,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 744,
                    leadboardcalc: 1710,
                    thepositionofskys: 250,
                    thepositionofskys2: 250,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -300,
                            marginleftRightSky: 941,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 7,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 518,
                            bottom: 408,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {

                },

            },
            article: {
                fireplace: {

                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -920,
                            marginleftRightSky: 440,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 744,
                    leadboardcalc: 1710,
                    thepositionofskys: 480,
                    thepositionofskys2: 480,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -300,
                            marginleftRightSky: 941,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 7,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 518,
                            bottom: 408,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],

                },

            },


        },
        "guter-rat": {
            homepage: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 55,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 105,
                            marginleftLeftSky: -960,
                            marginleftRightSky: 304,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {

                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 55,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 105,
                            marginleftLeftSky: -960,
                            marginleftRightSky: 304,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            mmarginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {

                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 80,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 195,
                            marginleftLeftSky: -960,
                            marginleftRightSky: 303,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            mmarginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        superillu: {
            homepage: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 55,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 105,
                            marginleftLeftSky: -960,
                            marginleftRightSky: 304,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 744,
                    leadboardcalc: 1710,
                    thepositionofskys: 7,
                    thepositionofskys2: 7,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -211,
                            marginleftRightSky: 950,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 7,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 518,
                            bottom: 408,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {

                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 55,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 105,
                            marginleftLeftSky: -960,
                            marginleftRightSky: 304,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 80,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 195,
                            marginleftLeftSky: -960,
                            marginleftRightSky: 303,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        mylife: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 8,
                    thepositionofskys2: 8,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -922,
                            marginleftRightSky: 283,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 8,
                    thepositionofskys2: 8,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 8,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 8,
                    thepositionofskys2: 8,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -922,
                            marginleftRightSky: 283,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 8,
                    thepositionofskys2: 8,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 176,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -922,
                            marginleftRightSky: 283,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 211,
                    thepositionofskys2: 211,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        esquire: {
            homepage: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -162,
                            marginleftRightSky: 943,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {

                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -920,
                            marginleftRightSky: 440,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 0,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        elle: {
            homepage: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -162,
                            marginleftRightSky: 943,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {

                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -920,
                            marginleftRightSky: 440,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 0,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        harpersbazaar: {
            homepage: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 64,
                    thepositionofskys2: 64,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 362,
                            marginleftLeftSky: -612,
                            marginleftRightSky: 748,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 0,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 75,
                    thepositionofskys2: 75,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 274,
                            marginleftLeftSky: -612,
                            marginleftRightSky: 748,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 0,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {

                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 75,
                    thepositionofskys2: 75,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 274,
                            marginleftLeftSky: -612,
                            marginleftRightSky: 748,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 0,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        instyle: {
            homepage: {
                fireplace: {
                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -162,
                            marginleftRightSky: 943,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 66,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1006,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {

                    billboardwidth: 1200,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 145,
                            marginleftLeftSky: -920,
                            marginleftRightSky: 440,
                            marginlefttehstickxs: 0,
                            left: -75,
                            bottom: 0,
                            condition: 0,
                        }],
                        false: [{
                            marginleftBillboard: -24,
                            marginleftLeftSky: -94,
                            marginleftRightSky: 1266,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -457,
                            marginleftRightSky: 959,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 613,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        einfachbacken: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        eatbetter: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        slowlyveggie: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -161,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -908,
                            marginleftRightSky: 297,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        freundin: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -906,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        "meine-familie-und-ich": {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        "mein-schoenes-land": {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -907,
                            marginleftRightSky: 298,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -438,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        haus: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 225,
                            marginleftLeftSky: -842,
                            marginleftRightSky: 363,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -353,
                            marginleftRightSky: 1060,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 225,
                            marginleftLeftSky: -842,
                            marginleftRightSky: 363,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],
                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -353,
                            marginleftRightSky: 1060,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 225,
                            marginleftLeftSky: -842,
                            marginleftRightSky: 363,
                            marginlefttehstickxs: 0,
                            left: 13,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 94,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -353,
                            marginleftRightSky: 1060,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 633,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        gofeminin: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    leadboardmarginleft: -131,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -146,
                            marginleftLeftSky: -950,
                            marginleftRightSky: 255,
                            marginlefttehstickxs: 0,
                            left: 247,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 332,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -478,
                            marginleftRightSky: 910,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -440,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 800,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            usergenerated: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    leadboardmarginleft: -131,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -146,
                            marginleftLeftSky: -950,
                            marginleftRightSky: 255,
                            marginlefttehstickxs: 0,
                            left: 247,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 332,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -478,
                            marginleftRightSky: 910,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -440,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 800,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    leadboardmarginleft: -131,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -146,
                            marginleftLeftSky: -950,
                            marginleftRightSky: 255,
                            marginlefttehstickxs: 0,
                            left: 247,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 332,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],
                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -478,
                            marginleftRightSky: 910,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -440,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 800,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    leadboardmarginleft: -131,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -146,
                            marginleftLeftSky: -950,
                            marginleftRightSky: 255,
                            marginlefttehstickxs: 0,
                            left: 247,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 332,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -478,
                            marginleftRightSky: 910,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -440,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 800,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        "focus-arztsuche": {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    leadboardmarginleft: -131,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -146,
                            marginleftLeftSky: -949,
                            marginleftRightSky: 255,
                            marginlefttehstickxs: 0,
                            left: 247,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 332,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -478,
                            marginleftRightSky: 910,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -440,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 800,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },
            },
            channel: {

                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    leadboardmarginleft: -131,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -146,
                            marginleftLeftSky: -949,
                            marginleftRightSky: 255,
                            marginlefttehstickxs: 0,
                            left: 247,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 332,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -478,
                            marginleftRightSky: 910,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -440,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 800,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    leadboardmarginleft: -131,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -146,
                            marginleftLeftSky: -949,
                            marginleftRightSky: 255,
                            marginlefttehstickxs: 0,
                            left: 247,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1124,
                            left: 332,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],

                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 18,
                    thepositionofskys2: 18,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -478,
                            marginleftRightSky: 910,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -440,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 800,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -250,
                        }],
                    }],



                },

            },


        },
        netdoktor: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    leadboardmarginleft: -200,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -200,
                            marginleftRightSky: 1005,
                            marginlefttehstickxs: 0,
                            left: 0,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1100,
                            left: 96,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -518,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 660,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -350,
                        }],
                    }],



                },
            },
            usergenerated: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    leadboardmarginleft: -200,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -200,
                            marginleftRightSky: 1005,
                            marginlefttehstickxs: 0,
                            left: 0,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1100,
                            left: 96,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -518,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 660,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -350,
                        }],
                    }],



                },
            },
            channel: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    leadboardmarginleft: -200,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -200,
                            marginleftRightSky: 1005,
                            marginlefttehstickxs: 0,
                            left: 0,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1100,
                            left: 96,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],
                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -518,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 660,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -350,
                        }],
                    }],



                },

            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    leadboardmarginleft: -200,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -200,
                            marginleftRightSky: 1005,
                            marginlefttehstickxs: 0,
                            left: 0,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1100,
                            left: 96,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],
                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },
                wallpaper: {
                    billboardwidth: 728,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -518,
                            marginleftRightSky: 978,
                            marginlefttehstickxs: 0,
                            left: 1180,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -412,
                        }],
                        false: [{
                            marginleftBillboard: -53,
                            marginleftRightSky: 675,
                            left: 660,
                            bottom: 400,
                            condition: 0,
                            leadboardmarginleft: -350,
                        }],
                    }],



                },

            },
        },
        onvista: {
            homepage: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    leadboardmarginleft: -200,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -200,
                            marginleftRightSky: 1005,
                            marginlefttehstickxs: 0,
                            left: 0,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1100,
                            left: 96,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],


                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },

            },

            channel: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    leadboardmarginleft: -200,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -200,
                            marginleftRightSky: 1005,
                            marginlefttehstickxs: 0,
                            left: 0,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1100,
                            left: 96,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],
                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,
                },


            },
            article: {
                fireplace: {
                    billboardwidth: 1045,
                    leadboardcalc: 1710,
                    thepositionofskys: 19,
                    thepositionofskys2: 19,
                    leadboardmarginleft: -200,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 160,
                            marginleftLeftSky: -200,
                            marginleftRightSky: 1005,
                            marginlefttehstickxs: 0,
                            left: 0,
                            bottom: 0,
                            condition: 7,
                        }],
                        false: [{
                            marginleftBillboard: 80,
                            marginleftLeftSky: -79,
                            marginleftRightSky: 1100,
                            left: 96,
                            bottom: 0,
                            condition: 0,
                        }],
                    }],
                },
                dynamicSitebar: {
                    maxheight: 1400,
                    maxheight1: 1200,
                    maxheight2: 1150,
                    maxheight3: 800,
                    maxheight4: 600,

                },


            },
        },


    }
    return creativeSettings
}