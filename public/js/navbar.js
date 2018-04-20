//Menu toggle button

$(document).ready(function () {

    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    })

    $(".menu-icon").on("click", function () {
        $("nav ul li a").toggleClass("showtext");
    })
})

//scrolling effect
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
        $("#logo-icon").removeClass("logo").addClass("logowhite");
    }
    else {
        $("nav").removeClass("black");
        $("#logo-icon").removeClass("logowhite").addClass("logo");
    }
})

/*------------------------- 

Scrolling animations 

--------------------------*/

if($(".inView").is(":visible")){
    $(".inView").addClass(" animated bounceInLeft");
}

