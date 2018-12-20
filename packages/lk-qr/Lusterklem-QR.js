import { LitElement, html } from '@polymer/lit-element/';
import { qrcode } from './qrcode';

export class LusterklemQR extends LitElement {
  static get properties() {
    return {
      typenumber: {
        type: Number,
        hasChanged: this.triggerNewQR,
      },
      errorcorrection: {
        type: String,
        hasChanged: this.triggerNewQR,
      },
      qrdata: {
        type: String,
        hasChanged: this.triggerNewQR,
      },
    };
  }


  constructor() {
    super();
    this.typenumber = 1;
    this.errorcorrection = 'M';
    this.qrdata = '';
  }


  render() {
    return html`
            <div id="placeHolder"></div>
        `;
  }

  isTypeNumber(typeNumber) {
    if (typeof (typeNumber) !== 'number') {
      return false; // it should be a number
    }
    if (typeNumber >= 0 && typeNumber < 41) {
      return true; // it should be between 0 and 40
    }
    return false;
  }
  isCorrectErrorCorrection(character) {
    const correctCharacters = ['L', 'M', 'Q', 'H'];
    if (typeof (character) !== 'string') { return false; } // should be a string
    if (character === '' || character.length > 1) { return false; } // shouldn't be empty or more than 1 character
    if (correctCharacters.includes(character)) { // should be in the list of allowed characters
      return true;
    }
    return false;
  }

  firstUpdated() {
    this.triggerNewQR();
  }

  triggerNewQR() {
    this.generate(this.typenumber, this.errorcorrection, this.qrdata);
  }

  generate(typeNumber, errorCorrectionLevel, data) {
    if (this.isTypeNumber(typeNumber) && this.isCorrectErrorCorrection(errorCorrectionLevel)) {
      const qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(data);
      qr.make();
      this.shadowRoot.querySelector('#placeHolder').innerHTML = qr.createImgTag(3, 0, 'qrcode');
    } else {
      this.shadowRoot.querySelector('#placeHolder').innerHTML = 'Error';
    }
  }
}
