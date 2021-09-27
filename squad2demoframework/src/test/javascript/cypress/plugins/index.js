/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}
const axios = require('axios')
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs');
const NodeRSA = require('node-rsa');

module.exports = (on, config) => {
    let  client = "1632494179979"
    let key = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhtmldEVYTzEHiee2W7xS
XXUEkpXt8GjgudN9T8VNJzON7p7sUlB8toQFP6Kxezefhjc5KugszcUpxazGsJNL
XzzHbumxUGbAZ2BTuztr9fHgJxwLfjke2tshjlt8CaI4/QqFvFE/r/DiMPCxK/M7
p4nWoZpP28IGPqME6JAsEW/BdNyty0jpAGkbEob2KMBAM6+G61s3NKhQcJZcEO11
xG9XSnES9NDvXwr7JZpNzkuSHBzNQuPPysARklyvluUloUL1VIs+srnpVRATuuOA
G3sue2wVfdR7cWrbdVHNpq0eDvRagnOUANdw05PTIIzQ+YRLU4gnc+ZuxM71+gNK
eQIDAQAB
-----END PUBLIC KEY-----`

    on('file:preprocessor', cucumber())

    on('task', {
        log(message) {
            console.log(message)

            return null
        },
        table(message) {
            console.table(message)

            return null
        }
    })

    on('before:run', (details) => {
        let runTime = Date.now()
        let pubKey = new NodeRSA().importKey(key, 'pkcs8-public-pem')
        let val = pubKey.encrypt("Start Time: " + runTime)
        let encVal = val.toString('base64')

        const options = {
            headers:{ 
                "Content-Type": "application/json"
            }
        }
        axios.post('https://tvi5chzs35.execute-api.eu-west-2.amazonaws.com/ProcessCH', {
            Client: client,
            ClientProvidedValue: encVal
                }, options)
            .then(response => {
                const code = response.status;
                if (code === 200) {
                    console.log('Call home success')
                } else {
                    throw new Error('Call home failed')
                }
            })
    })
}