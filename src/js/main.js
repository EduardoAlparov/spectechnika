// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';

import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import animationAfterLoad from './modules/animationAfterLoad';
import swiperSlider from './modules/swiperSlider';
import inputsMasks from './modules/inputsMasks';
import fancyboxModal from './modules/fancyboxModal';
import customSelectControl from './modules/customSelectControl';
import categoryControlPanel from './modules/categoryControlPanel';
import categoryWrapCount from './modules/categoryWrapCount';
import productCardControls from './modules/productCardControls';
import fixedHeaderOnScroll from './modules/fixedHeaderOnScroll';
import leasingCalcControl from './modules/leasingCalcControl';
import toggleOpenList from './modules/toggleOpenList';
import map from './map';
import onTabsConfigurator from './modules/onTabsConfigurator';
import comparisonSwiper from './modules/comparisonSwiper';
import accordions from './modules/accordions';
import apperBlock from './modules/apperBlock';
import readCompletely from './modules/readCompletely';
import openAndClearMobileFillter from './modules/openAndClearMobileFillter';
import navMenuOpen from './modules/navMenuOpen';
import validateForms from './modules/validateForms';
import catalogMenuControl from './modules/catalogMenuControl';
import openPopupOnClick from './modules/openPopupOnClick';
import searchbarOpen from './modules/searchbarOpen';
import adsTabsControl from './modules/adsTabsControl';

documenReady(() => {
  window.___YOUR_PROJECT___API = {};

  lazyIMages();
  initModal();

  // carousels:
  swiperSlider();

  // animation on load:
  animationAfterLoad();

  // fixd header:
  fixedHeaderOnScroll();

  // input masks:
  inputsMasks();

  navMenuOpen();
  catalogMenuControl();
  categoryWrapCount();
  openPopupOnClick();
  searchbarOpen();
  validateForms();
  adsTabsControl();

  if (window.matchMedia("(min-width: 768px)").matches) {

    // fancybox modal:
    fancyboxModal()
  } else {
    /* the viewport is less than 400 pixels wide */
  }

  customSelectControl();

  categoryControlPanel();
  openAndClearMobileFillter();

  leasingCalcControl();

  productCardControls();
  toggleOpenList();
  map();
  onTabsConfigurator();
  comparisonSwiper();
  accordions();
  apperBlock();
  readCompletely();
});
