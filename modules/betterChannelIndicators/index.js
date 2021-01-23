const version = '0';

let el;

const css = `@import url("https://raw.githack.com/LuckFire/BetterChannelIndicators/main/indicators.css");`;

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