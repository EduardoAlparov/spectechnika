export default () => {
  const leasingCalcForm = document.querySelector('.leasing-calc');

  if(!leasingCalcForm) {
    return;
  }

  const rangePercentege = document.querySelectorAll('.range__input-percentege');
  const monthlyPayment = document.querySelector('.submit-calc__payment-value');
  const inputs = document.querySelector('.leasing-calc__inputs').querySelectorAll('input[type=range]');
  const costInput = document.querySelector('.leasing-calc__input--cost').querySelector('input[type=range]');
  const prepaymentInput = document.querySelector('.leasing-calc__input--prepayment').querySelector('input[type=range]');
  const termInput = document.querySelector('.leasing-calc__input--term').querySelector('input[type=range]');

  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

  if(leasingCalcForm) {
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        e.target.closest('.range__wrapper').querySelector('output').value =
          e.target.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
      });

      input.addEventListener('input', (e) => {

        const prepaymentInput2 = document.querySelector('.leasing-calc__input--prepayment').querySelector('input[type=range]');

        if(e.target.closest('.leasing-calc__input--cost')) {
          prepaymentInput2.setAttribute('max', e.target.value);
          prepaymentInput2.setAttribute('value', prepaymentInput2.value);
          prepaymentInput2.style.setProperty('--max', e.target.value);
          prepaymentInput2.style.setProperty('--value', prepaymentInput2.value);
        }

        prepaymentInput2.closest('.range__wrapper').querySelector('output').value =
          prepaymentInput2.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        console.log(prepaymentInput2.value);

        let onePercent = (prepaymentInput2.max / 100).toFixed(2);
        prepaymentInput2.closest('.range__wrapper').querySelector('.range__percentege-value').textContent = '';
        prepaymentInput2.closest('.range__wrapper').querySelector('.range__percentege-value').textContent = (prepaymentInput2.value / onePercent).toFixed(0);

        if(costInput.value < prepaymentInput2.value) {

          let monthlyPaymentValue = (costInput.value - prepaymentInput2.value) / termInput.value;
          monthlyPayment.textContent = '';
          monthlyPayment.textContent = monthlyPaymentValue.toFixed(0);
        } else {

          let monthlyPaymentValue = (costInput.value - prepaymentInput2.value) / termInput.value;
          monthlyPayment.textContent = '';
          monthlyPayment.textContent = monthlyPaymentValue.toFixed(0);
        }
      })

      // input.addEventListener('input', (e) => {
      //   let value = (input.value-input.min)/(input.max-input.min)*100
      //   input.style.background = 'linear-gradient(to right, #161617 0%, #161617 ' + value + '%, #fff ' + value + '%, white 100%)'
      // })

    })
  }

  if(rangePercentege) {
    rangePercentege.forEach(el => {
      let inputRange = el.closest('.range__wrapper').querySelector('input[type=range]');

      inputRange.addEventListener('input', (e) => {
        let onePercent = (e.target.max / 100).toFixed(2);
        el.closest('.range__wrapper').querySelector('.range__percentege-value').textContent = '';
        el.closest('.range__wrapper').querySelector('.range__percentege-value').textContent = (e.target.value / onePercent).toFixed(0);
      })
    })
  }

  if(leasingCalcForm) {
    leasingCalcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      formData.append('payment', monthlyPayment.textContent);
      const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
        ...memo,
        [key]: value,
      }), {});

      // console.log(data);
    })
  }
}
