function materialHover() {
    let $materialItem = $('.materials-gallery__item');
    let materialItemActiveClass = 'materials-gallery__item--active';
    let $materialTitle = $('.content-default__title');
    let $materialDesc = $('.content-default__desc');

    $materialItem.hover(function(){
        $materialItem.removeClass(materialItemActiveClass)
        $(this).addClass(materialItemActiveClass)
        $materialTitle.text($(this).text())
        $materialDesc.text($(this).data('material-text'))
    });
}

materialHover()