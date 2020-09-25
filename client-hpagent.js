// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

// process.env.HTTP_PROXY = 'https://localhost:3129';
// process.env.HTTP_PROXY = 'https://localhost:3128';
// process.env.HTTPS_PROXY = 'https://localhost:3129';

const got = require('got');
const { HttpProxyAgent, HttpsProxyAgent } = require('hpagent');

// const url = 'http://www.arewelearningyet.com/';
const url = 'https://www.google.com/';

(async () => {
	try {
		debugger;
		const res = await got(url, {
			agent: {
				http: new HttpProxyAgent({
					keepAlive: true,
					keepAliveMsecs: 1000,
					maxSockets: 256,
					maxFreeSockets: 256,
					proxy: 'http://localhost:3128'
				}),
				https: new HttpsProxyAgent({
					keepAlive: true,
					keepAliveMsecs: 1000,
					maxSockets: 256,
					maxFreeSockets: 256,
					proxy: 'https://localhost:3129'
				})
			},
			https: {
				rejectUnauthorized: false
			},
			retry: 0
		});
		console.log('success');
	} catch (e) {
		console.log(e);
	}
})();
