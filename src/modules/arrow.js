const arrow = () => {
   
    const upBtn = document.querySelector('#totop');
    upBtn.style.display = 'none';
    window.addEventListener('scroll', () =>{
     
        if (pageYOffset > 750)
        upBtn.style.display = 'block';
        else
        upBtn.style.display = 'none';
    });
};

export default arrow;