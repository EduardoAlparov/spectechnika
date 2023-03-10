export default () => {
  const catList = document.querySelector('.cat-entry__list--wrap');

  if(!catList) {
    return;
  }
  const catItems = catList.querySelectorAll('.cat-entry__item');

  if(window.matchMedia("(max-width: 767px)").matches) {

  } else if(window.matchMedia("(max-width: 767px)").matches) {

  } else {
    if(catItems.length) {
      let clonedItem = catItems[0].cloneNode(true);
      clonedItem.classList.add('cat-entry__item--hidden');
      catList.appendChild(clonedItem);
    }
  }
}