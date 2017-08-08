const lsRemote = require('./index.js');

lsRemote('https://github.com/git/git').then((refs) => {
	console.log(refs);
});
