// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

// process.env.HTTP_PROXY = 'https://localhost:3129';
// process.env.HTTP_PROXY = 'https://localhost:3128';
// process.env.HTTPS_PROXY = 'https://localhost:3129';

const got = require('got');
const ProxyAgent = require('proxy-agent');

// const url = 'http://www.arewelearningyet.com/';
const url = 'https://www.google.com/';

(async () => {
	try {
		const res = await got(url, {
			agent: {
				// http: new ProxyAgent({
				// 	proxy: 'http://localhost:3128'
				// }),
				https: new ProxyAgent('https://localhost:3129')
				// https: new ProxyAgent({
				// 	protocol: 'https',
				// 	hostname: 'localhost',
				// 	port: 3129
				// })
			},
			retry: 0
		});
		console.log('success');
	} catch (e) {
		console.log(e);
	}
})();
