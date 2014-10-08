#GFM Test File

**Jianshu's Markdown Writing panel can't synchronize the showing area of markdown part and preview part automatically.**

---

Contents
====

[TOC]

>**Note:**
> We don't have Table Of Content Auto-Generator which used in CMD now.

---

Basic Style
====
Normal: normal
Italic: _italic_, *italic*
Bold: __bold__, **bold**
Italic and Bold: ___italic and bold___, ***italic and bold***
Strike: ~~strike~~

Combine: _Hello *Cosmos*, __I'm__ your **GOD**! and_what_can_i_do_for_use, such as how many is 1 * 3 and 2*4 and 3 *6, and 4* 7???_

>**Note:**
> Mix-using of \_ and \* is ok, but if someone wanna write something like '1 \* 2' and just the literal string will fail.
> Maybe we could modify this part by figure out whether the character '\*' is just between two numbers.

---

Newlines
====
Roses are red
Violets are blue

---

Headings
====
# Head 1
Note 1
## Head 2
Note 2
### Head 3
Note 3
#### Head 4
Note 4
##### Head 5
Note 5
###### Head 6
Note 6

Note 7

>**Note:**
> The span height between the content above the current heading is as same as what between the heading and its content.
> A heading means a subtitle of its following paragraph, so it should be more closer to its content.
> Maybe we could modify the corresponding style.

---

Blockquotes
====
In the words of Abraham Lincoln:

> Pardon my french
> sdfkjkljlkjsdf
> skdfljsf

>**Note:**
> We could use different background color or something like it to tell users that this part is a blockquote.

---

Lists
====

test1:
- List A
- List B
- List C

test2:
* List D
* List E
* List F

test3:
- Item 1
* Item 2
- Item 3
* Item 4

test4:
1. Task 1
2. Task 2
3. Task 3
5. Task 4

test5:
- List A
    + List B
        * List C
            - List D
                + List E
    + List F
        1. List G
            1. List H
            2. List I
            3. List J
        2. List K
            2.1. List L
            2.2. List M
            2.3. List N
        3. List O
            - List P
            - List Q
                1. List R
                2. List S
                3. List T
    + List U
        This is the comment of List U.
        As you see...
- List V
    Comment, comment, comment~~~~~~
    Comment Again~~~~~
    + List W
    + List X
        * List Y
            - List Z

>**Note:**
> The mix use of \* and \- will cause uncorrect resutl by own md-enging.
> The level title such as "1.2" will not be parsed as ordered list correctly, it will just be parsed as comment.

---

Code Formatting
====

Inline Code
----
Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.

Multiple lines
----
Check out this neat program I wrote:

```
x = 0
x = 2 + 2
what is x
```

Check out this neat program I wrote:

非代码示例：

```
$ sudo apt-get install vim-gnome
```

Python 示例：

```python
@requires_authorization
def somefunc(param1='', param2=0):
    '''A docstring'''
    if param1 > param2: # interesting
        print 'Greater'
    return (param2 - param1 + 1) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```

JavaScript 示例：

``` javascript
/**
* nth element in the fibonacci series.
* @param n >= 0
* @return the nth element, >= 0.
*/
function fib(n) {
  var a = 1, b = 1;
  var tmp;
  while (--n >= 0) {
    tmp = a;
    a += b;
    b = tmp;
  }
  return a;
}

document.write(fib(10));
```

Others:

    Code Block???
    dim x as Integer, y as Integer
    x = 0
    y = 2
    x += y
    log (x)

---

Links
====

http://example.com

[Visit GitHub!](www.github.com)

![Insert Image Here](http://www.baidu.com/img/bd_logo.png)

>**Note:**
> We should put the Image Descriptiong as a comment part followed by a uderscore line after the image.

---

Task lists
====
- [x] @mentions, #refs, [links](), **formatting**, and ~~tags~~ are supported
- [x] list syntax is required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

Sub Task:
----
- [ ] a bigger project
  - [ ] first subtask #1234
  - [ ] follow up subtask #4321
  - [ ] final subtask cc @mention
- [ ] a separate task

>**Note:**
> In HTML page, maybe we could use radio element instead of just a bracket.

---

References
====
* SHA: a5c3785ed8d6a35868bc169f07e40e889087fd2e
* User@SHA: jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e
* User/Repository@SHA: jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e
* #Num: #26
* GH-Num: GH-26
* User#Num: jlord#26
* User/Repository#Num: jlord/sheetsee.js#26

---

Emoji
====

And, of course emoji! :sparkles: :camel: :boom:

>**Note:**
> We don't have Emoji now.

---

Tables
====

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

or aestheticaly:

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

Really don't need to match the width:

| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |

Align:

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

With no head:

| | |
| ------------- | ----------- |
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

Align without head:

| | |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

---

Self-Defination
====

Keyword 1
:   Define 1

Keyword 2
:   Define 2

---

LaTex Equation
====

Einstein's Mass-Energy Equation is $E=mc^2$.
$$\sum_{i=1}^n a_i=0$$
$$f(x_1,x_x,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2 $$
$$\sum^{j-1}_{k=0}{\widehat{\gamma}_{kj} z_k}$$

**Of course we don't have it yet...**
But use codecog, we can have this......

---

Footnote
====

Footnote[^fn1] is a note in page-foot.
IronMan[^fn2] is a man in iron...... maybe......

>**Note:**
> We have no footnote yet...

---

Notes:
===

[^fn1]: This is footnote 1.

[^fn2]: Footnote 2 is this.