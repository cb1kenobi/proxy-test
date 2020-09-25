// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

// process.env.HTTP_PROXY = 'https://localhost:3129';
// process.env.HTTP_PROXY = 'https://localhost:3128';
// process.env.HTTPS_PROXY = 'https://localhost:3129';

const fs = require('fs');
const got = require('got');
const HttpProxyAgent = require('http-proxy-agent');
const HttpsProxyAgent = require('https-proxy-agent');

const url = 'http://www.arewelearningyet.com/';
// const url = 'https://www.google.com/';

(async () => {
	try {
		debugger;
		const res = await got(url, {
			agent: {
				http: new HttpProxyAgent({
					host: 'localhost',
					port: '3129',
					protocol: 'https:',
					path: '/',
					auth: null,
					timeout: 0,
					maxSockets: 15,
					rejectUnauthorized: false
				}),
				https: new HttpsProxyAgent({
					ca: fs.readFileSync('./etc/squid/ssl/ca-bundle.cert.pem'),
					host: 'foobardev.com',
					port: '3129',
					protocol: 'https:',
					path: '/',
					auth: null,
					timeout: 0,
					maxSockets: 15,
					rejectUnauthorized: false
				})
			},
			retry: 0
		});
		console.log('success');
	} catch (e) {
		console.log(e);
	}
})();
