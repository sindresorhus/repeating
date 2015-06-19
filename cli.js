#!/usr/bin/env node
'use strict';
var meow = require('meow');
var repeating = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ repeating <string> <count>',
		'',
		'Example',
		'  $ repeating \'unicorn \' 2',
		'  unicorn unicorn'
	]
});

if (cli.input.length === 0) {
	console.error('Expected a string and a count');
	process.exit(1);
}

if (cli.input.length === 1) {
	console.error('You have to define how many times to repeat the string');
	process.exit(1);
}

console.log(repeating(cli.input[0], Number(cli.input[1])));
