function pascalTriangle(row, col) {
	if (col > row || col < 0) return 0;
	if (col === 1) return 1;
	return (pascalTriangle(row - 1, col - 1) + pascalTriangle(row - 1, col));
}

module.exports = {
	pascalTriangle: pascalTriangle
};
