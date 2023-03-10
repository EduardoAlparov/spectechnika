import openPopup from "./openPopupOnClick";

export default () => {
    const modalSubmitButtons = document.querySelectorAll('.js-modal-submit');
    const forms = document.querySelectorAll('.form');
    
    // forms.forEach(form => {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         let formInputs = form.getElementsByTagName('input');
    //         let status;
    //         let validateBoolean;

    //         Array.from(formInputs).forEach(input => {
    //             if(input.value == false) {
    //                 validateBoolean = false;
    //                 return;
    //             }
    //         })

    //         if(validateBoolean == false) {
    //             status = 'error';
    //             console.log(status);
    //             return status;
    //         } else {
    //             status = 'success';
    //             console.log(status);
    //             openPopup(status);
    //             return status;
    //         }
    //     })
    // })
}