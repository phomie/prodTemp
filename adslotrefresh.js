function() {
    return {
        enable: true,
        orderIds: [2742548858, 0, 2721946721, 2301695491, 2537878295, 2537876621, 2538720168, 2537880455, 2538731208, 2538731013, 2522769591, 2522332732, 2521896170, 2522340145, 2522340955, 2521904063, 2521925714, 2521923494, 2522783691, 2522784444, 2522363455, 2521924736, 2522366098, 2522346880],
        visiblityThreshold: 50,
        refreshInterval: 1000,
        refreshTimeout: 30000,
        throttle: 0,
        targeting: {
            'ad_reload': 'true'
        }
    }
}


var Adslot = frameElement.parentElement.parentElement.parentElement.parentElement;
Adslot.removeAttribute("data-ad-label");
Adslot.setAttribute("style", "height: 0px !important;");


Adslot.style.Height=0+"px !important"
    console.log('data-ad-label is removed');