
           adslotToUse = frameElement.parentElement;
           adslotId = adslotToUse.id
  
           ifTop = adslotId.includes('top_1')
         
           ifContent = adslotId.includes('content_1')
          
           ifFoooter = adslotId.includes('footer')
         
           

           
           window.parent.
           
           adsobjects=googletag.pubads().getSlots();

           adsobjects.forEach(function(item){
            if(item.getAdUnitPath().includes('top_1')){
                /*dann ist der Topslot geladen und du kannst deinen Code ausführen*/ 

            console.log("getAdUnitPath=rendered",item.getAdUnitPath())
         

                    }   
                });


           adsobjects = googletag.pubads().getSlots();
 if(ifTop==true){
    console.log("im topcontainer")


            adsobjects.forEach(function(item){
            if(item.getAdUnitPath().includes('top_1')){
            console.log("getAdUnitPath=rendered",item.getAdUnitPath())
            console.log("getAdUnitPath",item)
                    }   
                });

 }else if(ifContent==true){
    adsobjects.forEach(function(item){
            if(item.getAdUnitPath().includes('content_1')){
                item.setCollapseEmptyDiv()
            console.log("getAdUnitPath",item.getAdUnitPath())
                    }   
                });

 }




 window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
window.googletag.cmd.push(function () {
  window.googletag.pubads().addEventListener('slotOnload', function (event) {
    ads.handleAdEvent(event);
  });
});



 adsobjects = googletag.pubads().getSlots();



 adsobjects.forEach(function(item){


return item.getAdUnitPath()




    if(item.getAdUnitPath().includes('top_1')){
       
    console.log("getAdUnitPath=rendered",item.getAdUnitPath())
    console.log("getAdUnitPath",item)
            }   
        });





 adsobjects.forEach(function(item){

   item.addEventListener('slotOnload', function(event) {
        console.log(event.slot.getSlotElementId(), 'rendered');
      });


 })
adsobjects = googletag.pubads().getSlots();
adsobjects.addEventListener('slotOnload', function(event) {
    console.log(event.slot.getSlotElementId(), 'rendered');


  });



  
  googletag.pubads().addEventListener('slotRenderEnded', function(event) {
    if( event.slot.W == googleAd.W ){
        console.log("heyho")
    }
});


adsobjects = googletag.pubads().getSlots();
adsobjects.forEach(function(item){
item.addEventListener('slotOnload', function(event) {
    console.log(event.slot.getSlotElementId(), 'rendered');
  });
    });


    googletag.pubads().addEventListener('slotOnload', function(event) {
        console.log('event.slot ', event.slot );

        if (event.slot === targetSlot) {
          // Slot specific logic.
        }
      });