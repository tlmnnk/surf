//= ../../../node_modules/slick-carousel/slick/slick.js

$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        asNavFor: '.slider-dotshead',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="assets/img/arrow-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="assets/img/arrow-right.svg">'
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'

    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="assets/img/arrow-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="assets/img/arrow-right.svg">'

    });
});
