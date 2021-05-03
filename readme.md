# repeating

> Repeat a string - fast

**This module is moot now. Just use [`String#repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).**

## Install

```
$ npm install repeating
```

## Usage

```js
import repeating from 'repeating';

repeating(5);
//=> '     '

repeating(100, 'unicorn ');
//=> 'unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn unicorn '
```

## API

### repeating(count, string?)

#### count

Type: `number`

Times the `string` should be repeated.

#### string

Type: `string`\
Default: `' '`

String to repeat.

## Related

- [repeating-cli](https://github.com/sindresorhus/repeating-cli) - CLI for this module
- [indent-string](https://github.com/sindresorhus/indent-string) - Indent each line in a string

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-repeating?utm_source=npm-repeating&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
