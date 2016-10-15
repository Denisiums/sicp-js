console.log('Hi!');
//I'm lazy to create unique names for every function (for excersizes). Sorry.

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

//1.5
function p () {
	return p();
}

function test (x, y) {
	return (x === 0) ? 0 : y;
}

// console.log(test (0, p())); // => infinite recursuion in applicative order
/////////////////////////////////////////////

//1.1.7 Newton binoma

function sqrtIter (guess, x) {
	return (goodEnough(guess, x)) ? guess : sqrtIter(improve(guess, x), x);
}

//readable
function sqrtIter2 (guess, x) {
	let i = 0;
	function inner(guess, x) {
		i++;
		if (goodEnough2(guess, x)) {
			console.log('sqrtIter2 cycles: ', i);
			return guess;
		}
		return inner(improve(guess, x), x);
	}
	return inner(guess, x);
}

function improve(guess, x) {
	return average(guess, (x / guess));
}

function average(x, y) {
	return (x + y) / 2;
}

function goodEnough (guess, x) {
	return (abs(square(guess) - x) < 0.00001);
}

	//guess 1
function sqrt(x) {
	return sqrtIter(1, x);
}

function sqrt2(x) {
	return sqrtIter2(1, x);
}

console.log('1.1.7 sqrt 0.00000001: v1-v2: ', sqrt(0.00000001), sqrt2(0.00000001));

//1.7
function goodEnough2(guess, x) {
	return ((abs(guess/improve(guess, x) - 1)) < 0.00001);
}

//1.8 sqrt3:

/// (x/y^2 + 2y)3 - improve^3

function root3(x) {
	return root3Iter(1, x);
}

function root3Iter (guess, x) {
	let i = 0;
	function inner(guess, x) {
		i++;
		if (goodEnoughRoot3(guess, x) || i > 300) {
			console.log('root3Iter cycles: ', i);
			return guess;
		}
		return inner(improveRoot3(guess, x), x);
	}
	return inner(guess, x);
}

function improveRoot3(guess, x) {
	return ((x / Math.pow(guess, 2) + 2 * guess) / 3);
}

function goodEnoughRoot3(guess, x) {
	return ((abs(guess/improveRoot3(guess, x) - 1)) < 0.00001);
}

console.log('root3 from 28: ', root3(28));

//here we should move outer functions into the main function and impure our functions, but i'm lazy.

// 1.2 procedures and spawned processes

function recursiveFactorial(n) {
	if (typeof n === 'number' && n >= 0) {
		if (n === 0 || n === 1) return 1;
		return n * recursiveFactorial(n - 1);
	} else {
		throw new Error('RecursiveFactorial parameter should be a number and more or equal zero');
	}
}

console.log('recursiveFactorial(6): ', recursiveFactorial(6));

function tailRecursionFactorial(n) {
	if (typeof n === 'number' && n >= 0) {
		return factIter(1, 1, n);
	} else {
		throw new Error('RecursiveFactorial parameter should be a number and more or equal zero');
	}

	function factIter(result, counter, maxCount) {
		if (counter > maxCount) return result;
		return factIter(result * counter, counter + 1, maxCount);
	}
}

console.log('tailRecursionFactorial(6)', tailRecursionFactorial(6));

function cycleFactorial(n) {
	//no argument checking more for this excersizes
	let result = 1;
	for (let i = 1; i <= n; i++ ) {
		result *= i; //result = result * i;
	}
	return result;
}

console.log('cycleFactorial(6)', cycleFactorial(6));

// 1.9 (+ 4 5)

/*
			a) - recursive
(+ 4 5)
(inc (+ (dec 4) 5))
(inc (+ 3 5))
(inc (inc (+ 2 5)))
(inc (inc (inc (+ 1 5))))
(inc (inc (inc ( inc (+ 0 5)))))
(inc (inc (inc ( inc 5))))
(inc (inc (inc 6))))
(inc (inc 7))
(inc 8)
9

			b) - iterative
(+ 4 5)
(+ (dec 4) (inc 5))
(+ 3 6)
(+ 2 7)
(+ 1 8)
(+ 0 9)
9
*/

// 1.10 Akkermans function

/*
(A 1 10)
(A (- x 1) (A x (- y 1)))
(A (- 1 1) (A 1 (- 10 1)))
(A 0 (A 1 9))
(A 0 (A 0 (A 1 8)))
(A 0 (A 0 (A 0 (A 1 7)))
(A 0 (A 0 (A 0 (A 0 (A 1 6)))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 1 5)))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 1 4)))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 1 3)))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 1 2)))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 1 1))) //lazy parenthesis
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 2))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 4)
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 8)
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 16)
(A 0 (A 0 (A 0 (A 0 (A 0 32)
(A 0 (A 0 (A 0 (A 0 64)
(A 0 (A 0 (A 0 128)
(A 0 (A 0 256)
(A 0 512)
1024

(A 0 n) === 2n
(A 1 n) === 2^n, n>0

(A 2 4)
(A 1 (A 2 3)))
(A 1 (A 1 (A 2 2)))
(A 1 (A 1 (A 1 (A 2 1)))
(A 1 (A 1 (A 1 2)) === 2^2
(A 1 (A 1 4) === 2^4
(A 1 16)
2^16

(A 2 n) === 2^(n^n)

(A 3 3)
(A 2 (A 3 2))
(A 2 (A 2 (A 3 1))
(A 2 (A 2 2))
(A 2 2^2^2)
2^(2^2^2)

(A 3 n) === 2^(n^n^n)
*/

