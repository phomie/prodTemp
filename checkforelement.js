   var checkAdLoadedIntvlCnt = 0;

   var checkAdLoaded = setInterval(function() {

       if (msInmin > 2) { //Display the refresh button
           reloadtButton.style.visibility = " visible"
           killInterval(checkAdLoaded);
       }



       if (checkAdLoadedIntvlCnt > 100) {
           killInterval(checkAdLoaded);
       }
       checkAdLoadedIntvlCnt++;
       console.log('checkAdLoadedIntvlCnt', checkAdLoadedIntvlCnt);
   }, 20);

   function killInterval(interv) {
       clearInterval(interv);
   }
   /* setTimeout(function() {
       const reloadtButton = document.querySelector("#reload");
       // Reload everything:
       function reload() {
           reload = location.reload();
       }
       // Event listeners for reload
       reloadButton.addEventListener("click", reload, false)
   }, 4000) */








   function replaceAllBackSlash(targetStr) {
       var index = targetStr.indexOf("\\");
       while (index >= 0) {
           targetStr = targetStr.replace("\\", "");
           index = targetStr.indexOf("\\");
       }
       targetStr.forEach(function(item) {
           var li = document.createElement("li");
           var text = document.createTextNode(item);
           li.appendChild(text);
           document.getElementById("slots").appendChild(li);
       });


       return targetStr;
   }
   thestring = replaceAllBackSlash(adlsots);
   console.log('thestring', thestring);

   }