let version = '1.0.0';

let el;

export default {
goosemodHandlers: {
  onImport: async function () {
    goosemodScope.patcher.contextMenu.add('message',
      {
        label: 'Hide Message',
        action: (_originalArgs, extraInfo) => {
          document.getElementById(`chat-messages-${extraInfo.message.id}`).remove();
        }
      }
    );
  },

  onRemove: async function () {
    goosemodScope.patcher.contextMenu.remove('Hide Message');
  },



}
};
