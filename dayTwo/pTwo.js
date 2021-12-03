const fs = require('fs');

var depth = 0;
var x = 0;
var aim = 0;
var instruct = [];

fs.readFile('input', (err, data) => {
	if (err) throw err;
	instruct = data.toString().split('\n');
	instruct.pop();
	for (var i = 0; i < instruct.length; i++) {
		if (instruct[i].startsWith("forward")) {
            console.log("forth");
			x += parseInt(instruct[i].split(" ")[1]);
            depth += aim*parseInt(instruct[i].split(" ")[1]);
		} else if (instruct[i].startsWith("up")) {
            console.log("aim upth");
			aim -= parseInt(instruct[i].split(" ")[1]);
		} else if (instruct[i].startsWith("down")) {
            console.log("aim downth");
			aim += parseInt(instruct[i].split(" ")[1]);
		}
		console.log("X: ", x, ", Depth: ", depth, ", Aim: ", aim);
	}
	console.log("Multiplied: ", x*depth);
});
