import "magnific-popup";
// npm i magnific-popup --save

$(document).ready(function() {

    $(".popup").magnificPopup({
        type: 'inline',
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    // Video popups

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // Image popups
    $('.product-preview__popup').magnificPopup({
        // delegate: 'a',
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

});
