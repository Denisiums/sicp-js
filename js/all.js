console.log('Hi!');

//1.1.4 Define
function square(x) {
	return x * x;
}

console.log(square(2 + 5));
function sumOfSquares(a, b) {
	return square(a) + square(b);
}

console.log(sumOfSquares(2, 3));

function example(a) {
	return sumOfSquares(a + 1, a * 2);
}

console.log(example(5));

// Полная подстановка, а затем - редукция - нормальный порядок вычисления

// Вычисление аргументов, а затем подстановка процедуры - это аппликативный порядок вычисления (Лисп, JS)

// 1.1.6 Conditions and predicats
function abs(x) {
	if (x > 0) return x;
	if (x === 0) return x;
	if (x < 0) return -x;
}

function abs2(x) {
	return x < 0 ? -x : x;
}

function abs3(x) {
	if (x < 0) {
		return -x;
	} else {
		return x;
	}
}

console.log('conditions examples: ', abs(-5), abs2(-5), abs3(-5), ' and positive: :', abs(3), abs2(3), abs3(3) );

// Exc. 1.1:
console.log('1.1:');
console.log(10, (5+3+4), (9-1), (6/2), (2*4 + (4-6)));
let a = 3;
let b = a + 1;
console.log(a + b + a * b, a === b);
console.log((b > a) && (b < a * b) ? b : a);
console.log((function() {
	if (a == 4) {
		return 6;
	} else if (b == 4) {
		return (6 + 7 + a);
	} else return 25;
})());

console.log(2 + (b > a ? b : a));
console.log(((a > b) ? a : (a < b) ? b : -1) * (a + 1)); // do not write like  this in the prod
//1.2

// lisp:  (/ (+ 5 4 (- 2 (- 3 (+ 6 (/ 4 5))))) (* 3 (- 6 2) (- 2 7)))
// js: just repeat exc.
//

//1.3
console.log('1.3:');

//code monkey mode on
function maxFrom (a, b, c) {
	if (Math.min(a, b, c) === a) return sumOfSquares(b, c); //from scope
	if (Math.min(a, b, c) === b) return sumOfSquares(a, c);
	return sumOfSquares(a, b);
}
console.log(maxFrom(3, 5, 2));

// 1.4
function aPlusAbsB (a, b) {
	function plus (a, b) {
		return a + b;
	}
	function minus (a, b) {
		return a - b;
	}
	return (b > 0 ? plus : minus) (a, b);
}

function aPlusAbsB2 (a, b) {
	return a + abs(b);
}
console.log('1.4: ', aPlusAbsB(3, -7), aPlusAbsB(3, 7), aPlusAbsB2(3, -7));
















