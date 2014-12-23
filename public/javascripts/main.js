jQuery(window).load(function () {
	$(window).scroll(function() {
        if ($(document).scrollTop() > 150) {
            $('#masthead').addClass("navbar-scrolled");
            $('.go-top').css('bottom', '12px');
            $('.dropdown-menu').css('margin-top', '-15px');
        } else {
            $('#masthead').removeClass("navbar-scrolled");
            $('.go-top').css('bottom', '-44px');
            $('.dropdown-menu').css('margin-top', '-25px');
        }
    });
});

$('.go-top').on("click", function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

//If an a element tag doesn't have a title than give it one via the text of sibling elements
//Maybe can use on blog
/*$("a").each(function() {
    if (! $(this).prop('title')) {
        $(this).prop('title', $(this).text());
    }
});*/

$('#sprint').on("click", function() {
    $(".selected-img").removeClass("selected-img");
    $("#sprintImg").addClass("selected-img");

    $(".selected").removeClass("selected");
    $("#sprint").addClass("selected");
});

$('#project').on("click", function() {
    $(".selected-img").removeClass("selected-img");
    $("#projectImg").addClass("selected-img");

    $(".selected").removeClass("selected");
    $("#project").addClass("selected");
});

$('#release').on("click", function() {
    $(".selected-img").removeClass("selected-img");
    $("#releaseImg").addClass("selected-img");

    $(".selected").removeClass("selected");
    $("#release").addClass("selected");
});