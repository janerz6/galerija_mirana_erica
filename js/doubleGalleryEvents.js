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
        var indeks = clickedImage.attr('name');
        console.log(indeks);
        //console.log("INDEX: "+clickedImage.index());
        $('#shownImage').attr('src', addr);
    });

    $("#exitButton").click(function(){
        hideOverlayScreen();
    });

    $("#moveRight").click(function(){
            //alert(clickedImage.index());
            //alert(data.setupImages.length);
            var indeks = parseInt(clickedImage.attr('name'));
            if(indeks < data.setupImages.length - 1) {
                clickedImage = clickedImage.next();
                var addr = clickedImage.attr('src');
                $('#shownImage').attr('src', addr);
                indeks ++;

                if(indeks === (data.setupImages.length - 1)){
                    $("#moveRight").hide();
                }

                if(indeks > 0){
                    $("#moveLeft").show();
                }
            }
    });

    $("#moveLeft").click(function(){
        var indeks = parseInt(clickedImage.attr('name'));
        if(indeks > 0) {
            clickedImage = clickedImage.prev();
            var addr = clickedImage.attr('src');
            $('#shownImage').attr('src', addr);
            indeks--;
            if(indeks === 0){
                $("#moveLeft").hide();
            }
            if(indeks < data.setupImages.length - 1){
                $("#moveRight").show();
            }

        }
    });

    function showOverlayScreen(){
        if($(".overlayScreen").is(":hidden")) {
            $(".overlayScreen").fadeIn(1000);
            $(".doubleHeader").hide();
        }

    }

    function hideOverlayScreen(){
        $(".overlayScreen").fadeOut(1000);
        $(".doubleHeader").show();
    }

    //keyboard listeners

    $("body").keydown(function(e){
        //left
        /*if(e.keyCode == 37){
            clickedImage = clickedImage.prev();
            var addr = clickedImage.attr('src');
            $('#shownImage').attr('src', addr);
        }

        if(e.keyCode == 39){
            clickedImage = clickedImage.next();
            var addr = clickedImage.attr('src');
            $('#shownImage').attr('src', addr);
        }*/

        if(e.keyCode == 27){
            hideOverlayScreen();
        }

    });
};