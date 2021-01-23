let version = '1';

let el;

const css = `@import url("https://raw.githack.com/DiscordStyles/Slate/master/Slate.theme.css");`;

export default {
goosemodHandlers: {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  onRemove: async function () {
    el.remove();
  },



}
};
