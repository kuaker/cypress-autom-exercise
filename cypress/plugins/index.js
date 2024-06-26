require('dotenv').config()

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    on('task', {
        log(message) {
            console.log(message)
            return null
        },
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    return config
}