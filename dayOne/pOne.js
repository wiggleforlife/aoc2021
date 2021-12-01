var previousNumber = 0;
var currentIndex = 0;
var numbers = [];

const fs = require('fs');

fs.readFile('input', (err, data) => {
    if (err) throw err;
    numbers = data.toString().split('\n');
    numbers.pop();
    previousNumber = parseInt(numbers[0]);
    for (var i = 1; i < numbers.length; i++) {
        var currentNumber = parseInt(numbers[i]);
        if (currentNumber > previousNumber) {
            incrementCount++;
        }
        previousNumber = currentNumber;
    }
    
    console.log(incrementCount);
});
