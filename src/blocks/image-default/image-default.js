$('body').on('mousemove', function(e){
    let centerGorizontal = $(this).width()/2;
    let centerVertical = $(this).height()/2;

    let resultHover1 = centerGorizontal - e.offsetX;
    let resultHover2 = centerVertical - e.offsetY;

    $('.hover-effect').css({
        'transform':'perspective(800px) rotateY(' + resultHover2/200 +'deg)'
    })
});