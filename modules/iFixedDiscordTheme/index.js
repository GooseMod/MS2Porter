const version = "0";

let style;

export default {
goosemodHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/j0lol/i-fixed-discord/main/css/theme.css")`
      )
    );
  },

  onRemove: async () => {
    style.remove();
  },





}
};
