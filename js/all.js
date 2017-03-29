// in-use imports, just for convenience

const ex1_11 = require('./1.11');
console.log('1.11:');
console.log('recursive 10: ', ex1_11.ex1_11_recursive(10));
console.log('iterate 10: ', ex1_11.ex1_11_iterate(10));

const ex1_12 = require('./1.12');
console.log('1.12:');
console.log(ex1_12.pascalTriangle(4, 6));
console.log(ex1_12.pascalTriangle(1, 1));
console.log(ex1_12.pascalTriangle(3, 2));
console.log(ex1_12.pascalTriangle(4, 2));
console.log(ex1_12.pascalTriangle(5, 3));
console.log(ex1_12.pascalTriangle(5, 2));
console.log(ex1_12.pascalTriangle(6, 4));

