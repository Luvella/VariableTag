const VariableTag = require('../src/index');
const vt = new VariableTag({
	tags: {
		'user': 'sammy',
		'punctuation': '!'
	}
});

const text = vt.format('Hello %user%%punctuation%');
console.log(text);
