# 主流浏览器与内核
1. IE                       内核：tradent
2. Firefox                  内核：Gecko
3. Google chrome            内核：webkit/blink
4. Safari                   内核：webkit
5. Opera                    内核：presto

# 语义化
1. 每一个html元素都有具体的含义
2. 所有的元素与显示效果没有关系，元素展示到页面上的效果应该由css控制。
因为浏览器带有默认的css样式，所以每个元素都有不同的显示效果。
**重要：选择什么元素，取决于内容的含义， 而不是显示出的效果**

## 为什么需要语义化
1. 为了搜索引擎的优化(SEO)。
2. 为了让浏览器理解网页。

## html5支持的元素： 查看html5元素周期表

## 标准的文档结构

HTML: 页面，HTML文档
```html
    <!DOCTYPE html>
```
上面的是文档声明，告诉浏览器当前文档使用的html版本，本使用的版本为html5，不写文档声明，将导致浏览器进入怪异的渲染模式。

```html
    <html lang="en">
    </html>
```
上面的是根元素，一个页面最多只能一个， 并且该元素是所有其他元素的父元素或祖先元素。
HTML5版本中没有强制要求书写该元素，可以查mdn
lang属性：language，全局属性，表示该元素内部使用的文字是使用哪一种自然语言书写而成的。

```html
    <meta>
```
文档的元数据： 附加信息。
charset:指定网页的内容编码。

# 文本元素

## h
h1 ~ h6: 表示1级标题到六级标题

## p
段落， paragraphs
lorem: 乱数假文，可以随机生成不定数量的假文

## span [无语义]
没有语义，仅用于设置样式
> 以前： 某些元素在显示时会独占一行(块级元素)：h，p， 而某些元素不会(行级元素)：span
> 到了HEML5,已经弃用这种说法。

## pre
预格式化文本元素
空白折叠： 在源代码中的连续空白字符(空格， 换行， 制表符)，在页面显示时会被折叠为一个空格。
例外： 在pre元素内部出现的内容，会按照源代码格式显示到页面上。
该元素通常用于在页面上显示一些代码。
pre元素功能的本质，他有一个默认的css属性
> 显示代码时，通常外面套code元素，code表示代码区域。

## a元素 超链接
### href属性： hyper reference： 通常表示跳转地址。
1. 跳转地址：此时指向另一个站点，比如href="http://write.blog.csdn.net",那么点击时就会直接跳转到这个链接的页面。
2. 跳转到当前页面或某个页面的某个锚点，即跳转到当前页面的某个位置。此时指向页面中的锚，比如href="#top"，那么点击时就会到当前页面中id="top"的这个锚点，实现当前页面的所谓跳转。用的最多就是在可滚动页面中，添加菜单，可以直接回到页面中的某个部分的内容。
3. 功能链接：点击后执行某个功能
- 执行js代码，javascript:
- 发送邮件， mailto:  要求用户计算机上安装有邮件发送软件。
- 拨号 tel:     要求用户计算机安装有拨号软件， 或使用的是移动端

即所有的三种代码样例：
```html
    <a href="http://baidu.com">超链接</a>
    <a href="#">回到最顶端</a>
    <a href="css/css1.css">文件链接</a>

    <a href="javascript:alert('你好')">弹出你好！</a>
    <a href="mailto:xxxxx@qq.com">点击给我发送邮件</a>
    <a href="tel:xxxxx">点击给我拨打电话</a>
```

## target属性
表示跳转窗口的位置

target的取值：
- _self: 在当前页面窗口中打开，默认值。
- _blank: 在新窗口中打开

## img 图片元素
和a元素结合使用<a><img src='xxx.png'></a>
src属性： source
alt属性： 当图片资源失效的时候，将使用该属性的文字替代图片

和map元素的结合使用，可以参考：https://blog.csdn.net/userkang/article/details/84328605

## figure元素
指代，定义。通常用于把图片，图片标题和描述文字包裹起来，表示这些内容都跟这张图片有关
子元素： figcaption：指代标题，通常把图片的标题放到该元素里面。


# 列表元素

## 有序列表
ol: ordered list
li: list item

## 无序列表
ul: unordered list
li: list item

## 定义列表
dl: definition list
dt: definition title
dd: definition description


# 容器元素
容器元素： 该元素代表一个块区域，内部用于放置其他的元素。

## div元素
没有语义

## 语义化容器元素
header: 通常用于表示叶头， 也可以用于表示文章的头部。
footer: 通常用于表示页脚。
article: 通常用于表示正体。
section: 通常用于表示文章的章节。
aside: 通常用于表示侧边栏。

# 元素的包含关系
以前: 块级元素可以包含行级元素，行级元素不可以包含块级元素， a元素除外。
现在: 元素的包含关系有元素的内容类别决定。可以到mdn里面查看该元素的允许内容部分。

总结： 
1. 容器元素中可以包含任何元素
2. a元素中几乎可以包含任何元素
3. 某些元素有固定的子元素（ul>li, ol>li, dl>dt+dd）
4. 标题元素和段落元素不能相互嵌套， 并且不能包含容器元素。

# 表单元素
一系列元素，主要用于收集用户数据

## input元素
- type属性：输入框类型
type：text,普通文本输入框
type：password，密码输入框
type：date,日期选择框，有兼容性问题
type：search，搜索框，有兼容性问题
type: number,数字输入框
type：checkbox，多选框
type: radio，单选框

- value： 输入框的值
- placeholder属性： 显示提示的文本，文本框没有内容时显示

input元素可以制作按钮
当type值为reset，button，submit时，input表示按钮

## select元素
下拉列表选择框
通常和option元素配合使用

## textarea元素
文本域，多行文本框

## 按钮元素button

### label元素
不同元素，通常配合单选和多选框使用
可以通过for属性，让label元素关联某一个表单元素，for属性书写表单元素id的值

### datalist
数据列表，该元素本身不会显示到页面，通常用于和普通文本框配合。

### form元素
通常会将整个表单元素放置form元素的内部，作用时当提交表单时，会将form元素内部的表单内容
以合适的方式提交到服务器
form元素对开发静态页面没有什么意义。