const version = '0';

let el;

const css = `@import url("https://raw.githack.com/Discord-Custom-Covers/usrbg/master/snippets/modals.css"); @import url("https://raw.githack.com/Discord-Custom-Covers/usrbg/master/snippets/userPopouts.css");`;

export default {
gooseModHandlers: {
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