import test from 'ava';
import repeating from './';

test(t => {
	t.is(repeating('a', 5), 'aaaaa');
	t.is(repeating('unicorn', 3), 'unicornunicornunicorn');
});
