import arrow from './modules/arrow';
import burgerMenu from './modules/burgerMenu';
import calc from './modules/calc';
import dropMenu from './modules/dropMenu';
import gallery from './modules/gallery';
import gift from './modules/gift';
import indexForm from './modules/indexForm';
import menu from './modules/menu';
import modalWindow1 from './modules/modalWindow1';
import modalWindow2 from './modules/modalWindow2';
import promocode from './modules/promocode';
import closePopUp from './modules/closePopUp';
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
gift();
indexForm();
menu();
modalWindow1();
modalWindow2();
promocode();
closePopUp();
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