const gallery = () => {
    const slider = document.querySelector('.gallery-wrapper');
    const slide = document.querySelector('.gallery-slider').querySelectorAll('.slide');
    
    
    slide.forEach(elem => {
        if (elem !== slide[0])elem.style.display = 'none';
    });

    
    let currentSlide = 0;

    for (let i = 0; i < slide.length; i++){
        const li = document.createElement('li');
        if (i === 0) li.classList.add('slick-active'); 
        li.classList.add('dot');
        document.querySelector('.slider-dots').appendChild(li);
        const button = document.createElement('button');
        button.classList.add('dot-btn');
        li.appendChild(button);
    }

    const hidePrevSlide = (elem, index) => {
        elem[index].style.display = 'none';
       
    };

    const showNextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
        
    };

    const hidePrevDot = (elem,index,dotClass) => {
        
       elem[index].classList.remove(dotClass);
    };

    const showNextDot = (elem,index,dotClass) => {
        elem[index].classList.add(dotClass);
     };

    const autoPlaySlide = () => {
        const dots = document.querySelectorAll('.dot');
        hidePrevSlide(slide, currentSlide);
        hidePrevDot(dots, currentSlide, 'slick-active');
        currentSlide++;

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        showNextSlide(slide, currentSlide);
        showNextDot(dots, currentSlide, 'slick-active');
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
        
        const dots = document.querySelectorAll('.dot');
        let target = event.target;
        if (!target.closest('.slider-arrow, .dot')) return;

        hidePrevSlide(slide, currentSlide);
        hidePrevDot(dots, currentSlide, 'slick-active');
    

        if (target.closest('.gallery-next')) {
            currentSlide++;
        }
        else if (target.closest('.gallery-prev')) {
            currentSlide--;
        }
        else if (target.closest('.dot-btn')) {
            document.querySelectorAll('.dot-btn').forEach((elem, index) => {
                if (elem === target) {
                    
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        showNextSlide(slide, currentSlide);
        showNextDot(dots, currentSlide, 'slick-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.closest('.gallery-next') || event.target.closest('.gallery-prev') || event.target.closest('.slide')) {
            stopSlide();
        }
    });


    slider.addEventListener('mouseout', (event) => {
        if (event.target.closest('.gallery-next') || event.target.closest('.gallery-prev') || event.target.closest('.slide')) {
            startSlide();
        }
    });

    startSlide(4000);


    
};

export default gallery;