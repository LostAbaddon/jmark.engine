(function () {
	var Parser = NameSpace('jmark/parser');

	var lineBreaker = /(\n\n|\/\/)/;
	var lexCancel = '\\';

	var useLineNumber = false;

	var text_style = ['normal'];
	var TS;
	function initTextStyle () {
		TS = {};
		var l = text_style.length, i;
		for (i = 0; i < l; i++) {
			TS[text_style[i]] = i;
		}
	}
	initTextStyle();

	var para_style = ['block', 'orderlist', 'unorderlist', 'blockquote', 'pre', 'code', 'table', 'contenttable', 'header', 'footnoteContent'];
	var PS;
	function initParaStyle () {
		PS = {};
		var l = para_style.length, i;
		for (i = 0; i < l; i++) {
			PS[para_style[i]] = i;
		}
	}
	initParaStyle();

	var resultTrue = {result: true};
	var ReturnTrue = function () {return resultTrue;};
	function TagRule (bra, ket, checker) {
		this.bra = bra || '\n\n';
		this.ket = ket || bra;
		this.checker = checker || ReturnTrue;
		this.isBraReg = this.bra instanceof RegExp;
		this.isKetReg = this.ket instanceof RegExp;

		this.invoked = false;
		this.posBra = -1;
		this.posKet = -1;
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
		this.style = style || TS.normal;
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
		console.log(rootNode);
	};

	Parser.invokeLineNumber = function () {
		useLineNumber = true;
	};
	Parser.revokeLineNumber = function () {
		useLineNumber = false;
	};

	Parser.TagRule = TagRule;

	Parser.Style = {};
	Parser.Style.addTextStyle = function (name, rule, notImmediately) {
		if (text_style.indexOf(name) < 0) {
			text_style.push(name);
			if (!notImmediately) initTextStyle();
		}
	};
	Parser.Style.removeTextStyle = function (name, notImmediately) {
		name = text_style.indexOf(name);
		if (name >= 0) {
			text_style.splice(name, 1);
			if (!notImmediately) initTextStyle();
		}
	};

	// Default Rules
	// var text_style = ['link', 'footnoteHint'];
	Parser.Style.addTextStyle('bold', new TagRule('**'), false);
	Parser.Style.addTextStyle('bold', new TagRule('*'), false);
	Parser.Style.addTextStyle('italic', new TagRule('_'), false);
	Parser.Style.addTextStyle('underscore', new TagRule('__'), false);
	Parser.Style.addTextStyle('strike', new TagRule('--'), false);
	Parser.Style.addTextStyle('sup', new TagRule('^'), false);
	Parser.Style.addTextStyle('sub', new TagRule('~'), false);
	Parser.Style.addTextStyle('big', new TagRule('^^'), false);
	Parser.Style.addTextStyle('small', new TagRule('~~'), false);
	Parser.Style.addTextStyle('link', new TagRule(
		/\[([^^][\w\W]*?)\] ?\(([\w\W]*?)\)/i,
		'',
		function (match, text, url) {
			return {
				result: true,
				text: text,
				url: url
			};
		}
	), false);
	Parser.Style.addTextStyle('link', new TagRule(
		/!\[([^^][\w\W]*?)\] ?\(([\w\W]*?)\)/i,
		'',
		function (match, caption, url) {
			return {
				result: true,
				caption: caption,
				url: url
			};
		}
	), false);
}) ();