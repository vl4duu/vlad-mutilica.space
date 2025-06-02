import {LitElement, html, css, unsafeCSS} from "lit";
import anime from 'animejs';
import {styles} from './styles.js'

export class CampFire extends LitElement {
    static get styles() {
        return styles;
}


    render() {
        return html`
            <div class="cf-container">
                <div class="cf-flame-container" id="fireNodes1">
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                </div>
                <div class="cf-flame-container" id="fireNodes2">
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                </div>
                <div class="cf-flame-container" id="base-fire">
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                    <div class="cf-flame"></div>
                </div>
                <div class="cf-log-container">
                    <div class="cf-log"></div>
                    <div class="cf-log"></div>
                </div>
            </div>`;
    }

    firstUpdated() {
        this.fireNodes1 = this.renderRoot.querySelectorAll("#fireNodes1 .cf-flame");
        this.fireNodes2 = this.renderRoot.querySelectorAll("#fireNodes2 .cf-flame");
        this.fireNodes3 = this.renderRoot.querySelectorAll("#fireNodes1 .cf-flame");
        this.baseFire = this.renderRoot.querySelectorAll("#base-fire .cf-flame");

        this.animateFlame1();
        this.animateFlame2();
        this.animateFlame3();
        this.animateBaseFire();

    }

    animateBaseFire() {
        anime({
            targets: this.baseFire,
            delay: anime.stagger(300),
            translateY: function () {
                return anime.random(0, -10);
            },
            keyframes: [
                {scale: .8},
                {scale: .825},
                {scale: .9},
                {scale: .925},
                {scale: 1}
            ],
            duration: 300,
            easing: 'easeInOutSine',
            loop: true,
        })
    }

    animateFlame1() {
        anime({
            targets: this.fireNodes1,
            delay: anime.stagger(100),
            translateY: function () {
                return anime.random(0, 300);
            },
            rotate: 30,
            opacity: function () {
                return anime.random(.5, 1);
            },
            translateX: function () {
                return anime.random(0, -60);
            },
            scale: 0,
            skew: function () {
                return anime.random(0, 10);
            },
            loop: true,
            easing: "easeInOutSine",
        })
    }

    animateFlame2() {
        anime({
            targets: this.fireNodes2,
            delay: anime.stagger(400),
            translateX: function () {
                return anime.random(-30, 0);
            },
            translateY: function () {
                return anime.random(0, -260);
            },
            translateY: function () {
                return anime.random(-260, -160);
            },
            translateX: function () {
                return anime.random(0, -30);
            },
            scale: 0,
            rotate: function () {
                return anime.random(0, 60);
            },
            skew: function () {
                return anime.random(0, 30);
            },
            loop: true,
            easing: "easeInOutSine"
        })
    }

    animateFlame3() {
        anime({
            targets: this.fireNodes3,
            delay: anime.stagger(500),
            translateY: function () {
                return anime.random(-300, -200);
            },
            opacity: function () {
                return anime.random(0, 1);
            },
            translateX: function () {
                return anime.random(-50, 50);
            },
            scale: 0,
            rotate: function () {
                return anime.random(0, -30);
            },
            skew: function () {
                return anime.random(0, 20);
            },
            loop: true,
            easing: "easeInOutSine",
        })
    }

    connectedCallback() {
        super.connectedCallback();

    }


}

customElements.define('camp-fire', CampFire);


