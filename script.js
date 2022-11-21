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

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

$(function () {
    // Your Code from here on down. Don't delete that line above!


    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2
    });

    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    });

    $('.single-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        infinite: true,
        dots: true
    });

    $('.my-slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    // End of Your Code . Don't delete that line below!!

});