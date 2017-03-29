//1.11
function ex1_11_recursive(n) {
	if (typeof n !== 'number') throw(new Error('NaN'));

	if (n < 3) {
		return n;
	}
	return ex1_11_recursive(n - 1) + ex1_11_recursive(n - 2) + ex1_11_recursive(n - 3);
}

function ex1_11_iterate(n) {
	if (typeof n !== 'number') throw(new Error('NaN'));


	let map = new Map();
	for (let i = 0; i <= n; i++) {
		if (i < 3) {
			map.set(i, i);
			continue;
		}
		map.set(i, calculateValue(i))
	}

	function calculateValue(val) {
		// in value we trust (and lazy)
		return (map.get(val - 3) + map.get(val - 2) + map.get(val - 1))
	}

	return map.get(n);
}

module.exports = {
	ex1_11_recursive: ex1_11_recursive,
	ex1_11_iterate, ex1_11_iterate
};