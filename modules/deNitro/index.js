const version = "1.0.1";

let style;
const css = `.buttons-3JBrkn > button, .channel-2QD9_O[href="/store"], .item-PXvHYJ[aria-controls="Discord Nitro-tab"], .wrapper-3nSjSv, .giftAction-yhDLaW, .upsellFooter-3coAfO, .buttons-3JBrkn > .buttonContainer-28fw2U > [aria-label="Open sticker picker"], .navItem-3Wp_oJ[aria-controls="sticker-picker-tab-panel"] {
  display: none;
}`;

export default {
gooseModHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  },

  onRemove: async () => {
    style.remove();
  },





}
};
