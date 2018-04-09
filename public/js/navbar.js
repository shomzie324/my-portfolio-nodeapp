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

var skillWrapper = document.getElementsByClassName("skill-wrapper")[0];
var skillHeaderContent = document.getElementsByClassName("skill-header-content")[0];
var contactSection = document.getElementById("contact-section")
var contactInfo = document.getElementsByClassName("contact-info")[0];

skillWrapper.addEventListener("mouseover", () => {
    skillWrapper.classList.add("animated")
    skillWrapper.classList.add("zoomIn")
    skillHeaderContent.classList.add("animated")
    skillHeaderContent.classList.add("zoomIn")
})

contactSection.addEventListener("mouseover", () => {
    contactInfo.classList.add("animated")
    contactInfo.classList.add("zoomIn")
})

