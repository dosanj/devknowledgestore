const config = require('./tailwind.config');
config.purge = {
  content: config.purge,
  enabled: true,
};
module.exports = config;
