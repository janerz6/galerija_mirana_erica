/**
 * Created by Janez on 31.3.2016.
 */

function registerEvents() {
    setTimeout(moveBtns, 500);
    // about author click
    $("#detail").on('click', function () {
        $("#bs-body").show(500);
        $("#bs-tail").hide(500);
        $("#main").animate({
            paddingTop: "5%"
        }, 2000);
    });

    $("#hide").on('click', function () {
        $("#bs-body").hide(200);
        $("#bs-tail").show(500);
        $("#main").animate({
            paddingTop: "15%"
        }, 2000);
    });

    basicGalleryEvents();

    /* Interview */
    $('.interviewPage .indexContainer a').on('click',function(e){
        e.preventDefault();
        $(".indexContainer ul li").removeClass("active");
        $(this).parent().addClass("active");

        window.scrollTo(0, $($(this).attr("href")).position().top - 5);
    });

    $("#back").on('click',function(){
        window.scrollTo(0, 0);
        $('img.interviewPageTplBg').show(1000, function () {
            history.go(-1);
        });
    });

    $(document).ready( function(){
        $('img.interviewPageTplBg').hide(2000);
    });

}