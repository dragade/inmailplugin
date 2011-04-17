function popURL(url, winName, width, height) { 
	
	if (!winName) 
		var winName = "Popup"; 
		
	if (!width) 
		var width = 675; 
	
	if (!height) 
		var height = 565; 
		
	// Midx and Midy will be used to center the window.
	var midx = (screen.width/2) - (width/2);
	var midy = (screen.height/2) - (height/2);
	
	// Set up the Propeties String
	var props = "height=" + height + ",width=" + width + ",screenX=" + midx + ",screenY=" + midy + ",top=" + midy + ",left=" + midx + ",scrollbars=yes";
	
  window.open(url, winName, props); 
	
} 