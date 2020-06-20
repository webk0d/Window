function openModal (modalSelector) {
        
    const modal = document.querySelector(modalSelector);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {

    const window = document.querySelectorAll('[data-modal]');

    window.forEach(item => {
        item.style.display = 'none';
        document.body.style.overflow = '';
    });
}

const modal = () => {

    function bindModal (triggerOpen, triggerClose, modalSelector, closeClickOverlay = true) {

        const modalTriggerOpen = document.querySelectorAll(triggerOpen),
              modal = document.querySelector(modalSelector),
              modalTriggerClose = document.querySelectorAll(triggerClose);


        modalTriggerOpen.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                closeModal();
                openModal(modalSelector);
            });
        });
    
        modalTriggerClose.forEach(item => {
            item.addEventListener('click', () => {
                closeModal();
            });
        });
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal();
            }
        });
        
    }

    function showMobalBytine(modalSelector, time) {
        setTimeout(() => {
            openModal(modalSelector);
        }, time);

    }

    bindModal('.popup_engineer_btn', '.popup_close', '.popup_engineer');
    bindModal('.phone_link', '.popup_close', '.popup');
    showMobalBytine('.popup', 60000);
    bindModal('.popup_calc_btn', '.popup_calc_close', '.popup_calc');
    bindModal('.popup_calc_button', '.popup_calc_profile_close', '.popup_calc_profile', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end_close', '.popup_calc_end', false);

};

export default modal;
export {closeModal};
