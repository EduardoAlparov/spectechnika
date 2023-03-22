import { Modal } from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {
    },
    isClose: (modal) => {
    },
  });

  window.Spectechnika_Api.modal = modal;

  // window.addEventListener('resize', () => {
  //   document.body.classList.remove('disable-scroll');
  //   document.body.classList.remove('disable-scroll--with-menu');
  //   document.body.classList.remove('disable-scroll--with-catalog');
  //   document.body.style.paddingRight = '0px';

  //   if(document.querySelectorAll('.cloned-el').length) {
  //     document.querySelectorAll('.cloned-el').forEach(el => {
  //       el.remove();
  //     })
  //   };

  //   document.querySelectorAll('.modal').forEach(element => {
  //     element.classList.remove('is-open');
  //   });

  //   if(document.querySelectorAll('fix-block').length) {
  //     document.querySelectorAll('fix-block').forEach((el) => {
  //       el.style.paddingRight = '0px';
  //     });
  //   }
  // })
  // window.medikamarket_API.modal = modal;
};
