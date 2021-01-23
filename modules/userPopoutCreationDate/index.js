const version = '1.0.2';

let getUser, getMembers, getGuildId;
let interval;

const run = () => {
  let popout = document.getElementsByClassName('userPopout-3XzG_A')[0];
  
  if (!popout) return;
  if (popout.classList.contains('more-info-added')) return;

  let user = getUser.getUser(getMembers.getMembers(getGuildId.getGuildId()).find((x) => getUser.getUser(x.userId).username === popout.ariaLabel).userId);

  let toCloneEl = popout.getElementsByClassName('headerTagWithNickname-3IthZD')[0];

  if (!toCloneEl) {
    let headerEl = popout.getElementsByClassName('headerTagNoNickname-ENx6no')[0];
    
    let parentEl = document.createElement('div');

    headerEl.parentElement.appendChild(parentEl);

    parentEl.outerHTML = `<div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style="flex: 1 1 auto;"><div class="headerTagWithNickname-3IthZD headerTag-2pZJzA size14-3iUx6q nameTag-m8r81H"></div></div>`;

    toCloneEl = popout.getElementsByClassName('headerTagWithNickname-3IthZD')[0];

    headerEl.parentElement.style.flexDirection = 'column';
  }

  toCloneEl.parentElement.style.flexDirection = 'column';

  let el = toCloneEl.cloneNode(false);

  el.textContent = `Created On: ${user.createdAt.toDateString().split(' ').slice(1).join(' ')}`;

  toCloneEl.parentElement.appendChild(el);

  popout.classList.add('more-info-added');
};

export default {
gooseModHandlers: {
  onImport: async function () {
    getUser = goosemodScope.webpackModules.findByProps('getUser');
    getMembers = goosemodScope.webpackModules.findByProps('getNick');
    getGuildId = goosemodScope.webpackModules.findByPropsAll('getGuildId')[1];

    interval = setInterval(run, 300);
  },

  onLoadingFinished: async function () {
  },

  onRemove: async function () {
    clearInterval(interval);
  },

  logRegionColor: 'darkred',



}
};