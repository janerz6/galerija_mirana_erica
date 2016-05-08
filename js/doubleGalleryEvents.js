/**
 * Created by Luka on 4.5.2016.
 */
var clickedImage;
function doubleGalleryEvents() {
    //location.reload(true);

    $(".overlayScreen").hide();
    $(".setupImage").click(function () {
        showOverlayScreen();
        clickedImage = $(this);
        var addr = clickedImage.attr('src');
        //onsole.log("NASLOV SLIKE: "+clickedImage);
        $('#shownImage').attr('src', addr);
    });

    $("#exitButton").click(function(){
        hideOverlayScreen();
    });

    $("#moveRight").click(function(){
        clickedImage = clickedImage.next();
        var addr = clickedImage.attr('src');
        $('#shownImage').attr('src', addr);
    });

    $("#moveLeft").click(function(){
        clickedImage = clickedImage.prev();
        var addr = clickedImage.attr('src');
        $('#shownImage').attr('src', addr);
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