export default () => {
  const categorySection = document.querySelector('.category');
  const categoryList = document.querySelector('.category__list');

  if (!categorySection) {
    return;
  }

  document.querySelector('.sorting__link').classList.add('sorting__link--active');
  // document.querySelector('.view-quantity__link').classList.add('view-quantity__link--active');

  document.body.addEventListener('click', (e) => {
    //  sorting control start ==================================================
    if(e.target.closest('.sorting__current')) {
      e.target.closest('.sorting__current').nextElementSibling.classList.toggle('sorting__menu--visible');
    }

    if(e.target.closest('.sorting__link')) {
      e.preventDefault();

      document.querySelectorAll('.sorting__link').forEach(el => {
        el.classList.remove('sorting__link--active');
      })

      e.target.closest('.sorting__link').classList.add('sorting__link--active');

      e.target.closest('.sorting__body').querySelector('.sorting__text').innerText = '';
      e.target.closest('.sorting__body').querySelector('.sorting__text').innerText =
        e.target.closest('.sorting__link').innerText;

      setTimeout(() => {
        e.target.closest('.sorting__menu').classList.remove('sorting__menu--visible');
      }, 100);

    } else if (!e.target.closest('.sorting')){
      document.querySelector('.sorting__menu').classList.remove('sorting__menu--visible');
    }

    // view type control start =================================================
    if(e.target.closest('.view-type__button--grid')) {
      categoryList.classList.toggle('category__list--row-list');
      categoryList.classList.toggle('category__list--wrap');
    } else if (e.target.closest('.view-type__button--bullets')) {
      categoryList.classList.toggle('category__list--row-list');
      categoryList.classList.toggle('category__list--wrap');
    }
    // view type control end ===================================================
  })
}
