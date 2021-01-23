let version = '0.1.0';

export default {
goosemodHandlers: {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`html > body.theme-custom {
      --background-primary: var(--background-primary-custom);
      --background-secondary: var(--background-secondary-custom);
      --background-secondary-alt: var(--background-secondary-alt-custom)
      --background-tertiary: var(--background-tertiary-custom);

      --channeltextarea-background: var(--background-tertiary);
      --background-message-hover: rgba(4, 4, 5, 0.07);

      --background-accent: var(--background-accent-custom);
      --background-floating: var(--background-tertiary);

      --scrollbar-thin-thumb: var(--brand-color);
      --scrollbar-auto-thumb: var(--scrollbar-thin-thumb);
      --scrollbar-auto-scrollbar-color-thumb: var(--scrollbar-thin-thumb);

      --scrollbar-auto-track: var(--background-secondary-alt);
      --scrollbar-auto-scrollbar-color-track: var(--scrollbar-auto-track);

      --brand-color: var(--brand-color-custom);
      --brand-color-hover: var(--brand-color-hover-custom);
    }`, sheet.cssRules.length);

    document.body.classList.add('theme-custom');

    let props = ['--background-primary', '--background-secondary', '--background-secondary-alt', '--background-tertiary', '--background-accent', '--brand-color', '--brand-color-hover'];

    goosemodScope.settings.createItem('Custom Theme', [
      `(v${version})`,

      ...props.map((x) => (
        {
          type: 'text-and-color',
          text: x.substring(2).replace(/-/g, ' ').replace(/(^|\W)([a-z])/g, (_, space, letter) => `${space}${letter.toUpperCase()}`),
          oninput: (val) => {
            document.body.style.setProperty(`${x}-custom`, val);
          }
        }
      ))
    ]);
  },

  onRemove: async function () {
    document.body.classList.remove('theme-custom');

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Custom Theme');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },



}
};
