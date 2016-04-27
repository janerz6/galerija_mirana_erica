/**
 * Created by JanezErzen on 27.4.2016.
 */

function basicGalleryEvents() {
    /* basic gallery page */

    /* Basic gallery */
    $("#toggleZoom").on('click', function () {
        var img = $('#image');
        if (!innerZoomActive) {
            console.log("Add zoom");
            innerZoomActive = true;
            img.elevateZoom(innerZoomConfig);
            $(this).addClass("active");
        }
        else {
            $('.zoomContainer').remove();
            console.log("Remove zoom");
            innerZoomActive = false;
            img.removeData('elevateZoom');
            $(this).removeClass("active");
        }
        console.log('innerZoomActive:', innerZoomActive);
    });

    $("#nextImgBtn").on('click',nextImg);
    $("#prevImgBtn").on('click',prevImg);

    function nextImg(e) {
        e.preventDefault();
        selectedImageIdx = (selectedImageIdx + 1) % (data.images.length);
        if (fullscreenMode) {
            fullscreenMode = !fullscreenMode;
            //Trigger redraw
            $(window).trigger("hashchange");
            toggleFullscreen(1);
        }
        else {
            //Trigger redraw
            $(window).trigger("hashchange");
        }
    };
    function prevImg (e) {
        e.preventDefault();
        selectedImageIdx = (selectedImageIdx - 1)
        if (selectedImageIdx === 0)
            selectedImageIdx = (data.images.length - 1);

        if (fullscreenMode) {
            fullscreenMode = !fullscreenMode;
            //Trigger redraw
            $(window).trigger("hashchange");
            toggleFullscreen(1);
        }
        else {
            //Trigger redraw
            $(window).trigger("hashchange");
        }
    };

    $("#fullscreenToggleBtn, #image").on('click', function () {
        toggleFullscreen();
    });

    //Hover efect for buttons
    $('body').on({
        mouseenter: function() {
            $('.chevron').animate({opacity:1},300);
        },
        mouseleave: function() {
            $('.chevron').animate({opacity:0},300);
        }
    }, '#image,.chevron');

    $(window).resize(moveBtns);

}