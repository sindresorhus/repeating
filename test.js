import test from 'ava';
import m from './';

test(t => {
	t.is(m('a', 5), 'aaaaa');
	t.is(m('unicorn', 3), 'unicornunicornunicorn');
});
