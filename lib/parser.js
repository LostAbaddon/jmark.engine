(function () {
	var Parser = NameSpace('jmark/parser');

	var lineBreaker = /(\n\n|\/\/)/;
	var lexCancel = '\\';

	var useLineNumber = false;

	function getArgumentArray (args) {
		var i, l = args.length, argv = [];
		for (i = 0; i < l; i++) {
			argv.push(args[i]);
		}
		return argv;
	}

	var resultTrue = {result: true};
	var ReturnTrue = function () {return resultTrue;};
	function TagRule (name, bra, ket, checker, level) {
		this.name = name;
		this.bra = bra;
		this.ket = ket || (bra ? null : lineBreaker);
		this.checker = checker || ReturnTrue;
		this.level = isNaN(level) ? 0 : level;
	}

	var rules = [];
	var rulesByLevel = [];
	function sortRule (rA, rB) {
		return rA.level - rB.level;
	}

	var TextNode = function (text, owner) {
		this.text = text;
		this.para = owner || null;
	};
	TextNode.prototype = {
		convert: function () {
			var node = new ParaNode();
			if (this.para !== null) this.para.replaceNode(this, node);
			node.addNode(this);
			return node;
		},
	};
	var ParaNode = function (owner, style) {
		this.content = [];
		this.style = style || '';
		this.para = owner || null;
	};
	ParaNode.prototype = {
		addNode: function (node, position) {
			var l = this.content.length;
			if (isNaN(position) || position < 0 || position >= l) this.content.push(node);
			else this.content.splice(position, 0, node);
			node.para = this;
			return this;
		},
		removeNode: function (node) {
			var l = this.content.indexOf(node);
			if (l >= 0) {
				this.content.splice(l, 1);
				node.para = null;
			}
			return this;
		},
		replaceNode: function (oldNode, newNode) {
			var l = this.content.indexOf(oldNode);
			if (l >= 0) {
				this.content.splice(l, 1, newNode);
				oldNode.para = null;
				newNode.para = this;
			}
		},
	};

	Parser.apply = function (text) {
		var rootNode = (new TextNode(text)).convert();
		// console.log(rootNode);
	};

	Parser.invokeLineNumber = function () {
		useLineNumber = true;
	};
	Parser.revokeLineNumber = function () {
		useLineNumber = false;
	};

	Parser.TagRule = TagRule;

	Parser.Style = {};
	Parser.Style.addStyle = function (rule) {
		rules.push(rule);
	};
	Parser.Style.removeStyle = function (rule) {
		var index = rules.indexOf(rule);
		rules.splice(index, 1);
	};
	Parser.Style.all = function () {
		return rules;
	};
	Parser.Style.update = function () {
		var level = -1, last = null;
		rulesByLevel = [];
		rules.sort(sortRule).map(function (rule) {
			if (rule.level !== last) {
				level ++;
				last = rule.level;
				rulesByLevel[level] = [];
			}
			rulesByLevel[level].push(rule);
		});
	};

	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.addStyle({level: Math.floor(Math.random() * 10) / 5});
	Parser.Style.update();
	console.log(rulesByLevel);

	// Default Rules
	var rParagraph = new TagRule('p', /(?:^|\n\n)/i, /(?:\n\n|$)/i, function (match, pos, content, isKet) {
		console.log(match, pos, content, isKet);
	}, 3);
	var s = 'Hello Moto!';
	s.replace(rParagraph.bra, function () {
		var args = getArgumentArray(arguments);
		args.push(true);
		rParagraph.checker.apply(rParagraph, args);
	});
}) ();