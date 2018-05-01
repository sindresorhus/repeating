# repeating [![Build Status](https://travis-ci.org/sindresorhus/repeating.svg?branch=master)](https://travis-ci.org/sindresorhus/repeating)

> Repeat a string - fast

**This module is moot now. Just use [`String#repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).**


## Install

```
$ npm install --save repeating
```


## Usage

```js
const repeating = require('repeating');

repeating(5);
//=> '     '

repeating(100, 'unicorn ');
//=> 'unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn '
```


## API

### repeating(count, [string])

#### count

Type: `number`

Times the `string` should be repeated.

#### string

Type: `string`<br>
Default: `' '`

String to repeat.


## Related

- [repeating-cli](https://github.com/sindresorhus/repeating-cli) - CLI for this module
- [indent-string](https://github.com/sindresorhus/indent-string) - Indent each line in a string


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
