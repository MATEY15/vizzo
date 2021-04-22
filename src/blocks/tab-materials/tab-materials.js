function sliderMaterials() {
    let $itemTabWrapper = document.getElementsByClassName('tab-materials__menu')[0];
    let $itemTab = document.querySelectorAll(".tab-materials__list");
    let $itemSlideWrapper = document.getElementsByClassName("tab-materials__slider")[0];
    let $itemSlide = document.querySelectorAll(".tab-materials__slider-item");
    let tabActiveClass = "tab-materials__list--active";
    let itemSlideActiveClass = "tab-materials__slider-item--active";

    this.hideSlide = () => {
        hideSlide();
    };
    this.showSlide = (index) => {
        hideSlide();
        showSlide(index);
    };
    this.getActiveSlide = () => {
        return getActiveSlide();
    };

    function getActiveSlide() {
        return $itemTabWrapper.querySelector('.' + tabActiveClass).dataset.numberTab;
    }

    function hideSlide() {
        $itemTab.forEach((element) => {
            element.classList.remove(tabActiveClass);
        });
        $itemSlide.forEach((element) => {
            element.classList.remove(itemSlideActiveClass);
        });
    }

    function showSlide(index) {
        $itemTab[index].classList.add(tabActiveClass);
        $itemSlide[index].classList.add(itemSlideActiveClass);
    }
}

window.callSlider = new sliderMaterials();