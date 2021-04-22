headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    checkHeaderPosition();

    function checkHeaderPosition() {

        if ($(window).scrollTop() > 40) {
            $topHeader.addClass(scrollClass);
        } else {
            $topHeader.removeClass(scrollClass);
        }

        requestAnimationFrame(checkHeaderPosition);
    }
}

function headerHeight() {
    let headerHeight = document.querySelector('.header').offsetHeight,
        body = document.querySelector('body');
    // document.querySelector('.header').style.minHeight = headerHeight + "px";
    body.style.paddingTop = headerHeight + "px";
    console.log(headerHeight)
}
headerHeight();

$(window).on('resize', function(){
    headerHeight();
});


// let catalogMenuName = 'headerMenu';
//
// window.catalogMenu = new menu(
//     {
//         name: catalogMenuName,
//         button: '.header__mobile-button, .header__bottom-mobile-header-button',
//         buttonActiveClass: 'active',
//         menuBlock: '.header__bottom-wrapper',
//         menuActiveClass: 'active',
//     }
// );