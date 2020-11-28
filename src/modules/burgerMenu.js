const burgerMenu = () => {

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 768) {
            document.querySelector('.menu-button').classList.remove('hidden-large');
        }
        else document.querySelector('.menu-button').classList.add('hidden-large');
    });



    window.addEventListener('scroll', (e) => {
        
        if (window.pageYOffset >= 187) {
            document.querySelector('.top-menu').style.position = 'fixed';
        }
        else document.querySelector('.top-menu').style.removeProperty('position');
    });

    document.body.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.menu-button')) {
            document.querySelector('.popup-menu').style.display = 'flex';
        }

        if (e.target.closest('img[src="images/delete.png"]')){
            document.querySelector('.popup-menu').style.display = 'none';
        }
    });

    const menu = document.querySelector('.popup-menu');
    const smoothLinks = menu.querySelectorAll('a[href^="#"]');
    
    for (let i = 0; i < smoothLinks.length; i++) {

        smoothLinks[i].addEventListener('click', e => {
            e.preventDefault();


            const id = smoothLinks[i].getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.querySelector('.popup-menu').style.display = 'none';
        });
    }
};

export default burgerMenu;