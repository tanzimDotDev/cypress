const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://app.klasio.dev',
        defaultCommandTimeout: 10000
    }
});