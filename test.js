import test from 'ava';
import m from './';

test('error', t => {
	t.throws(() => m(5, 5), 'Expected `input` to be a `string`, got `number`');
	t.throws(() => m(-5, 'foo'), 'Expected `count` to be a positive finite number, got `-5`');
});

test('repeating', t => {
	t.is(m(5), '     ');
	t.is(m(5, ''), '');
	t.is(m(5, 'a'), 'aaaaa');
	t.is(m(3, 'unicorn'), 'unicornunicornunicorn');
});
