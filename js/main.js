$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        // effect: 'fade',
        // speed: 500,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
    });
    ///////product
    var topViewswiper = new Swiper('.topView.swiper-container', {
        spaceBetween: 32,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 13,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
            },
        },
    });
    var newArrivalswiper = new Swiper('.newArrival.swiper-container', {
        spaceBetween: 32,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 13,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
            },
        },
    });
    var offersswiper = new Swiper('.offers.swiper-container', {
        spaceBetween: 32,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 13,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
            },
        },
    });
    ///////brands
    var brandsswiper = new Swiper('.brands-slider.swiper-container', {
        spaceBetween: 92,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2.8,
                spaceBetween: 28,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 28,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 28,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 28,
            },
            1500: {
                slidesPerView: 6,
            },
        },
    });
    ///search
    if ($(window).width() <= 992) {
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }
    ////acc
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
            $(this).siblings('.cats-display').css('padding-top', "10px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
            $(this).siblings('.cats-display').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
        $(".mo-accordion").not(this).siblings('.cats-display').css('padding-top', "0");
    })

    ////menu
    $('.sub-ul').on('show.bs.collapse', function () {
        $(".sub-ul").not(this).collapse('hide');
        $(".sub-ul").parents(".drop-link").addClass('acc-active');
        $(".sub-ul").not(this).parents(".drop-link").removeClass('acc-active');
    });
    $('.sub-ul').on('hide.bs.collapse', function () {
        $(this).parents(".drop-link").removeClass('acc-active');
    });

    $('.mo-menu-icon').click(function () {
        $(".menu-overlay").fadeIn(400);
        $("nav").addClass("nav-in");
        $("body").addClass("overflow");
    });
    $('.menu-overlay').click(function () {
        $(".menu-overlay").fadeOut(400);
        $("nav").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.menu-close').click(function () {
        $(".menu-overlay").fadeOut(400);
        $("nav").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
});