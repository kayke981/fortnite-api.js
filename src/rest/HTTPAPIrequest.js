const fetch = require('node-fetch');
const messages = require('../error/message.js');

async function request(method, url, headers, data) {
let jsoN = {
	method: method
}
if(headers) {
	jsoN.headers = typeof data === 'string'
}
	if(data) {
		jsoN.body = typeof data === 'string' ? data : JSON.stringify(data)
	}
	

	const r = await fetch(url, jsoN)
	
	try {
	let json = await r.json();
	if(r.status === 200) {
		return json
 }
	} catch {
		let msg = messages[r.status]
		if(r.status !== 200) {
			throw new TypeError(`[${r.status}] - ${r.statusText}, reason: ${msg}`)
		}
	}
}

module.exports = request;