// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

// process.env.HTTP_PROXY = 'https://localhost:3129';
// process.env.HTTP_PROXY = 'https://localhost:3128';
// process.env.HTTPS_PROXY = 'https://localhost:3129';

const fs = require('fs');
const fetch = require('make-fetch-happen');

// const url = 'http://www.arewelearningyet.com/';
const url = 'https://www.google.com/';

(async () => {
	try {
		const res = await fetch(url, {
			proxy: 'https://localhost:3129',
			redirect: 'manual',
			retry: 0
		});
		console.log('success');
		await res.text();
		// console.log(await res.text());
		// console.log(process._getActiveHandles());
	} catch (e) {
		console.log(e);
	}
})();
