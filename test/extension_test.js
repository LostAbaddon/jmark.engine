marked.addExtension(markdown_ext_latex);
marked.addExtension(markdown_ext_task);
marked.addExtension(markdown_ext_underscore);
marked.addExtension(markdown_ext_indent);
marked.addExtension(markdown_ext_emoji);
markdown_ext_emoji.setHost('http://assets.jianshu.io/assets/emojis/');

var tests = {
	indent: [
		{
			mark: '>. Hello World',
			html: '<p>&nbsp; &nbsp; &nbsp; &nbsp; Hello World</p>\n'
		}
	],
	underscore: [
		{
			mark: 'this is __underscore__, this is _iatlic_.',
			html: '<p>this is <span style="text-decoration:underline">underscore</span>, this is <em>iatlic</em>.</p>\n'
		},
		{
			mark: 'This_is__mix__test, __mix__ _test_ ___here___.',
			html: '<p>This_is__mix__test, <span style="text-decoration:underline">mix</span> <em>test</em> <span style="text-decoration:underline"><em>here</em></span>.</p>\n'
		}
	],
	task: [
		{
			mark: '[]Task A\n[ ] Task B\n[x] Task C\n( ) TaskD\n(x)TaskE',
			html: '<p><input class="mk_task" type="checkbox" /> Task A<br><input class="mk_task" type="checkbox" /> Task B<br><input class="mk_task" type="checkbox" checked=true /> Task C<br><input class="mk_task" type="radio" /> TaskD<br><input class="mk_task" type="radio" checked=true /> TaskE</p>\n'
		},
		{
			mark: '- [x] Task A In List\n- [ ] Task B In List\n- Tasks List C\n\t* Sub Task C.A in Sub List\n\t* Sub Task C.B in Sub List\n- Task List D\n\t1. Sub Task D.1 In Sub List\n\t2. Sub Task D.2 in Sub List',
			html: '<ul>\n<li><input class="mk_task" type="checkbox" checked=true /> Task A In List</li>\n<li><input class="mk_task" type="checkbox" /> Task B In List</li>\n<li>Tasks List C<ul>\n<li>Sub Task C.A in Sub List</li>\n<li>Sub Task C.B in Sub List</li>\n</ul>\n</li>\n<li>Task List D<ol>\n<li>Sub Task D.1 In Sub List</li>\n<li>Sub Task D.2 in Sub List</li>\n</ol>\n</li>\n</ul>\n'
		}
	],
	LaTeX: [
		{
			mark: '$E=mc^2$',
			html: '<p><img src="http://latex.codecogs.com/gif.latex?E=mc^2" /></p>\n'
		}
	],
	Emoji: [
		{
			mark: ':smile: is smile, :ghost: is ghost, :ghot: is error...',
			html: '<p><img class="img_emoji" src="http://assets.jianshu.io/assets/emojis/smile.png" /> is smile, <img class="img_emoji" src="http://assets.jianshu.io/assets/emojis/ghost.png" /> is ghost, :ghot: is error...</p>\n'
		}
	]
};

describe("Extension Test", function() {
	for (var test_name in tests) {
		(function (name, tests) {
			var l = tests.length, i;
			it(name, function () {
				var test;
				for (i = 0; i < l; i ++) {
					test = tests[i];
					expect(test.html).toEqual(testMarked(test.mark));
				}
			});
		})(test_name, tests[test_name]);
	}
});