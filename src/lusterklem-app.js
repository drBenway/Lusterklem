import { LitElement, html } from '@polymer/lit-element/';
import './../lc-qr.js';
import styles from './lit-app-styles.css';


class LusterklemApp extends LitElement {
	render() {
		return html`
			<style>
				${styles}
			</style>
			<lc-qr typenumber="0" qrdata="https://github.com/drBenway/Lusterklem" ></lc-qr>
		`;
	}
}

customElements.define('lusterklem-app', LusterklemApp);
