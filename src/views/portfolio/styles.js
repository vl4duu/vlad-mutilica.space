import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient(90deg, rgba(116, 125, 82, 1) 0%, rgba(62, 71, 99, 1) 35%, rgba(75, 82, 84, 1) 100%);
    min-height: 100vh;
    width: 100%;
  }

  .pageTitle {
    position: fixed;
    padding-left: 20px;
    font-size: 40px;
    color: white;
  }

  .spacer {
    height: 10vh;
  }

  .accordions {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20vh;
  }

  .campfire-container {
    position: relative;
    z-index: 1;
  }

  .accordion {
    background: linear-gradient(200deg, rgb(29, 145, 252) 13.57%, rgb(90, 54, 192) 98.38%);
    width: max(50vw, 280px);
    padding: 25px 30px 10px;
    border-radius: 15px;
    margin-bottom: 40px;
    box-shadow: 0 30px 30px -10px rgba(0, 0, 0, .3);
  }

  .accordion:nth-child(2) {
    background: linear-gradient(200deg, rgb(242, 136, 133) 13.57%, rgb(233, 79, 102) 98.38%);
  }

  .accordion:nth-child(3) {
    background: linear-gradient(200deg, rgb(101, 187, 118) 13.57%, rgb(70, 111, 171) 98.38%);
  }

  .accordion:nth-child(4) {
    background: linear-gradient(200deg, #c215d1 13.57%, #9813a1 98.38%);
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: .4em;
  }

  .title {
    font-size: max(2vw, 24px);
    line-height: 1.1;
    color: rgb(255, 255, 255);
    text-shadow: 0 2px 2px rgba(0, 0, 0, .1);
    margin-right: 10px;
  }

  .text {
    font-size: max(1vw, 15px);
    line-height: 1.4;
    overflow: hidden;
    padding-bottom: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  .links {
    display: flex;
    align-items: center;
  }

  .links a {
    text-decoration: none;
    margin-left: 10px;
  }

  .links img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    .accordion {
      padding: 15px 20px 8px;
    }

    .title-container {
      flex-direction: row;
      align-items: center;
    }

    .title {
      font-size: 20px;
      margin-right: 5px;
    }

    .links img {
      width: 24px;
      height: 24px;
    }
  }
`;