import arrow from './modules/arrow';
import burgerMenu from './modules/burgerMenu';
import calc from './modules/calc';
import dropMenu from './modules/dropMenu';
import gallery from './modules/gallery';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import header from './modules/header';
import servicesSlider from './modules/servicesSlider';


header();
arrow();
burgerMenu();
calc();
dropMenu();
gallery();
sendForm();
mainSlider();
const carousel = new servicesSlider({
    main: '.services-wrapper',
    wrap: '.services-slider',
    next: '.services-next',
    prev: '.services-prev',
    slidesToShow: 3,
    infinity: true
});

carousel.init();