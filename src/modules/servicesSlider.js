export default class servicesSlider {
    constructor({ main, wrap, position = 0, next, prev,infinity = false, slidesToShow = 3 }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.ceil(100 / this.slidesToShow),
        };


    }

    init() {
        this.addGLoClass();
        this.addStyles();

        if (this.prev && this.next) {
            this.controlSlider();
        }
        else {
            this.addArrow();
            this.controlSlider();
        }
        console.log(this.options.widthSlide);
    }

    addGLoClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            if (!item.classList.contains('slider-arrow'))
                item.classList.add('glo-slider__item');
        }
    }

    addStyles() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
        .glo-slider{
            overflow: hidden !important;
        }
        .glo-slider__wrap{
            display: flex !important;
            transition: transform 0.5s; !important
            will-change: transform !important;
        }
        
        .glo-slider__item{
            flex: 0 0 ${this.options.widthSlide}% !important;
            margin: auto 0 !important;

        }`;
        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position < 0) {
            --this.options.position;
            if (this.options.position < 0){
                this.options.position = this.slides.length - this.slidesToShow;
            }
            
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
            ++this.options.position;
            console.log(this.options.position);
            console.log(this.slides.length - this.slidesToShow);
            if (this.options.position + 2 > this.slides.length - this.slidesToShow){
                
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
        
    }

    addArrow() {

    }
}

