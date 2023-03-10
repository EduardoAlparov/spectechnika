import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin( ScrollTrigger );

export default () => {
  const header = document.querySelector('.header');
  const introSection = document.querySelector('.intro');
  const advantagesSection = document.querySelector('.advantages');
  const catalogSection = document.querySelector('.catalog--animated');

  if( header ) {
    header.classList.add('_animate');
  }

  if( introSection ) {
    introSection.classList.add('_animate');
  }

  if( advantagesSection) {
    let advantegesScrollTrigger = ScrollTrigger.create({
      trigger: 0,
      end: "max",
      onUpdate: (self) => {
        if (ScrollTrigger.positionInViewport(advantagesSection, "top") < 0.7) {
          advantagesSection.classList.add('_animate');
          advantegesScrollTrigger.disable();
        }
      }
    });
  }

  if( catalogSection) {
    let catalogScrollTrigger = ScrollTrigger.create({
      trigger: 0,
      end: "max",
      onUpdate: (self) => {
        if (ScrollTrigger.positionInViewport(catalogSection, "top") < 0.9) {
          catalogSection.classList.add('_animate');
          catalogScrollTrigger.disable();
        }
      }
    });
  }
}
