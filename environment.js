(function () {
	var isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
	var isWebWorker = !isBrowser && typeof importScripts !== 'undefined';
	var isNode = !isBrowser && !isWebWorker && typeof process !== 'undefined';
	var isPhantom = isBrowser && !isWebWorker && typeof phantom !== 'undefined';
	var root = null;

	if (isBrowser) root = window;
	else if (isWebWorker) root = this;
	else if (isNode) root = global;
	else if (isPhantom) root = phantom;

	if (!root.DOM) root.DOM = {
		browser  : isBrowser,
		webworker: isWebWorker,
		node     : isNode,
		phantom  : isPhantom
	};

	if (!root.ROOT) root.ROOT = root;

	var namespace;
	if (!root.NameSpace) {
		namespace = {};
		root.NameSpace = function (path) {
			path = path.toUpperCase().replace(/\.\\/g, '/').split('/');
			var l = path.length, i, node = namespace, name;
			for (i = 0; i < l; i++) {
				name = path[i].trim();
				if (name.length === 0) continue;
				if (!node[name]) node[name] = {};
				node = node[name];
			}
			return node;
		};
	}
}) ();