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
            gallerie: {
                fireplace: {

                },
                dynamicSitebar: {

                },
                wallpaper: {

                },
            },
        },
        bunte: {
            homepage: {
                fireplace: {
                    billboardwidth: 1216,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 235,
                            marginleftLeftSky: -920,
                            marginleftRightSky: 440,
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
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -292,
                            marginleftRightSky: 1121,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 0,
                            leadboardmarginleft: -160,
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
            channel: {

                fireplace: {

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
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -292,
                            marginleftRightSky: 440,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 0,
                            leadboardmarginleft: -160,
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
            article: {
                fireplace: {

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
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -292,
                            marginleftRightSky: 440,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 0,
                            leadboardmarginleft: -160,
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
            gallerie: {
                fireplace: {

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
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: -292,
                            marginleftRightSky: 440,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 0,
                            leadboardmarginleft: -160,
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
        daskochrezept: {
            homepage: {
                fireplace: {
                    billboardwidth: 1216,
                    leadboardcalc: 1710,
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
                    leadboardmarginleft: -160,
                    whichcase: [{
                        true: [{
                            marginleftBillboard: 235,
                            marginleftLeftSky: -920,
                            marginleftRightSky: 440,
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
            channel: {

                fireplace: {

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
            article: {
                fireplace: {

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
            gallerie: {
                fireplace: {

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
                    thepositionofskys: 0,
                    thepositionofskys2: 0,
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
            gallerie: {
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

        },
        "guter-rat": {
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
            gallerie: {
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
                            marginleftRightSky: 279,
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
                            marginleftRightSky: 279,
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
                            marginleftBillboard: -466,
                            marginleftRightSky: 950,
                            marginlefttehstickxs: 0,
                            left: 925,
                            bottom: 407,
                            condition: 7,
                            leadboardmarginleft: -412,
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
                            marginleftRightSky: 279,
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
            gallerie: {
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
                            marginleftRightSky: 279,
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
            gallerie: {
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
                    thepositionofskys: 176,
                    thepositionofskys2: 176,
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
            gallerie: {
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
            gallerie: {
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

        },
        harpersbazaar: {
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
            gallerie: {
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
            gallerie: {
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
            gallerie: {
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
            gallerie: {
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

        slowlyveggie: {
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
            gallerie: {
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
            gallerie: {
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
            gallerie: {
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
            gallerie: {
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
            gallerie: {
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
        onmeda: {
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
            gallerie: {
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


    }
    return creativeSettings
}