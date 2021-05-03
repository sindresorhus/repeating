export default function repeating(count, repeatString = ' ') {
	if (typeof repeatString !== 'string') {
		throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof repeatString}\``);
	}

	if (count < 0 || !Number.isFinite(count)) {
		throw new TypeError(`Expected \`count\` to be a positive finite number, got \`${count}\``);
	}

	let returnValue = '';

	do {
		if (count & 1) {
			returnValue += repeatString;
		}

		repeatString += repeatString;
	} while ((count >>= 1));

	return returnValue;
}
