#! /usr/local/bin/node

var fs = require('fs');

var tamarked = require('../build/tamarked');

var loops = 100, sub_loops = 100, error_loop = 10;

fs.readFile('./presure_test.md', function (err, data) {
	if (err || !data) {
		console.log('Things Getting Fucked.');
		return;
	}

	data = data.toString();
	var time, total, i, j, result, hasError, errorLoop, length, start, end, text;
	length = data.length;
	total = (new Date()).getTime();
	for (i = 0; i < loops; i++) {
		time = (new Date()).getTime();
		for (j = 0; j < sub_loops; j++) {
			start = Math.floor(data.length * Math.random() * 0.1);
			end = Math.floor((data.length - start) * (0.9 + Math.random() * 0.1));
			text = data.substr(start, end);
			hasError = true;
			errorLoop = error_loop;
			while (hasError) {
				hasError = false;
				try {
					result = tamarked(text);
				}
				catch (err) {
					errorLoop--;
					hasError = errorLoop > 0;
					if (!hasError) {
						result = '';
					}
				}
			}
		}
		time = ((new Date()).getTime()) - time;
		console.log('Loop ' + i + ': ' + time + 'ms');
	}
	total = ((new Date()).getTime()) - total;
	console.log('Time Spent: ' + total + 'ms');
	console.log(result);
});