import { css } from 'lit';

export const styles = css`
    :host {
        --yellow-white: #f5ed8f;
        --bright-yellow: #fde239;
        --yellow: #ffdc01;
        --yellow-orange: #ffb401;
        --orange: #fdac01;
        --red-orange: #d73e0f;
        --red: #cd4015;
        --dark-red: #c63509;
        --log-color: #723830;
        --shadow: #372113;
        --animationtime: 1.5s;
    }

    body {
        background-color: var(--shadow);
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    .cf-container {
        box-sizing: content-box;
        width: 300px;
        height: 300px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .cf-container .cf-flame-container {
        width: 100px;
        height: 100px;
        bottom: 0;
        position: absolute;
    }

    .cf-container .cf-log-container {
        width: 60%;
        height: 100px;
        position: absolute;
        bottom: 0;
        left: 50px;
    }

    .cf-container .cf-flame-container#base-fire .cf-flame:nth-child(1) {
        background: var(--dark-red);
        opacity: 0.95;
        padding-top: -200px;
    }

    .cf-container .cf-flame-container#base-fire .cf-flame:nth-child(2) {
        background: var(--red);
        width: 100px;
        height: 100px;
        opacity: 0.85;
        left: 75px;
    }

    .cf-container .cf-flame-container#base-fire .cf-flame:nth-child(3) {
        background: var(--red-orange);
        width: 60px;
        height: 60px;
        opacity: 0.85;
        left: 130px;
    }

    .cf-container .cf-flame-container:nth-child(2) {
        width: 150px;
        height: 150px;
        bottom: 0;
        position: absolute;
    }

    .cf-container .cf-flame-container:nth-child(2) .cf-flame {
        width: 75px;
        height: 75px;
        left: 75px;
    }

    .cf-log {
        background: var(--log-color);
        width: 20px;
        height: 30px;
        transform-origin: center;
        position: absolute;
        bottom: 0;
        border-radius: 0.5em;
        box-shadow: 0 3px 10px var(--shadow);
        width: 100%;
    }

    .cf-log:nth-child(1) {
        transform: rotate(15deg);
    }

    .cf-log:nth-child(2) {
        transform: rotate(-15deg);
    }

    .cf-flame {
        background: var(--red);
        width: 100px;
        height: 100px;
        border-radius: 1em;
        position: absolute;
        bottom: 0;
        left: 100px;
    }

    .cf-flame:nth-child(1) {
        background: var(--yellow-white);
    }

    .cf-flame:nth-child(2) {
        background: var(--bright-yellow);
    }

    .cf-flame:nth-child(3) {
        background: var(--yellow);
    }

    .cf-flame:nth-child(4) {
        background: var(--orange);
    }

    .cf-flame:nth-child(5) {
        background: var(--red-orange);
    }

    .cf-flame:nth-child(6) {
        background: var(--red);
    }

    .cf-flame:nth-child(7),
    .cf-flame:last-child {
        background: var(--dark-red);
    }

    #fireNodes2 .cf-flame {
        animation: flameColor var(--animationtime) ease-out infinite;
    }

    @keyframes flameColor {
        0% {
            background: var(--dark-red);
        }
        20% {
            background: var(--red);
        }
        30% {
            background: var(--orange);
        }
        50% {
            background: var(--yellow-orange);
        }
        60% {
            background: var(--orange);
        }
        70% {
            background: var(--yellow);
        }
        80% {
            background: var(--bright-yellow);
        }
        100% {
            background: var(--yellow-white);
        }
    }
`;
