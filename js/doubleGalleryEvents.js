/**
 * Created by Luka on 4.5.2016.
 */

function doubleGalleryEvents() {
    //location.reload(true);

    $(".overlayScreen").hide();
    $(".setupImage").click(function () {
        showOverlayScreen();
        var clickedImage = $(this).attr('src');
        //onsole.log("NASLOV SLIKE: "+clickedImage);
        $('#shownImage').attr('src', clickedImage);
    });

    $("#exitButton").click(function(){
        hideOverlayScreen();
    });

    function showOverlayScreen(){
        if($(".overlayScreen").is(":hidden")) {
            $(".overlayScreen").fadeIn(1000);
        }

    }

    function hideOverlayScreen(){
        $(".overlayScreen").fadeOut(1000);
    }
};