import gsap from 'gsap';
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default () => {
  const triger = document.querySelector(".js-comparison__top-swiper");
  const menu = document.querySelector(".js-comparison-fixed");

  if (!triger) return;

  gsap.set(menu, {
    y: "-110%"
  });

  ScrollTrigger.create({
    trigger: triger,
    start: 'center top',
    onEnter: function () {
      gsap.to(menu, {
        duration: 1,
        y: 0,
        opacity: 1,
        visibility: "visible",
        ease: "expo"
      });
    },
    onEnterBack: function () {
      gsap.to(menu, {
        duration: 1,
        y: '-100%',
        opacity: 0,
        visibility: "hidden",
        ease: "expo"
      });
    },
    onLeaveBack: () => {
      gsap.to(menu, {
        duration: 1,
        y: '-100%',
        opacity: 0,
        visibility: "hidden",
        ease: "expo"
      });
    },
    onLeave: function () {
      // gsap.set(el, { y: "100%" })
    }
  });
};
