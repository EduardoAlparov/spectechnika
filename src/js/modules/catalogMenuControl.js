import Swiper, {
  Navigation,
  Pagination,
  Mousewheel,
  FreeMode,
  Parallax,
  Controller,
  EffectCoverflow,
  EffectFade,
  Lazy,
  Scrollbar
} from 'swiper';

Swiper.use([ Navigation, EffectCoverflow, Mousewheel, Controller, EffectFade, Lazy, Scrollbar ]);

export default () => {
  const catMenuSwiper = new Swiper(".categories-menu__list-wrapper", {
    direction: "vertical",
    slidesPerView: 'auto',
    observeParents: true,
    observer: true,
    autoHeight: true,
    updateOnWindowResize: true,
    watchOverflow: false,
    resistance: true,
    resistanceRatio: 0,

    mousewheel: {
      enabled: true
    },

    scrollbar: {
      el: ".categories-menu__scrollbar",
    },

    wrapperClass: 'categories-menu__list',
    slideClass: 'categories-menu__item'
  })

  const catPopup = document.querySelector('.modal__container--categories');
  const categoriesMenu = document.querySelector('.categories-menu');
  const categoriesListItems = document.querySelectorAll('.categories-menu__item');
  const catPopupButtons = document.querySelectorAll('[data-path="cat-popup"]');

  if(!catPopupButtons.length) {
    return;
  }

  catPopupButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.add('disable-scroll--with-catalog');
    })
  })

  catPopup.addEventListener('click', (e) => {
    if(e.target.closest('.categories-menu__link')) {
      document.querySelectorAll('.categories-menu__item').forEach(el => {
        el.classList.remove('categories-menu__item--visible')
      })

      if(!e.target.closest('.categories-menu__item').classList.contains('categories-menu__item--no-list')) {
        e.target.closest('.categories-menu').classList.add('categories-menu--is-open');
        e.target.closest('.categories-menu__item').classList.add('categories-menu__item--visible');
      } else {
        return;
      }
    }
  })

  if(categoriesMenu) {
    categoriesMenu.addEventListener('click', (e) => {
      if(!categoriesMenu.classList.contains('categories-menu--is-open')) {
        return;
      } else {
        if(!e.target.closest('.categories-menu__submenu-list')) {
          categoriesMenu.classList.remove('categories-menu--is-open');
          categoriesListItems.forEach(item => {
            item.classList.remove('categories-menu__item--visible');
          })
        }
      }
    })
  }
}
