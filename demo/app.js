    var React = require('react');
    var ReactDOM = require('react-dom');
    var Tab = require('../src/tab/tab');
    var App = React.createClass({
        render: function(){
          return (
            <div>
              <Tab 
                 tabStyle={{width:'450px',height:'300px',margin:'20px'}}  //设置tab组件的样式
                 titleStyle={{width:'80px',height:'35px',lineHeight:'35px',color:'#666'}} //设置组件中标题的样式
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