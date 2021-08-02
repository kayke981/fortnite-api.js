const request = require('../../rest/HTTPAPIrequest.js');
const Constants = require('../../Constants/Constants.js');

async function shop() {
	return await request('GET', Constants.API1 + Constants.Endpoints.shop);
}

module.exports = shop;