import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LitElement, html } from "lit";
import styles from "./stylesheet.scss" with {type: 'scss'}
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

export class MyElement extends LitElement {
}

customElements.define('my-element', MyElement);

