/**
 * Created by Janez on 31.3.2016.
 */

function registerEvents(){

    // about author click
    $("#detail").on('click',function(){
        $("#bs-body").show(500);
        $("#bs-tail").hide(500);
        $("#main").animate({
            paddingTop: "5%"
        }, 2000);
    });

    $("#hide").on('click',function(){
        $("#bs-body").hide(200);
        $("#bs-tail").show(500);
        $("#main").animate({
            paddingTop: "15%"
        }, 2000);
    });

    /* basic gallery page */
    $("#toggleViewType").on('click',function(){
        $("#viewsMenu").slideToggle();
    });

     /* Basic gallery */
    $("#toggleZoom").on('click',function(){
        if(!innerZoomActive) {
            innerZoomActive = true;
            $('#image').elevateZoom(innerZoomConfig);
        }
        else {
            innerZoomActive = false;
            $.removeData($("#image"), 'elevateZoom');
        }
        console.log('innerZoomActive:',innerZoomActive);
    });

    $("#nextImgBtn").on('click',function(e){
        e.preventDefault();
        selectedImageIdx = (selectedImageIdx + 1) % (data.images.length);
        //Trigger redraw
        $(window).trigger("hashchange");
    });
    $("#prevImgBtn").on('click',function(e){
        e.preventDefault();
        selectedImageIdx = (selectedImageIdx - 1)
        if(selectedImageIdx === 0)
            selectedImageIdx = (data.images.length - 1);
        //Trigger redraw
        $(window).trigger("hashchange");
    });

    $("#fullscreen, #image").on('click',function(){


        if(!fullscreenMode){
            $("#imgContainer").animate({height:'90vh'},1500);
            //$("#prevImgBtn").animate({position:'fixed !important',top:'50%',left:'2%'},1500);
            //$("#nextImgBtn").animate({position:'fixed !important',top:'50%',right:'2%'},1500);
        }
        else{
            $("#imgContainer").animate({height:'65vh'},1500);
        }

        fullscreenMode = !fullscreenMode;
        $("#viewsMenu").slideToggle(1500);
        $(".galleryBasicImgDescription").slideToggle(1500);
    });
    /* Interview */
    $('.interviewPage .indexContainer a').on('click',function(e){
        e.preventDefault();
        $(".indexContainer ul li").removeClass("active");
        $(this).parent().addClass("active");

        window.scrollTo(0, $($(this).attr("href")).position().top);
    });
   
}