let version = '1.0.0';

export default {
gooseModHandlers: {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`body.simple-status-icons .pointerEvents-2zdfdO:not([mask="url(#svg-mask-status-online-mobile)"]) {
      mask: url(#svg-mask-status-online) !important;
    }`, sheet.cssRules.length);

    document.body.classList.add('simple-status-icons');
  },

  onRemove: async function () {
    document.body.classList.remove('simple-status-icons');
  },



}
};