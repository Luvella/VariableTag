# VariableTag
An easy way of templating strings from external sources (user input, text/json config files)

## Install 
`npm i variabletag`

## Example
```js
const VariableTag = require('variabletag');
const vt = new VariableTag({
	tags: {
		'user': 'sammy',
		'punctuation': '!'
	}
});

const text = vt.format('Hello %user%%punctuation%');
console.log(text);
```
