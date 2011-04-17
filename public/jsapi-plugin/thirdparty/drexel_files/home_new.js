YAHOO.namespace("lebow");

   

YAHOO.lebow.init = function () { 
	
   try {
     YAHOO.util.History.initialize('yui-history-field', 'yui-history-iframe');
   } 
   catch (e) {
     YAHOO.lebow.initTabs(); 
   }
   YAHOO.lebow.initTabs();
    
	/** SET UP OUR EVENTS TABS **/ 
	var EventTabs = new YAHOO.widget.TabView('EventTabs');
	
	EventTabs.getTab(0).set('cacheData', true); 
	EventTabs.getTab(0).set('dataSrc', '/Newsroom/rest/event.php?action=today');
	EventTabs.getTab(1).set('cacheData', true); 
	EventTabs.getTab(1).set('dataSrc', '/Newsroom/rest/event.php?action=upcoming');
	EventTabs.getTab(2).set('cacheData', true); 
	EventTabs.getTab(2).set('dataSrc', '/Newsroom/rest/event.php?action=OH');
	EventTabs.set('activeTab', EventTabs.getTab(2));

	EventTabs.addListener('available', function (e) {
		if (YAHOO.util.Cookie.get('event-tab') != null) { 
			this.set('activeTab', this.getTab(YAHOO.util.Cookie.get('event-tab')));
		}
	}); 
	
	EventTabs.addListener('activeTabChange', function (e) {
		var inx = EventTabs.get('activeIndex');  
		var d = new Date(); 
		var month = d.getMonth(); 
		month++; 
		var exp = new Date(d.getFullYear(), month, d.getDate());
		YAHOO.util.Cookie.set('event-tab', inx.toString(), {expires: exp});
	});  
	
	var tabLoaded = function(e) { 
	  var actTab = e.newValue; 
	  if (actTab.search('There are no events today') > 0 && EventTabs.get('activeIndex') == 0) { 
	        //EventTabs.set('activeIndex', 1);
	  } 
   	  els = YAHOO.util.Dom.getElementsByClassName('dyEventLink');
   	  var showEvent = function (e) { 
   	     var eid = this.id; 
   	     rx = /^Event_(\d*)$/; 
   	     eid = eid.replace(rx, '$1'); 
   	     YAHOO.lebow.getEvent(eid);
   	  } 
   	  
   	  YAHOO.util.Event.addListener(els, 'click', showEvent);   
	} 
	EventTabs.getTab(0).addListener('contentChange', tabLoaded);
	EventTabs.getTab(1).addListener('contentChange', tabLoaded);
	EventTabs.getTab(2).addListener('contentChange', tabLoaded);
	
	//YAHOO.lebow.loadEvents('/Newsroom/Events/xml.php?action=list&sDate=12-11-2007&eDate=12-11-2007', 'Today');
	
	
} 

	function hdlTVChange(e) { 
		var newState, currentState;
		var tabInx = this.getTabIndex(e.newValue);
		newState = "tab" + tabInx;
   
		try { 
			currentState = YAHOO.util.History.getCurrentState('tabs'); 
      
			if (newState != currentState) { 
				YAHOO.util.History.navigate('tabs', newState);  
			}   
		}
		catch (e) { 
			tabView.set('activeIndex', newState.substr(3));
		}
} 

YAHOO.lebow.initTabs = function () {

   var home_tabs = new YAHOO.widget.TabView('MainContent');
   YAHOO.lebow.tabView = home_tabs;
   
    YAHOO.lebow.tabView.contentTransition(); 
	YAHOO.lebow.tabView.getTab(0).set('cacheData', true); 
	YAHOO.lebow.tabView.getTab(0).set('dataSrc', '/tabcontent.php?content=focus');
	YAHOO.lebow.tabView.getTab(1).set('cacheData', true); 
	YAHOO.lebow.tabView.getTab(1).set('dataSrc', '/tabcontent.php?content=news'); 
	YAHOO.lebow.tabView.getTab(2).set('cacheData', true); 
	YAHOO.lebow.tabView.getTab(2).set('dataSrc', '/tabcontent.php?content=life'); 
	YAHOO.lebow.tabView.getTab(3).set('cacheData', true); 
	YAHOO.lebow.tabView.getTab(3).set('dataSrc', '/tabcontent.php?content=research'); 
	YAHOO.lebow.tabView.getTab(4).set('cacheData', true); 
	YAHOO.lebow.tabView.getTab(4).set('dataSrc', '/tabcontent.php?content=podcasts');
	
	//YAHOO.lebow.tabView.addListener('activeTabChange', Videobox);
	
	YAHOO.lebow.tabView.addListener('activeTabChange', hdlTVChange);
	
	
	YAHOO.lebow.tabView.addListener('beforeActiveTabChange', function (e) { 
	                                                           var newInx = this.getTabIndex(e.newValue); 
	                                                           var prevInx = this.getTabIndex(e.prevValue);
	                                                           if (newInx != prevInx) { 
   	                                                            var track = '/hp/tabs/' +  YAHOO.lebow.trackLabel[newInx]; 
                                                                  pageTracker._trackPageview(track); 
	                                                              } 
	                                                           /** Save **/ 
	                                                            var inx = this.get('activeIndex');  
																var d = new Date(); 
																var month = d.getMonth(); 
																month++; 
																var exp = new Date(d.getFullYear(), month, d.getDate());
																YAHOO.util.Cookie.set('main-tab', inx.toString(), {expires: exp});
	                                                           
	                                                           }); 
	YAHOO.lebow.trackLabel = new Array('Focus', 'InTheNews', 'Lifestyles', 'Research', 'Podcasts'); 
	
} 
   

   var bmState= YAHOO.util.History.getBookmarkedState('tabs'); 
   var initState = bmState || "tab0";

   if (YAHOO.util.Cookie.get('main-tab') != null) {
	   initState = 'tab' + YAHOO.util.Cookie.get('main-tab');
   }
   
   
   YAHOO.util.History.register('tabs', initState, function (state) {
	   
       YAHOO.lebow.tabView.set('activeIndex', state.substr(3));
     });
   
   YAHOO.util.Event.onDOMReady(YAHOO.lebow.init); 
   
   YAHOO.util.History.onReady(function () { 
         var currentState; 
         YAHOO.lebow.initTabs();
         currentState  = YAHOO.util.History.getCurrentState('tabs'); 
         YAHOO.lebow.tabView.set('activeIndex', currentState.substr(3)); 
         
      });
   
	function adRotateClick(url, linkTarget, adName) {  
	   var trackName = '/hp/ads/' + adName; 
      pageTracker._trackPageview(trackName); 
	   document.location = url;
	}
	