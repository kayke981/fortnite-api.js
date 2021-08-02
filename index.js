const client = require('./src/Fortnite/Client.js');
const constants = require('./src/Constants/Constants.js')
let Endpoints = Object.entries(constants.Endpoints)
module.exports = {
	Client: client,
	HTTP: {
		1: `${constants.API1}`,
		2: `${constants.API2}`,
	},
	Endpoints: Endpoints.length
}