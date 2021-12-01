var previousNumber = 0;
var incrementCount = 0;
var numbers = [];

const fs = require('fs');

fs.readFile('input', (err, data) => {
    if (err) throw err;
    numbers = data.toString().split('\n');
    numbers.pop();
    previousNumber = parseInt(numbers[0]) + parseInt(numbers[1]) + parseInt(numbers[2]);
    for (var i = 1; i < numbers.length; i++) {
        currentIndex = i;
	var sum = parseInt(numbers[i]) + parseInt(numbers[i+1]) + parseInt(numbers[i+2]);
	currentNumber = sum;
	console.log(currentNumber);
        if (currentNumber > previousNumber) {
            incrementCount++;
        }
        previousNumber = currentNumber;
    }
    console.log(incrementCount);
});
