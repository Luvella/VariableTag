class VariableTag {
	constructor(options = {}) {
		if (Array.isArray(options) || typeof options !== "object" && options !== null) throw new TypeError("expected options to be an object")
		this.options = Object.assign({tags: {}}, options)
		this.tags = {};

		for (const tag in this.options.tags) this.tags[`%${tag}%`] = this.options.tags[tag];
	}

	format(str) {
		for (const tag in this.tags) str = str.replace(new RegExp(tag, "g"), this.tags[tag]);
		return str;
	}
}

module.exports = VariableTag;
