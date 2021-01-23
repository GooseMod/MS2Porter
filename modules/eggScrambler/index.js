let version = '1.0.3';

let interval;

function scrambleMessages() {
  interval = setInterval(function () {
    let messages = document.getElementsByClassName("messageContent-2qWWxC");

    for (let message of messages) {
      message.textContent = [...message.textContent].fill('\u{1F95A}').join('');
    }
  }, 500);
}

export default {
goosemodHandlers: {
  // Activating module
  onImport: async function () {
    goosemodScope.logger.debug('scrambleMessages', 'Starting Egg...');
    scrambleMessages();
  },
  
  // Removing function
  onRemove: async function () {
    clearInterval(interval);
  },
  
  // Random thing I don't rlly want
  logRegionColor: 'red',
  
  // Data


  

  

}
};
