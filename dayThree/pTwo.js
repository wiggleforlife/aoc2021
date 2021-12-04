const fs = require('fs');

var o2Numbers = [];
var co2Numbers = [];
var o2Corrected = [];
var co2Corrected = [];
var trueCount = 0;
var falseCount = 0;
var o2Rate = "";
var co2Rate = "";

fs.readFile('input', (err, data) => {
	if (err) throw err;
	console.log(data + "\na\na");
	data = data.toString().split("\n");
	o2Numbers = data;
	co2Numbers = data;
	console.log("\n\n\n" + co2Numbers);
	console.log(co2Numbers.length);
	
	for (var i=0; o2Numbers.length > 1 && i<o2Numbers[0].length; i++) {
		o2Corrected = [];
		for (var ii=0; ii < o2Numbers.length; ii++) {
			console.log(o2Numbers[ii]);
			if (o2Numbers[ii].charAt(i) == "0") { falseCount++; }
			else if (o2Numbers[ii].charAt(i) == "1") { trueCount++; }
		}
		if (trueCount > falseCount || trueCount == falseCount) {
			console.log(o2Numbers.length);
			for (var ii=0; ii < o2Numbers.length; ii++) {
				if (o2Numbers[ii].charAt(i) == "1") {
					o2Corrected.push(o2Numbers[ii]);
				}
			}
			o2Numbers = o2Corrected;
		}
		else {
			console.log(o2Numbers.length);
			for (var ii=0; ii < o2Numbers.length; ii++) {
				if (o2Numbers[ii].charAt(i) == "0") {
					o2Corrected.push(o2Numbers[ii]);
				}
			}
			o2Numbers = o2Corrected;
		}
		trueCount = 0;
		falseCount = 0;
		o2Rate = o2Numbers[0];
	}
	console.log("\n\n\n" + data);
	for (var i=0; co2Numbers.length > 1 && i<co2Numbers[0].length; i++) {
		co2Corrected = [];

		co2Corrected = [];
		for (var ii=0; ii < co2Numbers.length; ii++) {
			console.log(co2Numbers[ii]);
			if (co2Numbers[ii].charAt(i) == "0") { falseCount++; }
			else if (co2Numbers[ii].charAt(i) == "1") { trueCount++; }
		}
		if (trueCount > falseCount) {
			console.log(co2Numbers.length);
			for (var ii=0; ii < co2Numbers.length; ii++) {
				if (co2Numbers[ii].charAt(i) != "1") {
					co2Corrected.push(co2Numbers[ii]);
				}
			}
			co2Numbers = co2Corrected;
		}
		else if (trueCount < falseCount) {
			console.log(co2Numbers.length);
			for (var ii=0; ii < co2Numbers.length; ii++) {
				if (co2Numbers[ii].charAt(i) != "0") {
					co2Corrected.push(co2Numbers[ii]);
				}
			}
			co2Numbers = co2Corrected;
		} else if (trueCount == falseCount) {
			console.log(co2Numbers.length);
			console.log("awdawd: " + co2Numbers.length);
			for (var ii=0; ii < co2Numbers.length; ii++) {
				console.log("i is " + i);
				if (co2Numbers[ii].charAt(i) == "0") {
					co2Corrected.push(co2Numbers[ii]);
				}
			}
			co2Numbers = co2Corrected;
		}
		trueCount = 0;
		falseCount = 0;
		co2Rate = co2Numbers[0];
	}
	console.log("O2 generator rate: " + o2Rate + ", " + parseInt(o2Rate, 2));
	console.log("CO2 scrubber rate: " + co2Rate + ", " + parseInt(co2Rate, 2));
	console.log("Life support rating: " + parseInt(o2Rate, 2)*parseInt(co2Rate, 2));
});
//TODO do it again but with the co2 thingy
