let version = '1.1.5';

export default {
gooseModHandlers: {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`html > body.theme-dracula {
      --background-primary: #181920;
      --background-secondary: #1C1D25;
      --background-secondary-alt: #16171D;
      --background-tertiary: #1F2029;

      --channeltextarea-background: #1F2029;
      --background-message-hover: rgba(4, 4, 5, 0.07);

      --background-accent: #22232E;
      --background-floating: #1F2029;

      --scrollbar-thin-thumb: #9B78CC;
      --scrollbar-auto-thumb: #9B78CC;
      --scrollbar-auto-scrollbar-color-thumb: #9B78CC;

      --scrollbar-auto-track: #16171D;
      --scrollbar-auto-scrollbar-color-track: #16171D;

      --brand-color: #9B78CC;
      --brand-color-hover: #896BB5;
    }`, sheet.cssRules.length);

    document.body.classList.add('theme-dracula');
  },

  onRemove: async function () {
    document.body.classList.remove('theme-dracula');
  },

  logRegionColor: 'darkred',



}
};