# Tab分页组件

## 一、运行Demo

1. npm install
2. gulp watch

有些时候国内npm源访问比较慢，那么推荐使用cnpm。

1. npm install cnpm -g
2. cnpm install
3. gulp watch

## 二、用法Usage

##### 详细实例见demo

    var React = require('react');
    var ReactDOM = require('react-dom');
    var Tab = require('../src/tab/tab');
    var App = React.createClass({
        render: function(){
          return (
            <div>
              <Tab 
                 tabStyle={{width:'450px',height:'300px',margin:'20px'}}  //设置tab组件的样式
                 titleStyle={{width:'80px',height:'35px',lineHeight:'35px',color:'#666'}} 
                 //设置组件中标题的样式
                 paneStyle={{color:'#666'}} //设置组件中分页的内容的样式
                 activeColor='#00ccff' //设置当前显示页的标题和标题下方细条的颜色
                 slideBar={true}  //设置是否显示标题下方的细条效果
                 animate="slide"  //设置分页切换时的动画效果
              >
                  <div title="Tab1">Content of Tab Pane 1</div>
                  <div title="Tab2">Content of Tab Pane 2</div>
                  <div title="Tab3">Content of Tab Pane 3</div>
                  <div title="Tab4">Content of Tab Pane 4</div>
              </Tab>
            </div>
          );
        }
    });
    ReactDOM.render(<App />, document.getElementById('AppContainer'));
## 三、API

1. Tab分页参数解析

   - tabStyle:       配置组件的整体样式，是一个以字面量形式表示的对象，可设置任意样式；
   - titleStyle:      配置组件中标题的样式，是一个以字面量形式表示的对象，可设置任意样式；
   - paneStyle:    配置组件中分页的内容的样式，是一个以字面量形式表示的对象，可设置任意样式；
   - activeColor:  配置触发显示的标题颜色和小细条颜色，是一个颜色字符串，如‘#00ccff’；
   - slideBar:        配置是否显示标题下方的小细条，是一个布尔值，true表示显示，false表示不显示；
   - animate:        配置分页切换时的动画效果，是一个字符串，‘slide’表示滑动效果，‘fade’表示渐隐效果。

   **PS：**

   ​     以上配置项均在<Tab></Tab>标签上配置；
   ​     有几个分页，<Tab></Tab>标签内就包含几个div，这些div都有一个title属性，表示对应分页的标题内容；
   ​     分页的具体内容在各个div中编写。

2. Tab分页默认参数配置

   以下为Tab分页组件的默认配置，在使用中可根据需要更改配置：

     {
        tabStyle:{width:'450px',height:'300px'},
        titleStyle:{width:'80px',height:'35px',lineHeight:'35px',color:'#666'},
        paneStyle:{color:'#666'},
        activeColor:'red',
        slideBar:true,
        animate:'slide'
     };






