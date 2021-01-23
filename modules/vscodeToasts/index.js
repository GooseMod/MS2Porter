const version = '1.0.0';

let el;

const css = `.gm-toast {
  position: absolute;
  right: 30px;
  bottom: 5px;

  box-shadow: var(--elevation-high);

  border-radius: 0;
  background: var(--channeltextarea-background);
  font-size: 20px;
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