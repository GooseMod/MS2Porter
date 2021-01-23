const version = "0";

let style;

export default {
gooseModHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/A-User-s-Discord-Themes/couve-git-clone-pc-repo/master/couve.css")`
      )
    );
  },

  onRemove: async () => {
    style.remove();
  },





}
};
