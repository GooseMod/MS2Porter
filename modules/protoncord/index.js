const version = "0";

let style;

export default {
gooseModHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://giangamerino.github.io/protoncord/index.css");`
      )
    );
  },

  onRemove: async () => {
    style.remove();
  },





}
};
