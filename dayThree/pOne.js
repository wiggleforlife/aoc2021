const fs = require('fs');

var numbers = [];
var trueCount = 0;
var falseCount = 0;
var gammaRate = "";
var epsilonRate = "";

fs.readFile('input', (err, data) => {
	if (err) throw err;
	numbers = data.toString().split('\n');
	numbers.pop();
	for (var i=0; i<numbers[0].length; i++) {
		for (var ii=0; ii < numbers.length; ii++) {
			console.log(numbers[ii]);
			if (numbers[ii].charAt(i) == "0") { falseCount++; }
			else if (numbers[ii].charAt(i) == "1") { trueCount++; }
			
		}
		if (trueCount > falseCount) { gammaRate += "1"; epsilonRate += "0"; }
		else { gammaRate += "0"; epsilonRate += "1"; }
		trueCount = 0;
		falseCount = 0;
	}
	console.log("Gamma rate: " + gammaRate + ", " + parseInt(gammaRate, 2));
	console.log("Epislon rate: " + epsilonRate + ", " + parseInt(epsilonRate, 2));
	console.log("Power consumption: " + parseInt(gammaRate, 2)*parseInt(epsilonRate, 2));
});
