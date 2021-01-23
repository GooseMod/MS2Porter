let version = '1.0.3';

export default {
goosemodHandlers: {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`html > body.theme-darkest {
      --background-primary: #000;
      --background-secondary: #050505;
      --background-secondary-alt: #000;
      --background-tertiary: #080808;

      --channeltextarea-background: #080808;
      --background-message-hover: rgba(255,255,255,0.025);

      --background-accent: #111;
      --background-floating: #080808;
    }`, sheet.cssRules.length);

    document.body.classList.add('theme-darkest');
  },

  onRemove: async function () {
    document.body.classList.remove('theme-darkest');
  },

  logRegionColor: 'darkred',



}
};