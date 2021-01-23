const version = "0";

let style;

export default {
gooseModHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/MrDragonBoi/bloody-hell-mate/main/index.css")`
      )
    );
  },

  onRemove: async () => {
    style.remove();
  },





}
};
