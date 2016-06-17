'use strict';
module.exports = (n, str) => {
	str = str === undefined ? ' ' : str;

	if (typeof str !== 'string') {
		throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof str}\``);
	}

	if (n < 0 || !Number.isFinite(n)) {
		throw new TypeError(`Expected \`count\` to be a positive finite number, got \`${n}\``);
	}

	let ret = '';

	do {
		if (n & 1) {
			ret += str;
		}

		str += str;
	} while ((n >>= 1));

	return ret;
};
