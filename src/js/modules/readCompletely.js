export default function readCompletely(){

  let mql = window.matchMedia('(max-width: 767px)').matches

  if(mql){
    const text = document.querySelector('.configurator__text');

    if(!text) return;

    const copyText = text.textContent;

    if(text.textContent.split('').length >= 168){
      text.innerHTML = text.textContent.slice(0, text.dataset.number) + "...";

      let span = document.createElement("span");
      span.classList.add("configurator__text-span");
      span.innerHTML = "Читать полностью";

      text.appendChild(span);

      span.addEventListener('click', function(){
        text.innerHTML = copyText;
      });
    }
  }

}
