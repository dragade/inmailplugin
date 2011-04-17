
/** Drexel Header Object **/ 

var drexel_head = function() { 
	var searchURL = 'http://www.drexel.edu/search.aspx?q=';

	var init = function () { 
		var sb = document.getElementById("tbSearch");
		sb.onfocus = function() {
			if (sb.value.toLowerCase() == "search...") sb.value = "";    
		}
		sb.onblur = function() {
			if (sb.value == "") sb.value = "Search...";
		}
		sb.onkeypress = Search;
		
		var sbut = document.getElementById('tbSearchButton'); 
		sbut.onclick = function() { 
			doSearch(sb.value);
		} 
	}; 
	
	function Search(e) {
		var d = "http://www.drexel.edu/search.aspx?q=";
		var keyCode;
		var source;
		
		if (!e) var e = window.event;
		
		keyCode = e.keyCode ? e.keyCode : e.charCode;
		source = e.srcElement ? e.srcElement : e.target;
		
		if (keyCode == 13) {
			location.href = d + escape(source.value);
			return false;
		}
	}
	
	function doSearch(q) { 
		if (q != 'Search...') 
			location.href = searchURL + escape(q);
	} 
	
	return { 
		InitSearch: init,
		doGoTo: function() { 
			var gt = document.getElementById('drexel_sel_goto');
			location.href = gt.value; 
		}
	};  
	
}(); //Execute and Return **IMPORTANT**

/*window.onload = function()
{
	//drexel_head.InitSearch;
}*/
