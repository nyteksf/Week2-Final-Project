/*
    
RESPONSIVE NAVBAR MENU
    
*/

function openNavMenu() {
    document.body.classList += " nav-menu--open";
}

function closeNavMenu() {
    document.body.classList.remove("nav-menu--open");
}

/*

TESTIMONIAL CAROUSEL

*/

$(".testimonial__carousel").slick();

$(".slick-prev").css("display", "none");
$(".slick-next").css("display", "none");

$(".testimonial__author--nav-arrow-wrapper-left").click(function () {
    $(".slick-prev").click();
});

$(".testimonial__author--nav-arrow-wrapper-right").click(function () {
    $(".slick-next").click();
});
