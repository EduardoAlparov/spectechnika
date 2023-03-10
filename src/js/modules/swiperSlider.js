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
} from 'swiper';

Swiper.use([ Navigation, EffectCoverflow, Controller, EffectFade, Lazy ]);

export default () => {
  // product cards carousel on main-page:
  const adsSliders = document.querySelectorAll('.js-swiper-ads');
  if (adsSliders.length) {
    const swiperAds = new Swiper('.js-swiper-ads', {
      observeParents: true,
      observer: true,
      slidesPerView: 'auto',
      spaceBetween: 8,
      watchSlidesProgress: true,

      navigation: {
        nextEl: '.models__button--next',
        prevEl: '.models__button--prev',
      },

      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      },
    });
  }
  // stocks and offers carousel on main-page:
  const offersSliders = document.querySelectorAll('.js-swiper-offers');
  if (offersSliders.length) {
    const swiperOffers = new Swiper('.js-swiper-offers', {
      spaceBetween: 8,
      slidesPerView: 'auto',
      observeParents: true,
      observer: true,
      updateOnWindowResize: true,

      navigation: {
        nextEl: '.offers__button--next',
        prevEl: '.offers__button--prev',
      },

      breakpoints: {
        // when window width is >= 768px
        768: {
          spaceBetween: 20,
        },
      },
    });
  }
  // video reviews carousel on main-page:
  const reviewsSliders = document.querySelectorAll('.js-swiper-reviews');
  if (reviewsSliders.length) {
    const swiperReviews = new Swiper('.js-swiper-reviews', {
      spaceBetween: 8,
      slidesPerView: 'auto',
      observeParents: true,
      observer: true,
      updateOnWindowResize: true,

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },

      breakpoints: {
        // when window width is >= 768px
        768: {
          spaceBetween: 20,
        },
      },
    });
  }
  // leasing carousel on main-page:
  const leasingSliders = document.querySelectorAll('.js-swiper-leasing');
  if (leasingSliders.length) {
    const swiperLeasing = new Swiper('.js-swiper-leasing', {
      spaceBetween: 8,
      slidesPerView: 'auto',
      observeParents: true,
      observer: true,

      navigation: {
        nextEl: '.leasing__button--next',
        prevEl: '.leasing__button--prev',
      },

      breakpoints: {
        // when window width is >= 768px
        768: {
          spaceBetween: 20,
        },
      }
    });
  }
  // achievements carousel on main-page:
  const achievementsSliders = document.querySelectorAll('.js-swiper-achievements');
  if(achievementsSliders.length) {
    const swiperAchievements = new Swiper('.js-swiper-achievements', {
      spaceBetween: 8,
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      updateOnWindowResize: true,

      navigation: {
        nextEl: '.achievements__button--next',
        prevEl: '.achievements__button--prev',
      },

      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      }
    });

    window.addEventListener('resize', () => {
      if(window.matchMedia("(max-width: 767)").matches) {

      }
    })
  }

  // intro silder on main-page:
  const mainSliders = document.querySelectorAll('.js-swiper-main');
  if(mainSliders.length) {
    const swiperMain = new Swiper('.js-swiper-main', {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      updateOnWindowResize: true,
      spaceBetween: 15,
      slidesPerView: 'auto',
      watchSlidesProgress: true,

      navigation: {
        enabled: true,
        nextEl: '.main-slider__button--next',
        prevEl: '.main-slider__button--prev',
      },

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 768px
        768: {
          spaceBetween: 0,
        },
      },

      on: {
        resize: () => {
          swiperMain.update();
        }
      }
    });

    const swiperAlbum = new Swiper('.js-swiper-album', {
      observeParents: true,
      observer: true,
      spaceBetween: 0,
      slidesPerView: 1,
      lazy: true,
      watchSlidesProgress: true,

      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });

    swiperMain.controller.control = swiperAlbum;
    swiperAlbum.controller.control = swiperMain;
  }
  // mobile catalog items carousel on main-page:
  const catalog = document.querySelector('.catalog--animated');
  let swiperCat;
  if(catalog){
    if(window.matchMedia("(max-width: 1199px)").matches) {
      document.querySelectorAll('.cat-entry__item').forEach(el => {
        el.classList.add('swiper-slide');
      });
      document.querySelector('.cat-entry__list').classList.add('swiper-wrapper');

      swiperCat = new Swiper('.js-swiper-entry', {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 8,
        slidesPerView: 'auto',
        watchSlidesProgress: true,

        wrapperClass: 'cat-entry__list',
        slideClass: 'cat-entry__item',

        on: {
          resize: () => {
            swiperCat.updateSlides();
            swiperCat.updateSize();
            swiperCat.updateSlidesClasses();
            swiperCat.update();
          }
        }
      });
    }

    window.addEventListener('resize', () => {
      if(window.matchMedia("(max-width: 1199px)").matches) {
        document.querySelectorAll('.cat-entry__item').forEach(el => {
          el.classList.add('swiper-slide');
        });
        document.querySelector('.cat-entry__list').classList.add('swiper-wrapper');

        swiperCat = new Swiper('.js-swiper-entry', {
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          spaceBetween: 8,
          slidesPerView: 'auto',
          watchSlidesProgress: true,

          wrapperClass: 'cat-entry__list',
          slideClass: 'cat-entry__item',

          on: {
            resize: () => {
              swiperCat.update();
              swiperCat.updateSlides();
              swiperCat.updateSize();
              swiperCat.updateSlidesClasses();
            }
          }
        });
      } else {
        if(swiperCat) {
          console.log('destroy');
          swiperCat.destroy(false, false);
        }

        document.querySelectorAll('.cat-entry__item').forEach(el => {
          el.classList.remove('swiper-slide');
        });
        document.querySelector('.cat-entry__list').classList.remove('swiper-wrapper');
      }
    })
  }
  // main top carousel on product-card page:
  const productCard = document.querySelector('.product-card');
  if(productCard) {
    const productCardSwiper = new Swiper('.js-product-card-swiper' ,{
      spaceBetween: 4,
      slidesPerView: 'auto',
      speed: 700,
      loop: true,
      preloadImages: false,
      lazy: true,

      navigation: {
        enabled: true,
        nextEl: '.product-card__slider-button--next',
        prevEl: '.product-card__slider-button--prev',
      },
    })
  }
  // mobile carousel of leasing achievments items:
  const leasingAchievements = document.querySelectorAll('.js-leasing-section-swiper');
  if(leasingAchievements.length) {
    const leasingAchievementsSwiper = new Swiper('.js-leasing-section-swiper', {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      updateOnWindowResize: true,
      watchSlidesProgress: true,
      spaceBetween: 8,
      slidesPerView: 'auto',

      slideClass: 'leasing-section__item--small',
      wrapperClass: 'leasing-section__list--row',

      breakpoints: {
        // when window width is >= 768px
        1199: {
          spaceBetween: 0,
          enabled: false
        },
      },
    });
  }
  // tags carousel on category page:
  const categoryTags = document.querySelectorAll('.js-category-tags-swiper');
  if(categoryTags.length) {
    const categoryTagsSwiper = new Swiper('.js-category-tags-swiper', {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      updateOnWindowResize: true,
      watchSlidesProgress: true,
      spaceBetween: 4,
      slidesPerView: 'auto',

      1199: {
        spaceBetween: 12,
        enabled: false
      },

      wrapperClass: 'category__tags',
      slideClass: 'category__tag',
    })
  }
};
