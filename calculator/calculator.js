function add (a, b) {
	return a + b;
}

function subtract (a, b) {
return a - b;
}

function sum (arr) {
	let sum = 0;
	arr.forEach(function(num) {
		sum += num;
	});
	return sum;
}

function multiply (arr) {
	let total = 1;
	arr.forEach(function(num) {
		total *= num;
	});
	return total;
}

function power(a, b) {
	let total = 1;
	for(let i = 0; i < b; i++){
		total *= a;
	}
	return total;
}

function factorial() {

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
