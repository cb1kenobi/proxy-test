// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

// process.env.HTTP_PROXY = 'https://localhost:3129';
// process.env.HTTP_PROXY = 'https://localhost:3128';
// process.env.HTTPS_PROXY = 'https://localhost:3129';

const fs = require('fs');
const pacote = require('pacote');

(async () => {
	try {
		debugger;

		const pkg = await pacote.manifest('appcd@3.2.0', {
			proxy: 'https://127.0.0.1:3129',
			strictSSL: false
		});

		console.log(pkg);
		console.log('success');
	} catch (e) {
		console.log(e);
	}
})();
