const request = require('../../rest/HTTPAPIrequest.js');
const Constants = require('../../Constants/Constants.js')

async function map() {
	return await request('GET', Constants.API1 + Constants.Endpoints.map)
}

module.exports = map;