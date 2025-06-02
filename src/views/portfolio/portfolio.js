import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LitElement, html } from 'lit';
import portfolioData from './constants.json';
import githubLogo from '../assets/logos/github_logo.png';
import webPageLogo from '../assets/logos/web_page_logo.png';
import './campFire/CampFire';
import { styles } from './styles.js';

gsap.registerPlugin(ScrollTrigger);

class PortfolioPage extends LitElement {
  logoMap = {
    github: 'github_logo.png',
    website: 'web_page_logo.png'
  };

  static get styles() {
    return styles;
  }

  firstUpdated() {
    setTimeout(() => {
      // Get references to elements in the shadow DOM
      const accordionsElement = this.shadowRoot.querySelector('.accordions');
      const textElements = this.shadowRoot.querySelectorAll('.accordion .text');
      const accordionElements = this.shadowRoot.querySelectorAll('.accordion');
      const topSpacerElement = this.shadowRoot.querySelector('.wrapper > .spacer:first-of-type');

      // Animation for the top spacer
      gsap.to(topSpacerElement, {
        scrollTrigger: {
          trigger: topSpacerElement,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: 6,
          ease: 'power2.inOut',
          markers: false, // Set to true for debugging
        },
        height: '15vh',
        opacity: 0.8, // Slight opacity change for visual feedback
        duration: 1.5,
        ease: 'power2.out'
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: accordionsElement,
          pin: true,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          ease: 'linear',
        }
      });

      tl.to(textElements, {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: .5,
      });

      tl.to(accordionElements, {
        marginBottom: -15,
        stagger: .5,
      }, '<');
    }, 100);
  }

  render() {
    return html`
      <div class="wrapper">
        <h1 class="pageTitle">Portfolio</h1>
        <div class="spacer"></div>
        <div class="accordions">
          ${portfolioData.portfolioItems.map((item, index) => html`
            <div class="accordion">
              <div class="title-container">
                <div class="title">${item.title}</div>
                <div class="links">
                  ${item.links.map(link => html`
                    <a href="${link.url}">
                      <img src="${link.type === 'github' ? githubLogo : webPageLogo}"
                           alt="${link.type}">
                    </a>
                  `)}
                </div>
              </div>
              <div class="text">
                ${item.text}
              </div>
            </div>
          `)}
<!--          <div class="campfire-container">-->
<!--            <camp-fire></camp-fire>-->
<!--          </div>-->
        </div>
        <div class="spacer"></div>
      </div>

    `;
  }
}

customElements.define('portfolio-page', PortfolioPage);

document.addEventListener('DOMContentLoaded', () => {
  const app = document.createElement('portfolio-page');
  document.body.appendChild(app);
});
