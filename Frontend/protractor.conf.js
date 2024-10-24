exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
      './e2e/features/**/*.feature' // Verifica que la ruta sea correcta
    ],
    cucumberOpts: {
        require: ['./e2e/step_definitions/*.ts'], // Verifica que la ruta sea correcta
        tags: false,
        strict: true,
        format: ['json:./e2e/reports/cucumber_report.json'],
        dryRun: false,
        compiler: []
    },
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true
};  