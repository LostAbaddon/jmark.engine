This is footnote for Google[^google].
And this is footnote for Apple[^apple].

BlaBlaBlaBlaBla

[^google]: I'm Google.

[^apple]: My name is Apple.

---

ms[^micro]
linux[^linux]
blablabla

[^micro]: helllo
[^linux]: Hello
sdfsfasdf
asdfasdfasfd

asdfasdfasdf

---

Test Footnote

This is One[^1], this is two[^2].

[^1]: Number 1
[^2]: Number 2
This is another footnote line.

简叔 10:51:16
![1.pic_hd.jpg](http://upload-images.jianshu.io/upload_images/4-28603e5c927d1781.jpg)

Mixed_OK[^mix] And Test_NO[^test]
----

---

# 1.新华字典
Words before image!
![](http://img3.douban.com/lpic/s1076290.jpg)
我还没上学时，见过爸爸妈妈查《新华辞典》（外公查四角字典）。那个时候我还不会查字典，但对那本小红书印象深刻，原来大人也有不认识的字。

---

# 2.现代汉语辞典
![Test](http://img5.douban.com/lpic/s2160429.jpg)

小学转学回浙江后，就被语文老师勒令人手一本《现代汉语辞典》，我只好去新华书店买，要55块钱呢，好贵。小时候不爱查，多数情况用来跟同学打架或摆在三八线上划清界线用。本以为上初中就可以摆脱这块砖，但初中的语文老师依然钦定这本辞典，说它是中考出题专用辞典。可惜小时候我对语文一点兴趣也没，临到语文考卷发下来，为了订正错题才翻它。
我还没上学时，见过爸爸妈妈查《新华辞典》（外公查四角字典）。那个时候我还不会查字典，但对那本小红书印象深刻，原来大人也有不认识的字。

---

Hello_OK[^a]

```
Cosmos_NO[^b]
```

---

XXXX_OK[^x]

```
[^x]: NO_oooo
```
[^x]: OK_xxxx

---

YYYY_OK[^y]

```
[^y]: NO_oooo
```

[^y]: OK_yyyy

---

[^a]: OK_What?

```
[^b]: NO_Nani????
[^test]: NO_Test
```

---

TestA_NO[^t1]

<pre>
[^t1]: NO_T1

Test_NO[^t2]
[^t2]: NO_T2
</pre>

---

TestB_NO[^t3]

<code>
[^t3]: NO_T3

Test_NO[^t4]
[^t4]: NO_T4
</code>

---

TestC_NO[^t5]

<blockquote>
[^t5]: NO_T5

Test_NO[^t6]
[^t6]: NO_T6
</blockquote>

---

TestD_OK[^t7]
[^t7]: OK_T7

Test_OK[^t8]
[^t8]: OK_T8

---

Outside_OK[^out]
<pre>
    Hello World!_NO[^s1]
    <dark>
        It's Dark!!!_NO[^s2]
    </dark>
<cite>
[^s1]: NO_Common Sentence.
[^s2]: NO_Dark side of The Force!
</cite>
</pre>
[^out]: OK_Hello Cosmos!

Inside_OK[^in]
<ul>
    <li>List 1_OK[^l1]</li>
    <li>List 2_OK[^l2]</li>
    <li>
        <p>List 3_OK[^l3]</p>
        <pre>
            Here is the test for footnote_NO[^fn].
            [^fn]: NO_Footnote is a note on foot......
        </pre>
        <p>Construction, Complete.</p>
    </li>
    <li>
        <p>Footnotes:</p>
        <ol>
            <li>[^in]: NO_It's Inside...</li>
            <li>[^l1]: NO_List Footnote 1</li>
            <li>[^l2]: NO_List Footnote 2</li>
            <li>[^l3]: NO_List Footnote 3</li>
        </ol>
    </li>
</ul>
[^in]: OK_It's Inside...
[^l1]: OK_List Footnote 1
[^l2]: OK_List Footnote 2
[^l3]: OK_List Footnote 3

---

```
dog | bird | cat
----|------|----
foo | foo | foo
bar | bar | bar
baz | baz | baz
```
dog | bird | cat
----:|:------:|:----
foo[^sss] | foo | foo
bar | bar[^rrr] | bar
baz | baz | baz[^ttt]

---

[^mix]: OK_Mixed!!!
[^rrr]: Align Middle
[^ttt]: Align Left
[^sss]: Align Right

---

```
Quote One
```

    Quote Two
    Blablabla

> abc
sadfjklsjdf
> skdfjksdfj

---

　　首先要说的是，Markdown是不支持缩进的。
　　这是一句废话。
　　如果你在Markdown里按下四个空格，它就自动帮你转入了Code模式。
　　而你在Markdown里直接一个回车，不是分段而是换行，你要两个回车，才是分段。
　　分段和换行的区别是：换行后，上一行和下一行在一个段落里，其视觉表现为，行前距和行后距与一行字太多导致的自然换行是一致的（大约0.5个字高LineHeight）。
　　而段落不同，段落的行前距离和行后距大约是一个字高。
　　这种视觉上的差异自然地让人明白：这是两个不同的段落。
　　技术层，段落是```<p>```，换行是```<br>```，两者不同，这是废话。
　　在HTML5层面上，这给出了两个不同的语义，对文本分析来说就是截然不同的操作，但我们其实不用管。

----

```
PS：BR是Break & Return的意思，也就是“换行”与“回车”。现代人对换行大概还能理解，但没有用过打字机的人恐怕不能直观地明白回车是什么意思吧。
```

    PS又PS：我自己玩的Markdown编译器是支持自动缩进的，不过这个显然不是CommonMarkdown，这里只是给自己打个小广告而已。

<pre>
PS又PS复PS：（好长的PS啊…………）现在简书Markdown解释器（也就是marked.js）在将三种不同类型的pre解释出来的时候存在行为差异。
很直观的，上面两个pre块在块内顶部有一个空行，其本质是无论用三个`还是四个空格，生成的内容都是pre内嵌套code，而后code块的内容（一个textNode）开头有一个\n也就是换行符，这是一个显然的解释错误，导致了块顶无意义的空行，影响整体美观（真的很有碍观瞻啊！）。
但你用pre标签的时候却不会如此，其内的textNode中文字开头没有\n。这是多么显然的一个解释错误啊……marked.js的开发同志要打屁屁哦！
</pre>

<blockquote>
PS又PS复PS再PS：顺便一说，当你用blockquote而非pre的时候，又会发现块内顶部空行又出现了，这回的理由更扯淡，因为如果你写的是
< blockquote >
    blablabla
< /blockquote >
那么解析结果块顶是有空行的，而如果写的是
< blockquote >blablabla
< /blockquote >
那么块顶就没有空行。
marked.js解释器将blockquote这个tag后跟的换行\n也给解释了出来，变成了< br >。。。。。。
这是多么脑残的解释。。。。。。
当然，我自己写Markdown解释器的时候也出现过很多很脑残的错误，所以也不能苛求。。。。。。
</blockquote>

---

　　上面几段其实不看也罢。

　　我们继续未完成的关于markdown和缩进的话题。

　　在一些讲设计的书中（比如《大家都能看的设计书》，大概是这个名字），作者会提到这么一个观点（事实上简叔大人本人也在不遗余力地提倡这个观点，以黑我的方式）：

<blockquote>现代书籍的排版和布局不同于过往，所以我们已经不需要再和过去一样在段首空四个空格（或者两个全角空格）来缩进了。</blockquote>

　　这个说法当然是有其合理性的，虽然我个人也一致在不遗余力地表达我对此的不屑。
　　但，如果一切都和书中别的内容所讲的一样做的话，那这么做也没什么问题。

　　可是，不知道大家有没有发现，Markdown本身确实这种观点的有力驳斥。

　　为什么？

　　因为，（GFM的）Markdown语法中，一个回车是换行```<br>```，两个回车才是分段```<p>```，而在富文本编辑中，一个回车就是分段```<p>```了。
　　那为什么说这和那条设计原则相悖？
　　原因就在于，

　　你看，那条原则成立的条件，
　　也就是所谓的

　　现代书籍的排版和布局

　　其根本就在于段落之间是有至少一个LineHeight的段间距的。
　　也就是说，这条设计原则能保证美感的前提，至少按照它自己的设计逻辑而言，就是你要用**分段**，而非_换行_。
　　（PS：你没发现上面一段的分段很让人抓狂？）

　　如果这个前提被打破，那这条设计原则本身就没有了存在的前提，从而失效。

　　但是，两个回车的操作成本太高，高于一个回车。

　　我们为何用Markdown而不用富文本？就在于Markdown语法简单，而这个语法简单所体现的就是——**Markdown的操作成本低**。

---

　　富文本，无论是什么IDE提供的富文本，你要完成一个让人满意的排版布局，无论多么简单，都需要鼠标和键盘联合操作——当然，我以前写文章提到过，本人可以做到不用鼠标，因为，就算是Office的Word，所以相关按钮也不过上百个快捷组合键，爷背得下来，因为以前就是靠PPT和Word混饭吃的。

　　对于普通人来说，键鼠混合操作就意味着操作的动作成本高——一会儿手要放在键盘上，一会儿又要去拿鼠标，太麻烦。

　　就算你的IDE按钮很方便点击，操作非常简单，但光光键鼠混合这点，就已经落于markdown的下风了。

　　早年Windows和Linux孰优孰劣的一个争论焦点，就是Linux上很多事情只要写命令就好了，我甚至可以不用鼠标，而Windows不行。
　　这里不继续这个无聊的争论，但这个观点还是很吸引人的。

　　Markdown（或者ORG）相对于富文本的一个根本优势就在于此。

　　语法简单，纯键盘操作，这两者保证了Markdown的操作成本很低，学习成本还行（当然，这个肯定没法和WYSIWYG相比，人家只要看就会用了，你这个还要去学语法，太Geek了）。

也因此，人们其实习惯于能一个回车的就一个回车。就算现在还想用多个回车的，如果允许的话，能一个回车当然是一个回车啦。
所以，以分段为前提的不用缩进在Markdown上就遇到了操作成本这个障碍——如果用户偷懒，那么分段就会不明显，从而不缩进就是糟糕的用户体验——你真的没感觉到看到一大块豆腐干一样的密集文字很影响阅读情绪么？
而换行非分段，恰恰就营造了这种密集字块的效果，如果你还不缩进的话。

　　（PS：你没发现上面一段豆腐干看着很不爽？）

---

今天看到了新闻非常高兴，【92岁老院士站着讲 大学生趴着睡】，我看到这个新闻的时候由衷的为后面同学不怕拍照勇敢睡觉的精神点赞。

我在大学的时候就被迫听了好几次这种精神文明建设的狗屁大会，真他娘的无聊。但是出于种种原因，比如我坐在第一排，比较羞涩怕被拍照，我基本是都是假装认真听，没人看的时候玩手机（感谢智能手机的诞生），基本上是不愿意直接睡觉，还是担心被拍到很不好的。

另外，我也真心的为安排演讲的有关领导感到可耻，让一个九十二岁的领导去站着讲那么久，真的有意义么？找不到人听演讲，硬生生拉来一帮学生来听课，浪费彼此的时间，真的有意义么？傻逼呵呵的职责学术不知道尊重的时候，有没有尊重学生的自由？

另外，一个九十二岁的老人，不适合做这种演讲了，安安稳稳的利用自己的经验指导一下研究就得了，还非要郑重的拉出来溜溜，何必嘛，而且上一辈的老教师们普通话，只能说呵呵，听又听不清，没啥必要。

另外，我惊喜的发现我的母校的老师非常强势的在微博指出一个(作为一个教师，讲课没人感兴趣，耻辱！)这一点非常赞，老师转变思维在现在的教育中也是非常迫切需要的思维。
<img src=http://media-of-jianshu.qiniudn.com/jianshu-hityanlun.png height=500 width=1500>

另外，随着表达方式的多元化，很多很无聊的和很不合理事情就可以很快通过情绪表达出来，比如这位现场的学术就马上可以表达自己。


![Image Title](http://media-of-jianshu.qiniudn.com/jianshu-xianchangpinglun.png)

很想知道究竟一群人义愤填膺的辱骂这群垮掉的一代的人平时是怎样的一群人，他们在被抓到会场强迫去听一个无聊的报告的时候会不会瞌睡。

---

　　总结说来，段首不缩进的前提是分段非换行，而markdown配合用户偷懒的自然天性所导致的是换行非分段，这两者难以调和。

　　而我们显然不能要求用户尽量不偷懒，因为这又违背了Markdown的初衷和精髓。

---

# 1.新华字典
Words before image!
![](http://img3.douban.com/lpic/s1076290.jpg)
我还没上学时，见过爸爸妈妈查《新华辞典》（外公查四角字典）。那个时候我还不会查字典，但对那本小红书印象深刻，原来大人也有不认识的字。

---

# 2.现代汉语辞典
![Test](http://img5.douban.com/lpic/s2160429.jpg)

小学转学回浙江后，就被语文老师勒令人手一本《现代汉语辞典》，我只好去新华书店买，要55块钱呢，好贵。小时候不爱查，多数情况用来跟同学打架或摆在三八线上划清界线用。本以为上初中就可以摆脱这块砖，但初中的语文老师依然钦定这本辞典，说它是中考出题专用辞典。可惜小时候我对语文一点兴趣也没，临到语文考卷发下来，为了订正错题才翻它。
我还没上学时，见过爸爸妈妈查《新华辞典》（外公查四角字典）。那个时候我还不会查字典，但对那本小红书印象深刻，原来大人也有不认识的字。