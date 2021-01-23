const version = '1.0.0';

let el;

const css = `.ephemeral-1PsL1r {
  display: none;
}`;

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
