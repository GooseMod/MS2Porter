const version = '1.0.0';

let el;

const css = `.groupStart-23k01U:not(.message-2qnXI6) {
  display: none;
}`;

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
