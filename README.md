# VariableTag
Like template literals, but for user inputted strings and custom variables.

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