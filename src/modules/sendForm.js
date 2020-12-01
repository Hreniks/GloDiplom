const sendForm = () => {
    
    const callbackForm = document.querySelector('#form1');
    const vizitForm = document.querySelector('#form2');
    const bannerForm = document.querySelector('#banner-form');
    const cardOrderForm = document.querySelector('#card_order');
    const footerForm = document.querySelector('#footer_form');
    const statusMessage = document.createElement('div');
    const thanks = document.querySelector('#thanks');
   
    const submitForm = (form) =>{

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            
            const formData = new FormData(form);
            const body = {};
            
            formData.forEach((val, key) => {
                body[key] = val;
            });
        
            statusMessage.style.display = 'block';
            statusMessage.classList = 'statusMessage';
            statusMessage.style.color = (form === cardOrderForm) ? "#000000" : '#ffff';
            statusMessage.textContent = 'Идет отправка...';
            statusMessage.style.fontSize = '18px';
            form.appendChild(statusMessage);

            if (form === footerForm){
                if (!document.querySelector("#footer_leto_schelkovo").checked && !document.querySelector("#footer_leto_mozaika").checked){
                    statusMessage.textContent = 'Требуется выбрать клуб';
                    return;
                }
            }
            
            if (form.querySelector('.checkbox') && form.querySelector('.checkbox').checked === false){
                statusMessage.textContent = 'Требуется подтвердить согласие на обработку данных';
                statusMessage.style.color = 'red';
                return;
            }
            else if (form.querySelector('.phone-input').value.length < 10){

                statusMessage.textContent = 'Введите корректный телефон';
                statusMessage.style.color = 'red';
                return;
            }
            else
            postData(body).then(response => {
                

                if (response.status == 200){

                    if (form === callbackForm || form === vizitForm) {
                        form.style.display = 'none';
                        form.parentNode.style.display = 'flex';
                        form.parentNode.style.justifyContent = 'center';
                        form.parentNode.style.alignItems = 'center';
                        form.parentNode.style.fontSize = '18px';
                        form.parentNode.style.color = 'rgb(255 209 26)';
                        form.parentNode.textContent = 'Успешно';
                        setTimeout(() => {
                            if (form === callbackForm){
                                document.querySelector('#callback_form').style.display = 'none';
                            }
                            else document.querySelector('#free-vizit_form').style.display = 'none';
                        },3000);
                        }

                    if (form === bannerForm || form === footerForm){
                        thanks.style.display = 'block';
                        statusMessage.remove();
                    }
                    else{
                        statusMessage.textContent = 'Успешно';
                        setTimeout(() => {
                            statusMessage.textContent = '';
                        },3000);
                    }
                   
                }
                else if (response.status !== 200) {
                    if (form === bannerForm || form === footerForm){
                        statusMessage.remove();
                        thanks.style.display = 'block';
                        thanks.querySelector('p').textContent = `Ошибка`;
                        
                    }
                    else
                    statusMessage.textContent = `Ошибка`;
                }
            }).catch(error => {
                    console.error(error);
                    
                });

                form.reset();
               
        });
    };

    const formValid = name => {
        const form = document.getElementById(name);
        form.addEventListener('input', e => {
            if (e.target.getAttribute('name') === 'phone') {

                e.target.value = e.target.value.replace(/[^+0-9]/ig, '');
                e.target.value = e.target.value.replace(/\+{1,}/ig, '+');
                e.target.value = e.target.value.replace(/\d{1}\+/ig, e.target.value[0]);
                e.target.value = e.target.value.replace(/\+\d{1,}\+/ig, e.target.value.substring(e.target.value.indexOf('+'), e.target.value.length - 1));
               
                if (/^8/ig.test(e.target.value)) {
                    const validPhone = e.target.value.substring(e.target.value.indexOf('8'), e.target.value.length - 1);
                    if (e.target.value.length > 11) {
                        e.target.value = e.target.value.replace(e.target.value, validPhone);
                    }
                } else if (/^\+/ig.test(e.target.value)) {

                    const plusPhone = e.target.value.substring(e.target.value.indexOf('+'), e.target.value.length - 1);
                    if (e.target.value.length > 12) {
                        e.target.value = e.target.value.replace(e.target.value, plusPhone);
                    }
                } 
                else if (!/^\+/ig.test(e.target.value) && !/^8/ig.test(e.target.value)){
                    const otherPhone = e.target.value.substring(e.target.value.indexOf(0), e.target.value.length - 1);
                    if (e.target.value.length > 11){
                        e.target.value = e.target.value.replace(e.target.value, otherPhone);
                    }
                   

                }
                
            }
            if (e.target.getAttribute('name') === 'name') {
                e.target.value = e.target.value.replace(/[^а-яё\s]/ig, '');
            }
        });
    };


    
    const postData = body =>
        fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        

    formValid('form1');
    submitForm(callbackForm);
    formValid('form2');
    submitForm(vizitForm);
    formValid('banner-form');
    submitForm(bannerForm);
    formValid('card_order');
    document.querySelector('.card-order-btn').addEventListener('click',submitForm(cardOrderForm));
    formValid('footer_form');
    submitForm(footerForm);
    
};

export default sendForm;