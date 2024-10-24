const { defineConfig } = require('cucumber');

module.exports = defineConfig({
  default: {
    require: ['step_definitions/**/*.js'],
    format: ['progress'],
    features: ['./features/**/*.feature'],
  },
});
