let version = '1.0.4';

let interval;

function expand() {
  interval = setInterval(function () {
    let messages = document.getElementsByClassName("messageContent-2qWWxC");

    for (let message of messages) {
      message.textContent = [...message.textContent].filter(e => e != " ").join(' ');
    }
  }, 5000);
}

export default {
gooseModHandlers: {
  // Activating module
  onImport: async function () {
    goosemodScope.logger.debug('expandCord', 'e x p a n d i n g..');
    expand();
  },

  // Removing function
  onRemove: async function () {
    clearInterval(interval);
  },

  // Random thing I don't rlly want
  logRegionColor: 'blue',

  // Data


}
};
