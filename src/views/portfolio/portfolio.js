import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger)


/*------------------------------
Init ScrollSmoother
------------------------------*/

const tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.accordions',
      pin: true,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
      ease: 'linear',
    }
})

tl.to('.accordion .text', {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: .5,
})
tl.to('.accordion', {
  marginBottom: -15,
  stagger: .5,
}, '<')
