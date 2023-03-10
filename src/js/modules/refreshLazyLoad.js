import LazyLoad from 'vanilla-lazyload';

export default function refreshLazyLoad() {
  const lazyLoadInstance = new LazyLoad({});
  lazyLoadInstance.update();
}

window.lazyLoadInstance = lazyLoadInstance;