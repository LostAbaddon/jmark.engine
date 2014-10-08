#! /usr/local/bin/node

var fs = require('fs');

var marked = require('../build/tamarked');
// var marked = require('../index');

var input_file;
input_file = process.argv;
if (input_file.length < 3) return;
if (input_file.length === 3) {
	input_file = [input_file[2]];
}
else {
	input_file = input_file.splice(2, input_file.length);
}
if (!input_file) return;

function returnTrue () {
	return true;
}

function parseSingleFile (file_name, file_type) {
	var file_path = file_name
	if (!!file_type) {
		file_path = file_name + '.' + file_type;
	}

	console.log('>>> Reading Markdown File ' + file_path + '...');

	fs.readFile(file_path, function (err, data) {
		if (err || !data) return;
		data = data.toString();

		if (!file_type) {
			file_name = file_name.replace(/\\/g, '/').split('/').pop().split('.');
			file_name = file_name.splice(0, file_name.length - 1).join('.');
		}
		else {
			file_name = file_name.replace(/\\/g, '/').split('/').pop();
		}

		var job = 3;
		var check = function () {
			job --;
			if (job === 0) {
				console.log('=========');
				console.log('Job Done!');
			}
		}
		console.log('>>>> Parsing Markdown File...');
		fs.writeFile(file_name + '.html', marked(data), function () {
			console.log('    >>>> JianShu Flavour Markdown File Generated');
			check();
		});
	});
}

function parseMultiFile (file_pattern) {
	file_pattern = file_pattern.replace(/\\/g, '/').split('/');
	var file_name = file_pattern.pop().split('.');
	file_pattern = file_pattern.join('/');
	var file_type;
	if (file_name.length === 0) {
		file_type = '*';
		file_name = file_name.join('.') || '*';
	}
	else {
		file_type = file_name.pop();
		file_name = file_name.join('.') || '*';
	}

	var match_name, match_type;
	if (file_name === '*') {
		match_name = returnTrue;
	}
	else {
		match_name = function (name) {
			return name === file_name;
		};
	}
	if (file_type === '*') {
		match_type = returnTrue;
	}
	else {
		match_type = function (type) {
			return type === file_type;
		}
	}

	fs.readdir(file_pattern, function (err, files) {
		if (err || !files) return;
		files = files.map(function (file) {
			file = file.split('.');
			var len = file.length;
			if (len < 1) return null;
			if (len === 1) return [file[0], ''];
			var type = file.pop();
			file = file.join('.');
			return [file, type];
		})
		.filter(function (file) {
			if (!file) return false;
			return match_name(file[0]) && match_type(file[1]);
		})
		.map(function (file) {
			parseSingleFile(file[0], file[1]);
		});
	});
}

function parseFileList (file_list) {
	var l = file_list.length, i;
	for (i = 0; i < l; i++) {
		parseMultiFile(file_list[i]);
	}
}

console.log('>>> Reading Markdown File...');

parseFileList(input_file);

// parseSingleFile(input_file);