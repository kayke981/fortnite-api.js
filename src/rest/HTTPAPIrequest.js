const fetch = require('node-fetch');
const {messages, errors} = require('../error/message.js');

async function request(method, url, data, headers) {
let jsoN = {
	method: method
};
if(headers) {
	jsoN.headers = typeof data === 'string';
}
	if(data) {
		jsoN.body = typeof data === 'string' ? data : JSON.stringify(data);
	}
	

	const r = await fetch(url, jsoN);
	
	try {
	let json = await r.json();
	if(r.status === 200) {
		return json;
 }
	} catch {
		let msg = messages[r.status]
		let err = errors[r.status]
		if(r.status !== 200) {
			throw new err(`[${r.status}] - ${r.statusText}, reason: ${msg}`)
			
		}
	}
}

module.exports = request;