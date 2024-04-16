const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Adjust the specPattern to match your desired test file location
    specPattern: 'cypress/e2e/frontend/authentication*.spec.js',
    // You might also want to set the baseUrl here if all tests share a common base URL
    baseUrl: 'https://rym-students.webaryco.com/',
  },
  // Include any other global configuration options here
})
