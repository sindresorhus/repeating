'use strict';
var test = require('ava');
var repeating = require('./');

test(function (t) {
	t.assert(repeating('a', 5) === 'aaaaa');
	t.assert(repeating('unicorn', 3) === 'unicornunicornunicorn');
	t.end();
});
