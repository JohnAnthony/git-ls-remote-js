# git-ls-remote-js

## About 
A simple, pure-javascript `git ls-remote` replacement for Node.JS. Suitable for
AWS Lambdas and other restrictive environments.

## Example usage
const lsRemote = require('./index.js');

```js
lsRemote('https://github.com/JohnAnthony/git-ls-remote').then((refs) => {
	console.log(refs);
});
```

## License
MIT &copy; Optimise Media
