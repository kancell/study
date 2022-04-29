Html中多数元素为块级元素与行内元素

#### 常见的块级元素

- div

- p

- h 各级标签

- ul

- li

- table
  
  等等...

#### 常见的行内元素

- span

- a

- input

- label

- b
  
  等等...

#### 常见可替换元素

- input（type为img时）

- img

- iframe
  
  等等...

HTML 规范也说了 [<input>](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)` 元素可替换，因为image类型的 `[<input>](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)元素就像[<image>](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)`一样被替换。但是其他形式的控制元素，包括其他类型的`[<input>](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)元素，被明确地列为非可替换元素（non-replaced elements）。该规范用术语小挂件（Widgets）来描述它们默认的限定平台的渲染行为。

### 区别

行内元素仅能包含行内元素与内容，块级元素可以包含块级元素，行内元素、可替换元素、内容。

行内元素不会新起一行，占满父元素宽度后会进行换行，本身宽度与内容宽度和子元素宽度有关。块级元素会新起一行，宽度自动填满父元素宽度

行内元素设置height与width无效。

行内元素在垂直轴设置的margin与padding无效

可替换元素没有实际的内容，浏览器会根据其属性渲染属性对应的内容，比如img标签的src，会渲染为响应的图片。可替换元素的渲染不由css控制，css会影响可替换元素的位置，但不影响内容
