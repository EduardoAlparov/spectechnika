export default () => {
  const adsContainer = document.querySelector('.ads');
  const adsButtons = document.querySelectorAll('.ads__button');
  const adsSliders = document.querySelectorAll('.ads__slider');

  if (!adsContainer) return;
  console.log('exist');

  adsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      adsButtons.forEach(b => {
        b.classList.remove('_active');
      })

      btn.classList.add('_active');

      let buttonDataValue = btn.dataset.value;
      let elementByDataPath = document.querySelector(`[data-path=${buttonDataValue}]`);

      adsSliders.forEach(adsSlider => {
        adsSlider.classList.add('ads__slider--hidden');
      })

      elementByDataPath.classList.remove('ads__slider--hidden');
    })
  })
}
