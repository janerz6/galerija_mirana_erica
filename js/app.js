/**
 * Created by Janez on 31.3.2016.
 */

//Function that loads templates
Handlebars.getTemplate = function(name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url : './templates/' + name + '.handlebars',
            success : function(data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async : false
        });
    }
    return Handlebars.templates[name];
};

//Basic routing
$(function(){

    // Bind the event.
    $(window).on('hashchange',hashchanged);

    // Trigger the event (useful on page load).
    hashchanged();

});
function getParameter(p) {
// returns NULL if the parameter p is not found
    var re = new RegExp('&'+p+'=([^&]*)','i');
    // for testing,
    //   replace with window.location.search in real life!
    var c = window.location.search;
    console.log(c);
    return (c=c.replace(/^\?/,'&').match(re)) ?c=c[1] :c='NULL';
};

function hashchanged(){
    var search = null;
    if(window.location.hash === '')
        hash = 'fullscreen';
    else {
        var hash = location.hash.replace(/^#/, '');
        search = getParameter('search');

    }

    var testCompiledTemplate = testCompiledTemplate = Handlebars.getTemplate(hash);;
    var testRenderedTemplate;

    //Fill necessary data and render it to a template
    switch(hash) {
        case 'interview':
            testRenderedTemplate = testCompiledTemplate({city: "Ljubljana", number: "3",street:"Prešernova ulica"});
            break;
        case 'galleryBasic':
            testRenderedTemplate = testCompiledTemplate({imageList:data.images});
            break;
        default :
            testRenderedTemplate = testCompiledTemplate();
            break;
    }



    //Overwrite the contents of #target with the renderer HTML
    document.getElementById('app-content').innerHTML = testRenderedTemplate;

    registerEvents();
    if(search !== null && document.getElementById(search))
        document.getElementById(search).scrollIntoView();
}

$(document).ready(function(){
    //Init bootstrap material design
    //s$.material.init();
});

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