const request = require('request')

request({
	method: 'POST',
	url: 'http://localhost:8080',
	json: true,
	body:  {
		interval: 2000,
	},
}, (error, response, body) => {
	console.log('error:', error)
	console.log('statusCode:', response && response.statusCode)
	console.log('body:', body)
})

request({
	method: 'GET',
	url: 'http://localhost:8080?interval=2000'
},  (error, response, body) => {
	console.log('error:', error)
	console.log('statusCode:', response && response.statusCode)
	console.log('body:', body)
})