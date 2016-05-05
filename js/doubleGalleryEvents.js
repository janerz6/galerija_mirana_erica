/**
 * Created by Luka on 4.5.2016.
 */

function doubleGalleryEvents(){
    /*$("#setupImage").each(function(){
        $(this).on('click', function(){
            console.log("ZOOM NA SLIKO");
            //$(this).width($(this).width()+$(this).width())
        });
    });*/
    $("setupImage").on('click', function(){
        console.log("Zoom na sliko");
        alert("Zoom na sliko");
    });
};