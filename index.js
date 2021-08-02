const client = require('./src/Fortnite/Client.js');
const constants = require('./src/Constants/Constants.js')

module.exports = {
	Client: client,
	HTTP: {
		1: `${constants.API1}`,
		2: `${constants.API2}`,
	}
}
/*
const a = require('./src/rest/HTTPAPIrequest.js')

a('GET', 'https://fortnite-api.com/v2/map')
*/