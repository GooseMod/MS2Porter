let version = '1.0.2';

export default {
gooseModHandlers: {
  onImport: async function () {
    if (window.localStorage === undefined) {
      alert('Clear Recent Games: Could not find localStorage, will not work')
    }
  },

  onLoadingFinished: async function () {
    goosemodScope.settings.createItem('Clear Recent Games', [''], async () => {
      if (!(await goosemodScope.confirmDialog('Clear', 'Clear Recent Games', 'Are you sure you want to clear your recent games?'))) {
        return;
      }

      let c = JSON.parse(localStorage.getItem('RunningGameStore'));

      c.gamesSeen = [];

      localStorage.setItem('RunningGameStore', JSON.stringify(c));

      if (await goosemodScope.confirmDialog('Reload', 'Reload Discord', 'To actually update the recent games after clearing it, Discord requires a reload. Without it, it will still look like recent games have not been cleared. This will also uninstall GooseMod due to reloading.')) {
        window.location.reload();
      }
    });
  },

  onRemove: async function () {
    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Clear Recent Games');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',



}
};