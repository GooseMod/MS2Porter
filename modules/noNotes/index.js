const version = "1.0.0";

let style;

export default {
goosemodHandlers: {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(`.userInfoSectionHeader-CBvMDh, .note-QfFU8y {
         display: none;
      }
      .infoScroller-3EYYns > .userInfoSection-2acyCx:first-of-type {
         margin-top: -45px;
      }
      .topSectionNormal-2-vo2m {
         z-index: 10;
      }`)
    );
  },

  onRemove: async () => {
    style.remove();
  },





}
};
