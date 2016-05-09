/**
 * Created by Janez on 31.3.2016.
 */

function registerEvents() {

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

    /* Interview */
    $('.interviewPage .indexContainer a').on('click',function(e){
        e.preventDefault();
        $(".indexContainer ul li").removeClass("active");
        $(this).parent().addClass("active");

        window.scrollTo(0, $($(this).attr("href")).position().top - 5);
    });

    $("#back").on('click',function(){
        window.scrollTo(0, 0);
        history.go(-1);;
    });


    $('body').scrollspy({
        target: '.bs-docs-sidebar',
        offset: 200
    });


}