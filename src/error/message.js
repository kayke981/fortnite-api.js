const messages = {
	404: 'the link is wrong',
	400: 'invalid parameter',
	402: 'Payment required',
	401: 'Not authorized',
	429: 'You suffered rate limit'
}

const errors = {
	404: TypeError,
	402: Error,
	401: Error,
	400: TypeError,
	429: Error
}

module.exports = {
 messages,
 errors
}