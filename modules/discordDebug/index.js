const version = '1.0.2';

export default {
goosemodHandlers: {
  onImport: async function () {
  },

  onLoadingFinished: async function () {
    let electronInfo = goosemodScope.webpackModules.findByProps('ua');

    let moduleItems = [];
    let moduleVersions = goosemodScope.webpackModules.findByProps('moduleVersions').moduleVersions;

    for (let m in moduleVersions) {
      moduleItems.push({
        type: 'text',
        text: m,
        subtext: moduleVersions[m]
      });
    }

    goosemodScope.settings.createItem('Discord Debug', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Electron Information'
      },

      {
        type: 'text',
        text: 'Electron',
        subtext: electronInfo.description
      },
      {
        type: 'text',
        text: 'User Agent',
        subtext: electronInfo.ua
      },
      {
        type: 'text',
        text: 'OS',
        subtext: electronInfo.os.toString()
      },

      {
        type: 'header',
        text: 'Discord (Native) Modules'
      },

      ...moduleItems
    ]);
  },

  onRemove: async function () {
    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Discord Debug');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',



}
};
