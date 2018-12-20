import { LitElement, html } from '@polymer/lit-element/';
import './../lc-qr.js';
import styles from './lit-app-styles.css';

class LusterklemApp extends LitElement {
  qrcode() {
    return html`<lc-qr typenumber="0" qrdata="https://github.com/drBenway/Lusterklem" ></lc-qr>`;
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      ${this.qrcode()}
    `;
  }
}

customElements.define('lusterklem-app', LusterklemApp);
