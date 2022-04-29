<!--
 * @Author: xxxafu
 * @Date: 2022-03-14 09:42:45
 * @LastEditTime: 2022-03-14 09:42:46
 * @LastEditors: xxxafu
 * @Description: 
 * @FilePath: \study\CSS\css3新特性.md
-->

太多了，而且现在基本无需考虑兼容问题，所以详见MDN🤣

毕竟已经是202x年了

比较值得一提的是动画animation与渐变transition，css3动画属于补间动画，仅定义关键帧，其他帧自动生成，因此可定义性差，但更为节省资源。 

css3动画运行在合成线程中，不会阻塞主线程，不会造成重绘与回流。

css3动画可以应用gpu加速，在流畅性等方面表现一般要好于JavaScript动画。

而且写起来不难😂但需要比较花的效果时css动画很难完全处理，这时只能求助第三方动画库了

动画相关有几个属性容易混淆

- animation
  
  用于生成动画

- transition
  
  渐变

- transform
  
  元素的变形，比如垂直居中用于代替margin等
  
  - translate
    
    transform的一个属性，移动
