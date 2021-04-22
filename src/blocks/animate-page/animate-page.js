window.onload = function () {
    window.$animateWrapper = document.getElementById("animate-wrapper");
    if ($animateWrapper) {
        customScroll();
    }
};

function customScroll() {
    let positions = [0, 0];

    function setPositionsSections() {
        let $firstSection = document.querySelector('.section__preview-materials');
        let $secondSection = document.querySelector('.tab-materials');
        let $thirdScrollSection = document.querySelector('.third-scroll-section');
        let $header = document.querySelector('.header');
        positions[0] = parseInt(offset($firstSection).top + $firstSection.getBoundingClientRect().height - pageYOffset - $header.getBoundingClientRect().height);
        positions[1] = parseInt(positions[0] + $secondSection.getBoundingClientRect().height);
        document.body.style.height = (positions[0] + positions[1] + $thirdScrollSection.getBoundingClientRect().height) + 90 + "px";
    }

    setPositionsSections();

    function transform(scroll) {
        if (scroll <= positions[0]) {
            $animateWrapper.setAttribute("style", `transform: translateY(-${pageYOffset}px)`);
        } else if (scroll <= positions[1]) {
            $animateWrapper.setAttribute("style", `transform: translateY(-${positions[0]}px)`);
            let height = positions[1] - positions[0];
            let innerScroll = scroll - positions[0];
            let percentage = innerScroll / (height / 100);

            if (percentage < 34) {
                callSlider.showSlide(0);
            } else if (percentage < 66) {
                callSlider.showSlide(1);
            } else {
                callSlider.showSlide(2);
            }
        } else {

            $animateWrapper.setAttribute("style", `transform: translateY(-${pageYOffset - (positions[1] - positions[0])}px)`);
        }
    }

    window.addEventListener('scroll', function () {
        transform(parseInt(pageYOffset));
    });

    function offset(el) {
        let rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }
}

