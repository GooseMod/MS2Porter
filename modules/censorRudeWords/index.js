let version = '0.1.0';

const getWantedHandler = (mod) => mod._orderedActionHandlers.MESSAGE_CREATE.find((x) => x.crwWanted === true || x.actionHandler.toString().includes('receivePushNotification'));

let index = 0;

let words = ['cunt', 'wanker', 'fuck', 'bitch', 'shit', 'crap', 'bollocks', 'arse', 'ass', 'piss', 'frick'];

const setup = () => {
  const mod = goosemodScope.webpackModules.findByProps('register');

  let original;
  try {
    original = getWantedHandler(mod);
  } catch (e) {
    return setTimeout(setup, 3000);
  }
  
  original.crwWanted = true;

  goosemodScope.patcher.inject('censor-rude-words', original, 'actionHandler', (args) => {
    for (let w of words) {
      if (!w.enabled) continue;

      args[0].message.content = args[0].message.content.replace(new RegExp(`${w.word}`, 'g'), w.censored);
    }
  
    return args;
  }, true);
};

export default {
gooseModHandlers: {
  onImport: async function () {
    words = words.map((x) => ({ word: x, enabled: true, censored: [...x].map((y, i) => i >= x.length / 4 && i < x.length - x.length / 4 ? '\\*' : y).join('') }));

    goosemodScope.settings.createItem('Censor Rude Words', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Words'
      },

      ...words.map((x) => ({
        type: 'toggle',
        text: x.word[0].toUpperCase() + x.word.substring(1),
        onToggle: (c) => { x.enabled = c; },
        isToggled: () => x.enabled
      }))
    ]);
  },

  onLoadingFinished: async function () {
    setup();
  },

  onRemove: async function () {
    goosemodScope.patcher.uninject('censor-rude-words');
  },

  getSettings: () => [words],
  loadSettings: ([_words]) => {
    for (let w of _words) {
      let local = words.find((x) => x.word === w.word);
      if (!local) continue;

      local.enabled = w.enable;
    }
  },



}
};

