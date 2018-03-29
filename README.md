### react-native-waterfall-layout
```
基于react-native官方组件封装的瀑布流组件
```
Preview

![iOS](https://upload-images.jianshu.io/upload_images/5855162-678fa52f270a341a.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/475)
iOS

![Android](https://upload-images.jianshu.io/upload_images/5855162-97d24b94443b0e5f.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/490)
Android

### Getting started
#### 1.安装
```
$ npm i react-native-waterfall-layout --save
```
#### 2.导入
```
import Waterfall from 'react-native-waterfall-layout';
```

#### Properties  
|    Prop       |      Default   |  Type        |  Description             |
|:-----------------:|:--------------:|:-----------------:|:------------------------------:|
|    columns      |        2       |  Number      |  瀑布流的列数             |
|    space        |       10       |  Number      |  瀑布流每列之间的间隔       |
|    renderIte    |      null      |  Function    |  用于自定义瀑布流中每一项的内容 |
|keyExtractor   |  null             |  Function       |   为给定的item生成一个不重复的key。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index|
|refresh         |    true      |         Boolean   |      是否启用下拉刷新|
|refreshing      |  (done) =>{}   | Function   |     下拉刷新触发该函数，接收一个done函数用于结束刷新|
|refreshConf     |                 |      Object | 下拉刷新参数，配置详见[RefreshControl](https://facebook.github.io/react-native/docs/refreshcontrol.html)|
|infinite       |       true          |      Boolean  |      是否启用滚动加载|
|infiniting   |       (done) => {}  |  Function    |    滚动到列表底部触发该函数，接收参数同refreshing|
|hasMore    |       true          |     Boolean     |   设置为false滚动到列表底部后将不触发infiniting|
|renderInfinite      |              |     Function  |     用于自定义滚动加载组件及样式,接收一个loading用于判断是否正在加载|



### Methods
##### addItems

添加Items到瀑布流中，其中Item的高度自动计算出来，将Item添加到最矮的列中，所以会导致Items依次渲染。
```
this.refs.waterfall.addItems([

    {name: 'Item1'}, 

    {name: 'Item2'}

])
```
##### addItemWithHeight

添加 items 到瀑布流组件中，item的高度也将自动确定，但需要在每个item对象的数据中添加height属性，该属性不是item渲染后的实际高度，而是作为item分配列的算法参考值。和addItems不一样的是，是批量渲染的
```
this.refs.waterfall.addItemsWithHeight([

      {name:"Item1", height: 210 },

      {name:"Item2", height: 150 }

]);
```
##### clear

清除瀑布流中的所有项
```
this.refs.waterfall.clear();
```


### Example
点击[Demo](https://link.jianshu.com/?t=https%3A%2F%2Fgithub.com%2Fjunhaotong%2Freact-native-waterfall%2Fblob%2Fmaster%2Fexample%2Findex.js)查看
