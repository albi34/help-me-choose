exports.config = {
    specs: ['assets/js/app/**/*.specs.js','assets/js/app/*.specs.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:5000',
    framework: 'jasmine',
    chromeOnly: true,
    browser: {
      ignoreSynchronization: true
    }
};
