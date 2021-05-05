格式化上下文，是页面中的一块渲染区域，有一套渲染规则，决定子元素如何定位，以及和其他元素的相互关系  
有BFC特性的元素相当于一块隔离的容器，容器内的布局不会影响容器外  
触发BFC的方式：
 - display：flex/inline-block
 - float：除去none外的所有
 - overflow：除去visable的所有
 - position：absolute与fixed
  
特性：同一BFC下，元素外边距会发生折叠  
可以包含浮动的元素，即可以被浮动的、脱离文档流的元素撑开  
可以阻止元素被浮动元素覆盖

