const {Neutrino} = require('neutrino');
const pkg = require('./package.json');
const api = Neutrino();

// Add the rest of the presets:
pkg.neutrino.use.map(require).map(api.use);

module.exports = api.eslintrc();
