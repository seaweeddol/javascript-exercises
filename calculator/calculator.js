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

function multiply () {

}

function power() {

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
