// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
        {
		path: '/listas/',
    	url: 'listas.html',
    	name: 'listas',
  		},
        {
		path: '/card/',
    	url: 'card.html',
    	name: 'card',
  		},
        {
		path: '/accordion/',
    	url: 'accordion.html',
    	name: 'accordion',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

