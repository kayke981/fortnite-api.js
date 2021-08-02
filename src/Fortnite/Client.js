const map = require('../Client/map/map.js');
const playlists = require('../Client/playlists/playlists.js');
const shop = require('../Client/shop/shop.js');
class Client {
	constructor() {
	this.map = map;
	this.playlists = playlists;
	this.shop = shop;
	}
	
	async login(token) {
		if(!token) throw new TypeError('Provide an api token');
	}
 }

module.exports = Client;