export default function(){
  const btn = document.querySelector('.js-list-toggle-btn');
  const list = document.querySelector('.services__list');

  if(!btn) return;

  btn.addEventListener('click', function(){
    list.classList.toggle('active');
    btn.classList.toggle('hide');
  });
}
