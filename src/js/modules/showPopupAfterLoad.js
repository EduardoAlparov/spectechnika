export default () => {
  const mainPage = document.querySelector('.page-home');
  const modalNutton = document.querySelector('[data-path="gift-request-modal"]');

  if(!mainPage) {
    return;
  }

  let timer = setTimeout(() => {
    if(!window.Spectechnika_Api.modal.howManyOpened) {
      modalNutton.click();
    }
  }, 15000);
}
