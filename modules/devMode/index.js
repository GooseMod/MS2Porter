let version = '3.0.1';

export default {
goosemodHandlers: {
  onImport: async function() {
    goosemodScope.logger.debug('devMode', 'Enabling Developer Mode');

		Object.defineProperty(goosemodScope.webpackModules.findByProps('isDeveloper'), 'isDeveloper', { configurable: true, writable: true, value: 1 });
	},
	
	onRemove: async function() {

	},

	logRegionColor: 'darkgreen',
	


}
};