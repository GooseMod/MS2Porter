let version = '2.1.1';

if (typeof window === 'undefined' || typeof window.document === 'undefined') { // JSON API generator evals
  global.window = { document: { styleSheets: [0] } };
}

let sheet = window.document.styleSheets[0];

let el;

export default {
goosemodHandlers: {
  onImport: async function () {
    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .container-3baos1 {
      flex-wrap: wrap;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .avatarWrapper-2yR4wp {
      transform: translate(0, 35%);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .nameTag-3uD-yy {
      width: 80%;
      flex-grow: 0;

      transform: translate(0, 35%);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .nameTag-3uD-yy + .directionRow-3v3tfG {
      margin: auto;

      padding: 3px;
      border-radius: 4px 0 0 0;

      transform: scale(1.3) translate(15.5%, -153%);

      background-color: var(--background-secondary-alt);

      z-index: 1;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .wrapper-24pKcD > * {
      margin-bottom: 50px;
      z-index: 2;
    }`, sheet.cssRules.length);

    document.body.classList.add('user-panel-columns');

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .nameTag-3uD-yy + .directionRow-3v3tfG .upc-divider {
      width: 0px;

      border-left: 1px solid var(--background-tertiary);

      background-color: unset;

      margin: 3px;
      margin-left: 3.3px;
    }`, sheet.cssRules.length);

    el = document.createElement('div');
    el.className = 'upc-divider';

    let settingsButtonEl = document.querySelector('[aria-label="User area"] .nameTag-3uD-yy + .directionRow-3v3tfG [aria-label="User Settings"]');
    settingsButtonEl.parentElement.insertBefore(el, settingsButtonEl);
  },

  onRemove: async function () {
    document.body.classList.remove('user-panel-columns');

    el.remove();
  },

  logRegionColor: 'darkred',



}
};