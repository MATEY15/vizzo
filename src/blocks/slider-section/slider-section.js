require('slick-carousel');

let sliderProduct = function(){
    let sliderMain = $('.slider-section__main');

    sliderMain.each(function(index, item){
        let sliderNavigate = $(item).next(".slider-section__navigate");
        $(item).slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            speed: 200,
            autoplaySpeed: 7000,
            appendArrows: sliderNavigate,
            prevArrow: '<div class="slider-section__nav slider-section__nav--prev"><svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L2 12.5L13 23" stroke="#00BFBF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.41016 12.5H29.9982" stroke="#00BFBF" stroke-width="2.5" stroke-linecap="round"/></svg></div>',
            nextArrow: '<div class="slider-section__nav slider-section__nav--next"><svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L2 12.5L13 23" stroke="#00BFBF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.41016 12.5H29.9982" stroke="#00BFBF" stroke-width="2.5" stroke-linecap="round"/></svg></div>',
            fade: true,
            cssEase: 'linear',
        });
    });
};

sliderProduct();