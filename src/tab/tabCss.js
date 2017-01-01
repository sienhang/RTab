var TabCss = {
   tab:{
	  border:'1px solid #ccc',
	  overflow: 'hidden'
   },
   tabTitles:{
      margin:'15px',
      borderBottom: '1px solid #ccc',
      position:'relative'
   },
   tabTitle:{
	  float: 'left',
     textAlign:'center',
     cursor: 'pointer',
     transition: 'all 0.3s ease 0s',
   },
   titleActive:{
	  height: '2px',
     transition: 'all 0.3s ease 0s',
     position:'absolute',
     bottom:0
   },
   tabPanes:{
      position: 'relative',
      animationDuration:'0.5s'
   },
   tabPane:{
      position:'absolute',
      padding: '0 15px 15px 15px',
      float: 'left',
   }

};

module.exports = TabCss;