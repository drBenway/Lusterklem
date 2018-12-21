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
       :host{
        padding: 10px;
       }
        ${styles}
      </style>
      <table class="overview_table">
     
      <tr>
      <th>custom tag</th>
      <th>info</th>
      <th>example</th>
    </tr>

      <tr>
      <td>&lt;lc-qr typenumber="0" qrdata="https://github.com/drBenway/Lusterklem" &gt; &lt/lc-qr&gt;*</td>
      <td>Generates a qr code. takes a typenumber property (default 0), qrdata and errorcorrection. <span style="color: red"> Beware: the component is not responsive to width/ height as the qr code gets calculated based on the type and data</span></td>
      <td>${this.qrcode()}</td>
</tr>
      
</table>
<p>
* this component is a wrapper around the qr code @ https://kazuhikoarase.github.io/qrcode-generator/js/demo/
</p>
      
    `;
  }
}

customElements.define('lusterklem-app', LusterklemApp);
