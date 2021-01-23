let version = '2.0.3';

if (typeof window === 'undefined' || typeof window.document === 'undefined' || typeof window.document.styleSheets === 'undefined') { // JSON API generator evals
  global.window = { document: { styleSheets: [0] } };
}

let sheet = window.document.styleSheets[0];
let tweakrules = [];

let tweaks = {
  'rainbowMode': true
};

const tweakFunctions = {
  'rainbowMode': {
    enable: () => {
      tweakrules.push(sheet.insertRule(`.messageContent-2qWWxC {
        background: repeating-linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red);
        -webkit-background-clip: text;
        color: transparent;
        background-size: 800% 800%;
        animation: rainbow 8s ease infinite;
      }`, sheet.cssRules.length));

      tweakrules.push(sheet.insertRule(`code.inline {
        color: #fff;
      }`, sheet.cssRules.length));

      tweakrules.push(sheet.insertRule(`@keyframes rainbow { 
        0%{background-position:0% 50%}
        50%{background-position:100% 25%}
        100%{background-position:0% 50%}
      }`, sheet.cssRules.length));
    },

    disable: () => {
      for (let i = 0; i < tweakrules.length; i++) {
        sheet.deleteRule(tweakrules[i]);
      }
    }
  }
};

const enableTweak = (tweakName) => {
  tweakFunctions[tweakName].enable();

  tweaks[tweakName] = true;
};

const disableTweak = (tweakName) => {
  tweakFunctions[tweakName].disable();

  tweaks[tweakName] = false;
};

const setTweak = (tweakName, value) => {
  if (value) {
    enableTweak(tweakName);
  } else {
    disableTweak(tweakName);
  }
};

export default {
gooseModHandlers: {
  onImport: async function () {
    goosemodScope.logger.debug('rainbowMode', 'Enabling Rainbow Tweaks');
  },

  onLoadingFinished: async function () {
    for (let t in tweaks) {
      if (tweaks[t] === true) enableTweak(t);
    }

    goosemodScope.settings.createItem('RainbowCord', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Themes'
      },
      {
        type: 'toggle',
        text: 'Rainbow Mode',
        subtext: 'Messages are rainbow',
        onToggle: (c) => { setTweak('rainbowMode', c); },
        isToggled: () => tweaks['rainbowMode']
      }
    ]);
  },

  onRemove: async function () {
    for (let t in tweaks) {
      if (tweaks[t] === true) disableTweak(t);
    }

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'RainbowCord');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'black',



}
};
