/**
 * Created by Janez on 31.3.2016.
 */

function registerEvents(){

    // about author click
    $("#detail").click(function(){
        $("#bs-body").show(500);
        $("#bs-tail").hide(500);
        $("#main").animate({
            paddingTop: "5%"
        }, 2000);
    });

    $("#hide").click(function(){
        $("#bs-body").hide(200);
        $("#bs-tail").show(500);
        $("#main").animate({
            paddingTop: "15%"
        }, 2000);
    });

    /* basic gallery page */

    $("#toggleViewType").click(function(){
        $("#viewsMenu").slideToggle();
    });

    $(".siderItem a").click(function(e){
        e.preventDefault();
        return false;
    })
}