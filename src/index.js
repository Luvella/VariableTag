class VariableTag {
	constructor(options) {
		this.tags = {};

		for (const tag in options.tags) this.tags[`%${tag}%`] = options.tags[tag];
	}

	format(str) {
		for (const tag in this.tags) str = str.replace(new RegExp(tag, "g"), this.tags[tag]);
		return str;
	}
}

module.exports = VariableTag;
