"use strict"

function toggleIcon() {
    $(".icon").on("click", function () {
        $(".icon").toggleClass("active")
        $(".drop-down").slideToggle(300)
    })
}

function closeMobileMenu() {
    $(".drop-down").on("click", "a", function () {
        $(".icon").trigger("click")
    })
}


//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)

function revealDetail() {
    document.getElementById("hiddenMessage1").style.display = 'block';
}

function revealFAQs() {
    document.getElementById("hiddenMessage2").style.display = 'block';
}

function revealProductSpecs() {
    document.getElementById("hiddenMessage3").style.display = 'block';
}


$('.head').click(function () {
    $(this).toggleClass('active');
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
    $(this).parent().find('.content').slideToggle(280);
});