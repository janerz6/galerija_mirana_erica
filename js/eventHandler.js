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
            $('#zoom').elevateZoom(innerZoomConfig);
        }
        else {
            innerZoomActive = false;
            $.removeData($("#zoom"), 'elevateZoom');
        }
        console.log('innerZoomActive:',innerZoomActive);
    });

    $(".basicGalleryPage .siderItem a").on('click',function(e){
        e.preventDefault();
        //console.log($(this).data("imgid"));
        selectedImageIdx = $(this).data("imgid");
        //Trigger redraw
        $(window).trigger("hashchange");
    });

    /* Interview */
    $('.interviewPage .indexContainer a').on('click',function(e){
        e.preventDefault();
        $(".indexContainer ul li").removeClass("active");
        $(this).parent().addClass("active");

        window.scrollTo(0, $($(this).attr("href")).position().top);
    });
   
}