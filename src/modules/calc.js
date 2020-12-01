const calc = () => {

    const total = document.querySelector('#price-total');
    const cardOrderForm = document.querySelector('#card_order');
    const m1 = document.querySelector('#m1');
    const m2 = document.querySelector('#m2');
    const m3 = document.querySelector('#m3');
    const m4 = document.querySelector('#m4');
    const cardLetoMozaika = document.querySelector('#card_leto_mozaika');
    const cardLetoSchelkovo = document.querySelector('#card_leto_schelkovo');
    const prom = document.querySelector('input[name="prom"]');
    
    cardOrderForm.addEventListener('click', () => {

        if (cardLetoMozaika && cardLetoMozaika.checked){
            if (m1.checked) total.textContent = 2999;
            if (m2.checked) total.textContent = 9900;
            if (m3.checked) total.textContent = 13900;
            if (m4.checked) total.textContent = 19900;
        }
        else if (cardLetoSchelkovo && cardLetoSchelkovo.checked){
            if (m1.checked) total.textContent = 2999;
            if (m2.checked) total.textContent = 14990;
            if (m3.checked) total.textContent = 21990;
            if (m4.checked) total.textContent = 24990;
        }
        if (prom && prom.value === 'ТЕЛО2019') total.textContent = Math.ceil(+total.textContent * 0.7);
        
    });



};

export default calc;