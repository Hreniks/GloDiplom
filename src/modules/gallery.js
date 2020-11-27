const gallery = () => {
    const slider = document.querySelector('.gallery-slider');
    const slide = document.querySelector('.gallery-slider').querySelectorAll('.slide');
    slide.forEach(elem => {
        if (elem !== slide[0])elem.style.display = 'none';
    });

    
    let currentSlide = 0;

    const hidePrevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const showNextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };

    const autoPlaySlide = () => {
       // const dot = document.createElement();
        hidePrevSlide(slide, currentSlide);

        currentSlide++;

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        showNextSlide(slide, currentSlide);
    };


    let interval;
    const startSlide = (time = 3000) => {
        
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        if (!target.closest('.slider-arrow')) return;

        hidePrevSlide(slide, currentSlide);
    

        if (target.closest('.next')) {
            currentSlide++;
        }
        else if (target.closest('.prev')) {
            currentSlide--;
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        showNextSlide(slide, currentSlide);

    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.closest('.next') || event.target.closest('.prev') || event.target.closest('.slide')) {
            stopSlide();
        }
    });


    slider.addEventListener('mouseout', (event) => {
        if (event.target.closest('.next') || event.target.closest('.prev')) {
            startSlide();
        }
    });

    startSlide(4000);
};

export default gallery;