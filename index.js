'use strict';
var isFinite = require('is-finite');
var floor = Math.floor;

module.exports = function (str, n) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string as the first argument');
	}

	if (n < 0 || !isFinite(n)) {
		throw new TypeError('Expected a finite positive number');
	}

	var ret = '';

	do {
		if (n % 2) {
			ret += str;
		}

		n = floor(n / 2);
		str += str;
	} while (n > 0);

	return ret;
};
