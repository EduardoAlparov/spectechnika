import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin( ScrollTrigger );

export default () => {
  const header = document.querySelector('.header');
  const introSection = document.querySelector('.page-main').firstElementChild;

  if(!header) {
    return;
  }

  let advantegesScrollTrigger = ScrollTrigger.create({
    trigger: 0,
    end: "max",
    onUpdate: (self) => {
      let rect = document.body.getBoundingClientRect();

      // console.log(window.getComputedStyle(header).position);
      if(Math.abs(rect.y) > header.clientHeight) {
        if(header.classList.contains('header--simple') &&
        !header.classList.contains('header--pos-abs') ) {
          document.body.style.paddingTop = header.clientHeight + "px";
          header.classList.add('header--fixed');
        } else {          
          header.classList.add('header--fixed');
        }
      } else {
        document.body.style.paddingTop = "0px";
        header.classList.remove('header--fixed');
      }
    }
  });
}
