/**
 * Created by Janez on 31.3.2016.
 */
function moveBtns() {
    var left = $("#image").position().left;
    var right = $("#image").position().left + $("#image").width();
    var top = $("#image").position().top;
    var height = $("#image").height();
    var btnHeight = $("#prevImgBtn").height();
    var btnWidth = $("#prevImgBtn").width();
    //console.log(left + " " + right);
    var h = top + height / 2 - btnHeight / 2;
    $("#prevImgBtn").css({left: left - btnWidth * 3 / 4, position: 'absolute !important', top: h});
    $("#nextImgBtn").css({left: right - btnWidth * 1 / 4, position: 'absolute !important', top: h});
}

function toggleFullscreen(tm) {
    var time = tm || 1200;
    if (!fullscreenMode) {
        $("#imgContainer").animate({height: '90vh'}, time);
        //$("#prevImgBtn").animate({position:'fixed !important',top:'50%',left:'2%'},1500);
        //$("#nextImgBtn").animate({position:'fixed !important',top:'50%',right:'2%'},1500);
    }
    else {
        $("#imgContainer").animate({height: '65vh'}, time);
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
function registerEvents() {
    setTimeout(moveBtns, 200);
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

    /* basic gallery page */
    $("#toggleViewType").on('click', function () {
        $("#viewsMenu").slideToggle();
    });

    /* Basic gallery */
    $("#toggleZoom").on('click', function () {
        if (!innerZoomActive) {
            innerZoomActive = true;
            $('#image').elevateZoom(innerZoomConfig);
        }
        else {
            innerZoomActive = false;
            $.removeData($("#image"), 'elevateZoom');
        }
        console.log('innerZoomActive:', innerZoomActive);
    });

    $("#nextImgBtn").on('click', function (e) {
        e.preventDefault();
        if (fullscreenMode) {
            fullscreenMode = !fullscreenMode;
            selectedImageIdx = (selectedImageIdx + 1) % (data.images.length);
            //Trigger redraw
            $(window).trigger("hashchange");
            toggleFullscreen(1);

        }
        else {
            selectedImageIdx = (selectedImageIdx + 1) % (data.images.length);
            //Trigger redraw
            $(window).trigger("hashchange");
        }
    });
    $("#prevImgBtn").on('click', function (e) {
        e.preventDefault();
        selectedImageIdx = (selectedImageIdx - 1)
        if (selectedImageIdx === 0)
            selectedImageIdx = (data.images.length - 1);
        //Trigger redraw
        $(window).trigger("hashchange");
    });

    $("#fullscreen, #image").on('click', function () {
        toggleFullscreen();
    });

    $(window).resize(moveBtns);

    /* Interview */
    $('.interviewPage .indexContainer a').on('click', function (e) {
        e.preventDefault();
        $(".indexContainer ul li").removeClass("active");
        $(this).parent().addClass("active");

        window.scrollTo(0, $($(this).attr("href")).position().top);
    });

}