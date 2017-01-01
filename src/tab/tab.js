var React = require('react');
var insertKeyframesRule = require('react-kit/insertKeyframesRule');
var TabCss = require('./tabCss');
var _ ={};
_.extend = require('lodash/extend');

var Tab = React.createClass({
	getDefaultProps:function(){
       return {
       	 tabStyle:{width:'450px',height:'300px'},
       	 titleStyle:{width:'80px',height:'35px',lineHeight:'35px',color:'#666'},
       	 paneStyle:{color:'#666'},
       	 activeColor:'red',
       	 slideBar:true,
       	 animate:'slide'
       };
	},
	getInitialState:function(){
       return {index:0,tposition:'',cposition:'',canimation:''};
	},
	handleClick:function(index){
	   var tposition = 'translateX('+(index)*parseInt(this.props.titleStyle.width)+'px)';
       var cposition = 'translateX('+(index)*(-parseInt(this.props.tabStyle.width))+'px)';
       this.setState({index:index,tposition:tposition,cposition:cposition,
       	  canimation:insertKeyframesRule({'0%':{opacity: 0.3},'100%': {opacity: 1}})  
       });
	},
	setTabTitles:function(){
		var t=this;
		var titles=[];
		React.Children.map(t.props.children,function(child,index){
           var activeColor = t.state.index===index? t.props.activeColor : t.props.titleStyle.color;
           var titleStyle = _.extend({},t.props.titleStyle,{color:activeColor});
           titles.push(
              <div key={index} style={_.extend({},TabCss.tabTitle,titleStyle)} onClick={t.handleClick.bind(t,index)}>
                           {child.props.title}
              </div>
           );
		});
		return titles;
	},
	setSlideBar:function(){
	    if(this.props.slideBar){
	       return <div style={_.extend({},TabCss.titleActive,{width:this.props.titleStyle.width,transform:this.state.tposition,backgroundColor:this.props.activeColor})}></div>;
	    }  
	},	
	setTabPane:function(){
		var t=this;
		var panes=[];
		var paneWidth=parseInt(t.props.tabStyle.width);
		React.Children.map(t.props.children,function(child,index){
		   var paneStyle=_.extend({},t.props.paneStyle,{width:paneWidth,left:index*paneWidth});
		   panes.push(<div key={index} style={_.extend({},TabCss.tabPane,paneStyle)}>{child.props.children}</div>);				     	
		});
		return panes;        
	},	
	render:function(){
		var t=this;
		if(t.props.animate==='slide'){
           var style={transform:t.state.cposition,transition: 'all .3s ease 0s'};
		}else if(t.props.animate==='fade'){
		   var style={transform:t.state.cposition,animationName:t.state.canimation};           
		}
		return (			
			<div style={_.extend({},TabCss.tab,t.props.tabStyle)}> 
               <div style={_.extend({},TabCss.tabTitles,{height:t.props.titleStyle.height})}>
                  {t.setTabTitles()}
			      {t.setSlideBar()}
               </div>
               <div style={_.extend({},TabCss.tabPanes,style)}>
	              {t.setTabPane()}  
               </div>
			</div>
		);
	}
});

module.exports = Tab;