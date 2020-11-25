const arrow = () => {
    const upBtn = document.querySelector('#totop');
   
    window.addEventListener('scroll', () =>{
        console.log('pageyoffset',pageYOffset);
        console.log('clientheight',document.documentElement.clientHeight);
        if (pageYOffset > 750)
        upBtn.style.display = 'block';
        else
        upBtn.style.display = 'none';
    });
};

export default arrow;