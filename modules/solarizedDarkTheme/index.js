let version = '1.0.1';

export default {
gooseModHandlers: {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`html > body.theme-solarizeddark {
      --background-primary: #002b36;
      --background-secondary: #073642;
      --background-secondary-alt: #00232C;
      --background-tertiary: #1E4853;

      --channeltextarea-background: #1E4853;
      --background-message-hover: rgba(255,255,255,0.025);

      --background-accent: #657b83;
      --background-floating: #1E4853;

      --scrollbar-thin-thumb: #b58900;
      --scrollbar-auto-thumb: #b58900;
      --scrollbar-auto-scrollbar-color-thumb: #b58900;

      --scrollbar-auto-track: #00232C;
      --scrollbar-auto-scrollbar-color-track: #00232C;

      --brand-color: #b58900;
      --brand-color-hover: #947000;
    }`, sheet.cssRules.length);

    document.body.classList.add('theme-solarizeddark');
  },

  onRemove: async function () {
    document.body.classList.remove('theme-solarizeddark');
  },

  logRegionColor: 'darkred',



}
};