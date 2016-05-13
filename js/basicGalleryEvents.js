/**
 * Created by JanezErzen on 27.4.2016.
 */

function parseBool(value) {
    return (value === "true") ? true : false;
}
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

    //Navigacija med slikami
    $("#nextImgBtn").on('click', nextImg);
    $("#prevImgBtn").on('click', prevImg);
    $("body").keydown(function (e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
            prevImg(e);
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
            nextImg(e);
        }
    });


    $("body").on('click', '#fullscreenToggleBtn,#image', function () {
        toggleFullscreen(800);
    });

    $("#toggleLanguage").on('click', function () {
        sessionStorage.setItem("language", sessionStorage.getItem("language") === 'true' ? false : true);
        $(window).trigger("hashchange");
    });



    //Hover efect for buttons
    setInterval(moveBtns,500);

    $('#image,.chevron').mouseover(function () {
            $('.chevron').animate({opacity: 1}, 500);
        });

    $('#image,.chevron').mouseout(function () {
            $('.chevron').animate({opacity: 0}, 500);
        });

    $(window).on('resize', moveBtns);
}

function moveBtns() {
    var left = $("#image").position().left;
    var right = $("#image").position().left + $("#image").width();
    var top = $("#image").position().top;
    var height = $("#image").height();
    var btnHeight = $("#prevImgBtn").height();
    var btnWidth = $("#prevImgBtn").width();
    //console.log(left + " " + right);
    var h = top + height / 2 - btnHeight / 2;
    $("#prevImgBtn").css({left: left - btnWidth, position: 'absolute !important', top: h});
    $("#nextImgBtn").css({left: right, position: 'absolute !important', top: h});
}

function toggleFullscreen(tm) {
    var time = tm || 1200;
    //Remove zoom feature
    if (innerZoomActive) {
        $('.zoomContainer').remove();
        console.log("Remove zoom");
        innerZoomActive = false;
        $('#image').removeData('elevateZoom');
        $("#toggleZoom").removeClass("active");
    }

    if (!fullscreenMode) {

        $("#imgContainer").animate({height: '98vh'}, time);
        $("#fullscreenToggleBtn").addClass("active");
    }
    else {
        $("#imgContainer").animate({height: '65vh'}, time);
        $("#fullscreenToggleBtn").removeClass("active");
    }
    fullscreenMode = !fullscreenMode;

    $(".bs-header").slideToggle(time);
    $(".galleryBasicImgDescription").slideToggle(time);

    var count = 0;
    var id = setInterval(function () {
        moveBtns();
        if (count === time / 10) {
            clearInterval(id);
        }
        count++
    }, 10);
}

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
function prevImg(e) {
    e.preventDefault();
    selectedImageIdx = (selectedImageIdx - 1);
    if (selectedImageIdx === -1)
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