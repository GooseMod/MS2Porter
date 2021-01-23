const version = '1.0.4';

let orig;

export default {
goosemodHandlers: {
  onImport: async function () {
    let mod = goosemodScope.webpackModules.findByProps('startTyping');
    orig = mod.startTyping;

    mod.startTyping = () => {};
  },

  onLoadingFinished: async function () {
  },

  onRemove: async function () {
    goosemodScope.webpackModules.findByProps('startTyping').startTyping = orig;
  },

  logRegionColor: 'darkred',



}
};