let originalFunc;

let macros = {};

let version = '1.1.3';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default {
goosemodHandlers: {
  onImport: async function () {
    let mod = goosemodScope.webpackModules.findByProps("jumpToMessage", "_sendMessage");
    originalFunc = mod.sendMessage;

    mod.sendMessage = async function (_, message) {//_, [, message]) {
      if (message.content.startsWith('/m')) {
        let rpl = message.content.replace('/m ', '');
        let name = rpl.split(' ')[0];
        let content = rpl.split(' ').slice(1).join(' ');

        console.log(name, content);

        if (!content) {
          if (!name || name === '/m') {
            goosemodScope.showToast(`Syntax: "/m <macro_name> [macro content]" - no macro content = get macro, with macro content = set macro`, {timeout: 2000});
            await sleep(2000);

            goosemodScope.showToast(`Your Macros:`, {timeout: 1000});

            await sleep(1000);

            for (let t of Object.keys(macros).map((x) => `${x}: ${macros[x]}`)) {
              goosemodScope.showToast(t, {timeout: 1000});
              await sleep(1000);
            }

            return;
          }

          if (!macros[name]) {
            goosemodScope.showToast(`No macro "${name}"`);

            return;
          }

          message.content = macros[name];
        } else {
          macros[name] = content;

          goosemodScope.showToast(`Macro "${name}" saved`);

          return;
        }
      }
      
      return originalFunc.apply(this, arguments);
    };
  },

  onRemove: async function () {
    goosemodScope.webpackModules.findByProps("jumpToMessage", "_sendMessage").sendMessage = originalFunc;
  },

  getSettings: () => [macros],
  loadSettings: ([_macros]) => {
    macros = _macros;
  },

  logRegionColor: 'darkred',



}
};