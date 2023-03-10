import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default () => {
  const prodText = document.querySelector('.product-info__text');
  const prodBtn= document.querySelector('.product-info__text-btn');
  const spec = document.querySelector('.spec');
  const specControls = document.querySelector('.spec__controls');
  const productCardBreadcrumbs = document.querySelector('.product-card__breadcrumbs');

  if(productCardBreadcrumbs) {
    const breadcrumbsList = productCardBreadcrumbs.querySelector('.breadcrumbs__list');
    gsap.to(breadcrumbsList, {duration: 0, scrollTo:{x: 300, autoKill: true}});
  }

  if(!prodText) {
    return;
  } else {
    prodBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prodText.classList.toggle('product-info__text--all-visible')
    })
  }

  if(!spec) {
    return;
  } else {
    spec.addEventListener('click', (e) => {
      if(e.target.closest('.spec__button')) {
        document.querySelectorAll('.spec__button').forEach(btn => {
          btn.classList.remove('spec__button--active');
        });

        e.target.closest('.spec__button').classList.add('spec__button--active');
        
        let elem = e.target.closest('.spec__button');
        if(elem.classList.contains('spec__button--chassis')) {
          specControls.scrollLeft = 0;
        } else {
          gsap.to(specControls, {duration: 0.1, scrollTo: elem});
        }

        document.querySelectorAll('.spec__table').forEach(table => {
          table.classList.remove('spec__table--visible');
        });

        let id = e.target.closest('.spec__button').dataset.role;
        document.getElementById(id).classList.add('spec__table--visible');

      }
    })
  }
}
