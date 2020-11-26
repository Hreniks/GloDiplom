const header = () => {


    document.body.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);

        const closeElement = (elem) =>{
            if (target.classList.contains('overlay') || target.closest('.close-form')){
                elem.style.display = 'none';   
            }
        };

        const dropMenu = () => {

            const dropMenu = document.querySelector('.clubs-list ul');

            if (target.closest('.club-select')) {
                if (dropMenu.style.display === 'block') {
                    dropMenu.style.display = 'none';
                }
                else {
                    dropMenu.style.display = 'block';
                }

            }
            else if (!target.closest('.club-select')) {
                dropMenu.style.display = 'none';
            }
        };

        dropMenu();

        const popup = () =>{
            const popup = document.querySelector('#free_visit_form');
            const thanks = document.querySelector('#thanks');
            const openPopUp = () =>{
               
                if (target.classList.contains('open-popup')){
                    popup.style.display = 'block';
                }
            };
            openPopUp();
    
            closeElement(popup);
            
            if (target.classList.contains('close-btn')){
                thanks.style.display = 'none';
            }
        };

        popup();


        const callbackBtn = () =>{
            const btn = document.querySelector('.callback-btn');
            const callbackForm = document.querySelector('#callback_form');
            if (target === btn) {
                callbackForm.style.display = 'block';
            }

           closeElement(callbackForm);
        };

        callbackBtn();
        
        

        const gift = () => {
            const modalWindow = document.querySelector('#gift');
            const gift = document.querySelector('.fixed-gift');
            
            if (target.closest('.fixed-gift')) {
                modalWindow.style.display = 'block';
                gift.remove();
            }

           if (modalWindow) closeElement(modalWindow);
        };
        gift();
    });
};

export default header;