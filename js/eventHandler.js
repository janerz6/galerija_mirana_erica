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

    basicGalleryEvents();

    /* Interview */
    $('.interviewPage .indexContainer a').on('click', function (e) {
        e.preventDefault();
        $(".indexContainer ul li").removeClass("active");
        $(this).parent().addClass("active");

        window.scrollTo(0, $($(this).attr("href")).position().top);
    });

}
