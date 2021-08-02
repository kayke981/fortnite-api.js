const request = require('../../rest/HTTPAPIrequest.js');
const Constants = require('../../Constants/Constants.js')

async function playlist() {
	return await request('GET', `${Constants.API1}${Constants.EndPoints.playlist}`)
}
module.exports = playlist