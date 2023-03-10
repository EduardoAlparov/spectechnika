import IMask from 'imask';

export default () =>  {
  const forms = document.getElementsByTagName('form');
  const phoneInputs = document.querySelectorAll('.js-input-mask_phone');
  const nameInputs = document.querySelectorAll('.js-input-mask_text');
  const emailInputs = document.querySelectorAll('.js-input-mask_email');

  if(forms.length) {
    phoneInputs.forEach(phoneInput => {
      const phoneMask = IMask(phoneInput, {
        mask: '+{7}(000)000-00-00'
      });
    })

    nameInputs.forEach(nameInput => {
      const nameMask = IMask(nameInput, {
        mask: /^[А-Яа-яЁёA-Za-z ]+$/,
      });
    })

    emailInputs.forEach(emailInput => {
      const emailMask = IMask(emailInput, {
        mask: /^\S*@?\S*$/,
      });
    })
  }
}
