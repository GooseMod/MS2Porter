const version = '1.0.0';

export default {
gooseModHandlers: {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`html > body.theme-nord {
      --background-primary: #2e3440;
      --background-secondary: #3b4252;
      --background-secondary-alt: #4c566a;
      --background-tertiary: #434c5e;

      --channeltextarea-background: #4c566a;
      --background-message-hover: rgba(4, 4, 5, 0.07);

      --background-accent: #434c5e;
      --background-floating: #4c566a;

      --scrollbar-thin-thumb: #5e81ac;
      --scrollbar-auto-thumb: #5e81ac;
      --scrollbar-auto-scrollbar-color-thumb: #5e81ac;

      --scrollbar-auto-track: #4c566a;
      --scrollbar-auto-scrollbar-color-track: #4c566a;

      --brand-color: #5e81ac;
      --brand-color-hover: #81a1c1;
    }`, sheet.cssRules.length);

    document.body.classList.add('theme-nord');
  },

  onRemove: async function () {
    document.body.classList.remove('theme-nord');
  },



}
};