let version = '1.0.0';
let unpatch;

export default {
gooseModHandlers: {
  onImport: async function() {
    unpatch = goosemodScope.patcher.patch(goosemodScope.webpackModules.findByProps('createPendingReply'), 'createPendingReply', (data) => { data[0].shouldMention = false}, true);
  },

  onRemove: async function() {
    unpatch()
  },







}
};
