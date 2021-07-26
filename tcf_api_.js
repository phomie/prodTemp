__tcfapi('getTCData', 2, (tcData, success) => {


    if (success) {

        console.log('tcData', tcData);

    } else {

        // do something else

    }

}, [1, 2, 3]);