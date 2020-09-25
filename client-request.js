// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const fs = require('fs');
const request = require('request');

// const url = 'http://www.arewelearningyet.com/';
const url = 'https://www.google.com/';

const req = request.get(url, {
	// ca: fs.readFileSync('./etc/squid/ssl/myCA.pem'),
	strictSSL: false,
	// proxy: 'http://localhost:3128'
	proxy: 'https://localhost:3129'
}, (error, response, body) => {
	if (error) {
		console.log(error);
	} else {
		console.log('success');
	}
});

// req.on('error', console.error);

// const http = require('http');

// http.request({
// 	host: 'localhost', // IP address of proxy server
// 	port: 1337, // port of proxy server
// 	method: 'CONNECT',
// 	path: 'google.com:443', // some destination, add 443 port for https!
//   }).on('connect', (res, socket) => {
// 	  console.log(res.statusCode);
// 	if (res.statusCode === 200) { // connected to proxy server
// 	  https.get({
// 		host: 'www.google.com',
// 		socket: socket,    // using a tunnel
// 		agent: false,      // cannot use a default agent
// 		path: '/'  // specify path to get from server
// 	  }, (res) => {
// 		let chunks = []
// 		res.on('data', chunk => chunks.push(chunk))
// 		res.on('end', () => {
// 		  console.log('DONE', Buffer.concat(chunks).toString('utf8'))
// 		})
// 	  })
// 	}
//   }).on('error', (err) => {
// 	console.error('error', err)
//   }).end()
