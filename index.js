const url = require('url');
const net = require('net');
const gitfetch = require('git-fetch-pack');
const transport = require('git-transport-protocol');

const lsRemote = (input) => new Promise((resolve, reject) => {
	const client = gitfetch(input);
	const tcp = net.connect({
		host: url.parse(input).host,
		port: 9418
	});
	const tags = new Array();

	client.refs.on('data', (ref) => tags.push(ref));

	client.pipe(transport(tcp))
	      .on('error', reject)
	      .pipe(client)
	      .on('error', reject)
	      .once('end', () => resolve(tags));
});

lsRemote('https://github.com/JohnAnthony/ergodox-firmware').then((refs) => {
    console.log(refs);
});
