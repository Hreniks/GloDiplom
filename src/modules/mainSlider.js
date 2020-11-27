const mainSlider = () => {

    const slide = document.querySelector('.main-slider').querySelectorAll('.slide');
    
    let currentSlide = 0;

    const hidePrevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const showNextSlide = (elem, index) => {
        elem[index].style.display = 'inline-block';
    };

    const autoPlaySlide = () => {

        hidePrevSlide(slide, currentSlide);

        currentSlide++;

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        showNextSlide(slide, currentSlide);
    };

    const startSlide = (time = 3000) => {
        let interval;
        interval = setInterval(autoPlaySlide, time);
    };

    startSlide(4000);

};

export default mainSlider;