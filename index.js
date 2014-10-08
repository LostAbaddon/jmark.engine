(function () {
	var parser = NameSpace('jmark/parser');
	var render = NameSpace('jmark/render');

	var jmark = function (text) {
		var meta_article = parser.apply(text);
	};

	if (DOM.node || DOM.phantom) {
		module.exports = jmark;
	}
	else {
		ROOT.jmark = jmark;
	}
}) ();

if (DOM.node) {
	var fs = require('fs');
	fs.readFile('./test.md', function (err, data) {
		data = data.toString();
		module.exports(data);
	});
}