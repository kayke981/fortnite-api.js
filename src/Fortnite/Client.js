const map = require('../Client/map/map.js')

class Client {
	constructor() {
	
	this.map = map;
	
	
	}
	async login(token) {
		if(!token) throw new TypeError('Provide an api token')
		
	}
 }

module.exports = Client;