import Swiper, {
  Navigation,
  Controller,
  // EffectCoverflow,
  // EffectFade,
  Lazy,
} from 'swiper';

Swiper.use([Navigation, Controller]);

export default function comparisonSwiper() {

  const comparisontTop = document.querySelector('.js-comparison__top-swiper');
  const comparisonTable = Array.from(document.querySelectorAll('.js-comparison-table-slider'));
  const comparisonFixed = document.querySelector('.js-comparison-fixed__swiper');
  let arr = [];

  if (!comparisontTop) {
    return;
  }

  const comparisontTopSwiper = new Swiper(comparisontTop, {
    spaceBetween: 8,
    slidesPerView: 2,
    preloadImages: false,
    watchSlidesVisibility: true,

    navigation: {
      enabled: true,
      prevEl: '.next-3',
      nextEl: '.next-1',
    },
    on: {
      init: function (swiper) {
        const visibleSlides = document.querySelectorAll('.swiper-slide-visible');
        console.log(visibleSlides)
        // visibleSlides[3].classList
      }
    },


    breakpoints: {
      767: {
        spaceBetween: 20,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  })

  const comparisonFixedSwiper = new Swiper(comparisonFixed, {
    spaceBetween: 8,
    slidesPerView: 2,
    preloadImages: false,

    navigation: {
      enabled: true,
      nextEl: '.next-2',
    },


    breakpoints: {
      767: {
        spaceBetween: 20,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  })


  comparisonTable.forEach(slide => {
    let comparisonTableSwiper = new Swiper(slide, {
      spaceBetween: 8,
      slidesPerView: 2,
      allowTouchMove: false,
      preloadImages: false,
      breakpoints: {
        767: {
          spaceBetween: 20,
        },
        1200: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      },
    })

    arr.push(comparisonTableSwiper);
  });

  comparisontTopSwiper.controller.control = arr;
  comparisonFixedSwiper.controller.control = arr;

}
