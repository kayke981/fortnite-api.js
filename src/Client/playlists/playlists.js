const request = require('../../rest/HTTPAPIrequest.js');
const Constants = require('../../Constants/Constants.js')

async function playlists() {
	return await request('GET', Constants.API1 + Constants.Endpoints.playlists)
}
module.exports = playlists