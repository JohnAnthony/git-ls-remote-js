# git-ls-remote-js

## About 
A simple, pure-javascript `git ls-remote` replacement for Node.JS. Suitable for
AWS Lambdas and other restrictive environments.

## Example usage

```js
const lsRemote = require('git-ls-remote-js');

lsRemote('https://github.com/git/git').then((refs) => {
	console.log(refs);
});
```

## License
MIT &copy; [Optimise Media](https://www.optimisemedia.com/)
