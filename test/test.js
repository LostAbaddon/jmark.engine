// Invalid Mangle
tamarked.InlineLexer.prototype.mangle = function (text) {
	return text;
};
var tests = {
	empty: [
		{
			mark: '',
			html: ''
		}
	],
	h1: [
		{
			mark: '# test',
			html: '<h1 id="test">test</h1>\n'
		},
		{
			mark: '#test',
			html: '<h1 id="test">test</h1>\n'
		},
		{
			mark: 'test\n====',
			html: '<h1 id="test">test</h1>\n'
		},
	],
	h2: [
		{
			mark: '## test',
			html: '<h2 id="test">test</h2>\n'
		},
		{
			mark: '##test',
			html: '<h2 id="test">test</h2>\n'
		},
		{
			mark: 'test\n----',
			html: '<h2 id="test">test</h2>\n'
		}
	],
	h3: [
		{
			mark: '### test',
			html: '<h3 id="test">test</h3>\n'
		},
		{
			mark: '###test',
			html: '<h3 id="test">test</h3>\n'
		}
	],
	h4: [
		{
			mark: '#### test',
			html: '<h4 id="test">test</h4>\n'
		},
		{
			mark: '####test',
			html: '<h4 id="test">test</h4>\n'
		}
	],
	h5: [
		{
			mark: '##### test',
			html: '<h5 id="test">test</h5>\n'
		},
		{
			mark: '#####test',
			html: '<h5 id="test">test</h5>\n'
		}
	],
	h6: [
		{
			mark: '###### test',
			html: '<h6 id="test">test</h6>\n'
		},
		{
			mark: '######test',
			html: '<h6 id="test">test</h6>\n'
		}
	],
	em: [
		{
			mark: '*test*',
			html: '<p><em>test</em></p>\n'
		},
		{
			mark: '_test_',
			html: '<p><em>test</em></p>\n'
		},
		{
			mark: 'a_b',
			html: '<p>a_b</p>\n'
		},
		{
			mark: 'a_b_',
			html: '<p>a_b_</p>\n'
		},
		{
			mark: 'this_is_a_sentence_do_not_need_convert, _while this part need_.',
			html: '<p>this_is_a_sentence_do_not_need_convert, <em>while this part need</em>.</p>\n'
		},
		{
			mark: 'this_is_a_sentence_do_not_need_convert,\n_while this part need_.',
			html: '<p>this_is_a_sentence_do_not_need_convert,<br><em>while this part need</em>.</p>\n'
		},
		{
			mark: 'this_is_a_sentence_do_not_need_convert,\n\n_while this part need_.',
			html: '<p>this_is_a_sentence_do_not_need_convert,</p>\n<p><em>while this part need</em>.</p>\n'
		}
	],
	strong: [
		{
			mark: '**test**',
			html: '<p><strong>test</strong></p>\n'
		},
		{
			mark: '__test__',
			html: '<p><strong>test</strong></p>\n'
		}
	],
	'strong&em': [
		{
			mark: '**_test_**',
			html: '<p><strong><em>test</em></strong></p>\n'
		},
		{
			mark: '__*test*__',
			html: '<p><strong><em>test</em></strong></p>\n'
		},
		{
			mark: '_**test**_',
			html: '<p><em><strong>test</strong></em></p>\n'
		},
		{
			mark: '*__test__*',
			html: '<p><em><strong>test</strong></em></p>\n'
		},
		{
			mark: '***test***',
			html: '<p><strong><em>test</em></strong></p>\n'
		},
		{
			mark: '___test___',
			html: '<p><strong><em>test</em></strong></p>\n'
		}
	],
	strike: [
		{
			mark: '~~test~~',
			html: '<p><del>test</del></p>\n'
		}
	],
	blockquote: [
		{
			mark: '>test',
			html: '<blockquote><p>test</p></blockquote>\n'
		},
		{
			mark: '>>test',
			html: '<blockquote><blockquote>\n<p>test</p></blockquote>\n</blockquote>\n'
		}
	],
	ul: [
		{
			mark: '* test',
			html: '<ul>\n<li>test</li>\n</ul>\n'
		},
		{
			mark: '+ test',
			html: '<ul>\n<li>test</li>\n</ul>\n'
		},
		{
			mark: '- test',
			html: '<ul>\n<li>test</li>\n</ul>\n'
		}
	],
	ol: [
		{
			mark: '1. test',
			html: '<ol>\n<li>test</li>\n</ol>\n'
		}
	],
	lists: [
		{
			mark: '* test1\n* test2\n\t- test A\n\t- test B\n\t\t1. test alpha\n\t\t2. test beta\n* test3',
			html: '<ul>\n<li>test1</li>\n<li>test2<ul>\n<li>test A</li>\n<li>test B<ol>\n<li>test alpha</li>\n<li>test beta</li>\n</ol>\n</li>\n</ul>\n</li>\n<li>test3</li>\n</ul>\n'
		}
	],
	code: [
		{
			mark: '`test`',
			html: '<p><code>test</code></p>\n'
		},
		{
			mark: '```\r\ntest```',
			html: '<pre><code>test</code></pre>\n'
		},
		{
			mark: '```ruby\ntest```',
			html: '<pre><code class="ruby">test</code></pre>\n'
		},
		{
			mark: '```ruby\r\ntest```',
			html: '<pre><code class="ruby">test</code></pre>\n'
		},
		{
			mark: '	test',
			html: '<pre><code>test</code></pre>\n'
		},
		{
			mark: '    test',
			html: '<pre><code>test</code></pre>\n'
		},
		{
			mark: '``There is a literal backtick (`) here.``',
			html: '<p><code>There is a literal backtick (`) here.</code></p>\n'
		}
	],
	copy: [
		{
			mark: '&copy;',
			html: '<p>&copy;</p>\n'
		}
	],
	'auto links': [
		{
			mark: '<http://google.com>',
			html: '<p><a href="http://google.com" target="_blank">http://google.com</a></p>\n'
		},
		{
			mark: '<mailto:lostabaddon@gmail.com>',
			html: '<p><a href="mailto:lostabaddon@gmail.com" target="_blank">lostabaddon@gmail.com</a></p>\n'
		}
	],
	links: [
		{
			mark: '[baidu](http://www.baidu.com)',
			html: '<p><a href=\"http://www.baidu.com\" target=\"_blank\">baidu</a></p>\n'
		},
		{
			mark: '[test][1]\n\nBlaBlaBlaBlaBla\n\n[1]: http://www.google.com/',
			html: '<p><a href="http://www.google.com/" target="_blank">test</a></p>\n<p>BlaBlaBlaBlaBla</p>\n'
		}
	],
	images: [
		{
			mark: '![Twitter](http://larryzhao.com/images/customs/social/Twitter.png)',
			html: '<div class="image-package"><img src="http://larryzhao.com/images/customs/social/Twitter.png" alt="Twitter"><br><div class="image-caption">Twitter</div></div>\n'
		},
		{
			mark: '![Twitter](http://larryzhao.com/images/customs/social/Twitter.png "kehuan")',
			html: '<div class="image-package"><img src="http://larryzhao.com/images/customs/social/Twitter.png" alt="Twitter" title="kehuan"><br><div class="image-caption">Twitter</div></div>\n'
		},
		{
			mark: 'Words before image.\n![Image](http://img5.douban.com/lpic/s2160429.jpg)\nSentence after image.',
			html: '<p>Words before image.</p><div class="image-package"><img src="http://img5.douban.com/lpic/s2160429.jpg" alt="Image"><br><div class="image-caption">Image</div></div><p>Sentence after image.</p>\n'
		},
		{
			mark: '![Image](http://img5.douban.com/lpic/s2160429.jpg)\nOnly sentence after image.',
			html: '<div class="image-package"><img src="http://img5.douban.com/lpic/s2160429.jpg" alt="Image"><br><div class="image-caption">Image</div></div><p>Only sentence after image.</p>\n'
		},
		{
			mark: 'Only words before image.\n![Image](http://img5.douban.com/lpic/s2160429.jpg)\n\nOther paragraph',
			html: '<p>Only words before image.</p><div class="image-package"><img src="http://img5.douban.com/lpic/s2160429.jpg" alt="Image"><br><div class="image-caption">Image</div></div>\n<p>Other paragraph</p>\n'
		},
		{
			mark: 'Jianshu Image:\n![My Picture](http://upload-images.jianshu.io/upload_images/71616-61b5b2c6c4b87ec7.JPG)\nOh My Picture!',
			html: '<p>Jianshu Image:</p><div class="image-package"><img src="http://upload-images.jianshu.io/upload_images/71616-61b5b2c6c4b87ec7.JPG?imageView2/2/w/1240/q/100" alt="My Picture" data-original-src="http://upload-images.jianshu.io/upload_images/71616-61b5b2c6c4b87ec7.JPG"><br><div class="image-caption">My Picture</div></div><p>Oh My Picture!</p>\n'
		}
	],
	'print out #': [
		{
			mark: '\\#hello',
			html: '<p>#hello</p>\n'
		}
	],
	'backslash': [
		{
			mark: '\\*test\\*',
			html: '<p>*test*</p>\n'
		}
	],
	'escape dangerous tags': [
		{
			mark: '123 <script type="javascript">alert</script> abc',
			html: '<p>123 &lt;script type=&quot;javascript&quot;&gt;alert&lt;/script&gt; abc</p>\n'
		}
	],
	footnote: [
		{
			mark: 'This is footnote for Google[^google].\nAnd this is footnote for Apple[^apple].\n\nBlaBlaBlaBlaBla\n\n[^google]: I\'m Google.\n\n[^apple]: My name is Apple.',
			html: '<p>This is footnote for Google <a class="m-footnote" href="#fn_lemma_google" id="fn_link_google" name="fn_link_google">[1]</a>.<br>And this is footnote for Apple <a class="m-footnote" href="#fn_lemma_apple" id="fn_link_apple" name="fn_link_apple">[2]</a>.</p>\n<p>BlaBlaBlaBlaBla</p><br><hr><p>[1]: I\'m Google. <a class="m-footnote" href="#fn_link_google" id="fn_lemma_google" name="fn_lemma_google">&#8617;</a></p>\n<p>[2]: My name is Apple. <a class="m-footnote" href="#fn_link_apple" id="fn_lemma_apple" name="fn_lemma_apple">&#8617;</a></p>'
		},
		{
			mark: 'ms[^micro]\nlinux[^linux]\nblablabla\n\n[^micro]: helllo\n[^linux]: Hello\nsdfsfasdf\nasdfasdfasfd\n\nasdfasdfasdf',
			html: '<p>ms <a class="m-footnote" href="#fn_lemma_micro" id="fn_link_micro" name="fn_link_micro">[1]</a><br>linux <a class="m-footnote" href="#fn_lemma_linux" id="fn_link_linux" name="fn_link_linux">[2]</a><br>blablabla</p><br>asdfasdfasdf</p>\n<hr><p>[1]: helllo <a class="m-footnote" href="#fn_link_micro" id="fn_lemma_micro" name="fn_lemma_micro">&#8617;</a></p>\n<p>[2]: Hellosdfsfasdfasdfasdfasfd <a class="m-footnote" href="#fn_link_linux" id="fn_lemma_linux" name="fn_lemma_linux">&#8617;</a></p>'
		},
		{
			mark: 'ms[^micro]\nlinux[^linux]\nblablabla\n\n[^micro]: helllo\n```ruby\n[^linux]: Hello\n```\nsdfsfasdf\nasdfasdfasfd\n\nasdfasdfasdf',
			html: '<p>ms <a class="m-footnote" href="#fn_lemma_micro" id="fn_link_micro" name="fn_link_micro">[1]</a><br>linux[^linux]<br>blablabla</p><br><pre><code class="ruby">[^linux]: Hello</code></pre>\n<p>sdfsfasdf<br>asdfasdfasfd</p>\n<p>asdfasdfasdf</p>\n<hr><p>[1]: helllo <a class="m-footnote" href="#fn_link_micro" id="fn_lemma_micro" name="fn_lemma_micro">&#8617;</a></p>'
		}
	],
	html: [
		{
			mark: '<pre>Hello Cosmos!</pre>',
			html: '<p><pre>Hello Cosmos!</pre></p>\n'
		},
		{
			mark: '<pre id="PRE">Hello Cosmos!</pre>',
			html: '<p><pre id="PRE">Hello Cosmos!</pre></p>\n'
		},
		{
			mark: '<pre style="background:blue;">Hello Cosmos!</pre>',
			html: '<p>&lt;pre style=&quot;background:blue;&quot;&gt;Hello Cosmos!&lt;/pre&gt;</p>\n'
		},
		{
			mark: '<pre><div style="background:blue;">Hello Cosmos!</div></pre>',
			html: '<pre><div style="background:blue;">Hello Cosmos!</div></pre>'
		},
		{
			mark: '<pre>\n<div style="background:blue;">Hello Cosmos!</div>\n</pre>',
			html: '<pre><div style="background:blue;">Hello Cosmos!</div></pre>'
		},
		{
			mark: '<pre>\n\n<div style="background:blue;">Hello Cosmos!</div>\n\n</pre>',
			html: '<pre><div style="background:blue;">Hello Cosmos!</div></pre>'
		},
	]
};

describe("html generation", function() {
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