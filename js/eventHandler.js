/**
 * Created by Janez on 31.3.2016.
 */

function registerEvents() {


    if(window.location.href.split("#")[1] === "galleryBasic") {
        basicGalleryEvents();
    }
    else if(window.location.href.split("#")[1] === "galleryDouble") {
        doubleGalleryEvents();
    }
    else{

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

        $("#back").on('click',function(){
            window.scrollTo(0, 0);
            window.location.replace("./");
        });

        $('body').scrollspy({
            target: '.bs-docs-sidebar',
            offset: 250
        });

        if($( window ).width() < 1024) {
            $( ".bback" ).hide();
            $( "div.wback" ).attr('class',  "col-md-12 col-sm-12 wback" );
        }
        $( window ).resize(function() {
            if($( window ).width() < 1024) {
                $( ".bback" ).hide();
                $( "div.wback" ).attr('class',  "col-md-12 col-sm-12 wback" );
            } else {
                $( ".bback" ).show();
                $( "div.wback" ).attr('class',  "col-md-6 col-sm-6 wback" );
            }
        });
    }

}