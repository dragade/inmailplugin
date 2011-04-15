// pop-up window
function newWindow( url, w, h, centered )
{
    var width = w;
    var height = h;
    var winl = 0;
    var wint = 0;
    if ( centered )
    {
	winl = (screen.width - width) / 2;
	wint = (screen.height - height) / 2;
    }

    var myWindow = window.open( url, 'NewWindow', 'width='+width+',height='+height+',top='+wint+',left='+winl+',menubar=no,status=yes,directories=no,location=no,resizable=yes,modal=yes,scrollbars=no' );

    if ( myWindow ==null || typeof( myWindow ) == "undefined" )
    {
	alert( 'You have popup blocker enabled.\nPlease disable and try again!' );
    }
    else
    {
	myWindow.opener = self;
	myWindow.focus();
    }
}

function closePop()
{
	document.getElementById("surveyPop").style.display = "none";
}

// trim string of beginning and ending spaces
function trim( sInString )
{
    if ( isNullOrBlank( sInString ) )
	return '';

    sInString = sInString.replace( /^\s+/g, "" );   // strip leading
    return sInString.replace( /\s+$/g, "" );	    // strip trailing
}


// checks if string is null or blank
function isNullOrBlank( str )
{
    return ( str == null || str.length == 0 );
}


function hideError()
{
	document.getElementById("errorContainer").style.display = "none";
}


 var req, ie=(window.ActiveXObject ? 1 : 0); 
 function xmlQuery(url,callback, el)
 {
	
	if(ie)
		{req=new ActiveXObject("Microsoft.XMLHTTP");}
	else
		{req=new XMLHttpRequest();}
		
	req.onreadystatechange = function (){
		if(req.readyState==4 && req.status==200)
			{callback(req,el);}
	};
	
	req.open("GET",url,true);
	
	if(ie)
		{req.send();}
	else
		{req.send(null);}
}

function showEvents(evt, evts, revts, date, elOutside, elInside)
{
	clearTimeout(to);
	var isIE = true;
	if (!evt)
	{  
		var evt = window.event;
		isIE = false;
	}

	evt.cancelBubble = true;
	if (evt.stopPropagation) evt.stopPropagation();		
	
	var scrOfX = 0, scrOfY = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
	//Netscape compliant
	scrOfY = window.pageYOffset;
	scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
	//DOM compliant
	scrOfY = document.body.scrollTop;
	scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
	//IE6 standards compliant mode
	scrOfY = document.documentElement.scrollTop;
	scrOfX = document.documentElement.scrollLeft;
	}

	var theOutsideDiv = document.getElementById(elOutside);
	var theInsideDiv = document.getElementById(elInside);
	
	var winH = 590;

	if (parseInt(navigator.appVersion)>3)
	{
	 if (isIE)
	   winH = document.body.offsetHeight;
	 else
	   winH = window.innerHeight;
	}
	
	var top = evt.clientY + scrOfY + 5;
	
	if (evt.clientY+300 > winH)
		top -= 300;
	
	theOutsideDiv.style.top = top + "px";
	theOutsideDiv.style.top = (evt.clientY + scrOfY + 5) + "px";
	
	var left = evt.clientX + scrOfX - 50;

	if (left + 250 > 800)
		left -= 250;
	
	
	theOutsideDiv.style.left = left + "px";
	theOutsideDiv.style.display = "block";
	
   
	theInsideDiv.style.display = "block";
	
	theInsideDiv.style.top = theOutsideDiv.style.top;
	theInsideDiv.style.left = theOutsideDiv.style.left;
	
	theInsideDiv.innerHTML = "Loading...";
	xmlQuery("/Ajax/calendarevents.aspx?evts=" + evts + "&revts=" + revts + "&date=" + date, updateDivCallback, theInsideDiv);
}

function showMainEvents(evt, evts, revts, date, elOutside, elInside)
{
	clearTimeout(to);
	var isIE = true;
	if (!evt)
	{  
		var evt = window.event;
		isIE = false;
	}

	evt.cancelBubble = true;
	if (evt.stopPropagation) evt.stopPropagation();		
	
	var scrOfX = 0, scrOfY = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
	//Netscape compliant
	scrOfY = window.pageYOffset;
	scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
	//DOM compliant
	scrOfY = document.body.scrollTop;
	scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
	//IE6 standards compliant mode
	scrOfY = document.documentElement.scrollTop;
	scrOfX = document.documentElement.scrollLeft;
	}

	var theOutsideDiv = document.getElementById(elOutside);
	var theInsideDiv = document.getElementById(elInside);
	
	var winH = 590;

	if (parseInt(navigator.appVersion)>3)
	{
	 if (isIE)
	   winH = document.body.offsetHeight;
	 else
	   winH = window.innerHeight;
	}
	
	var top = evt.clientY + scrOfY + 5;
	
	if (evt.clientY+300 > winH)
		top -= 300;
	
	theOutsideDiv.style.top = top + "px";
	//theOutsideDiv.style.top = (evt.clientY + scrOfY + 5) + "px";
	
	var left = evt.clientX + scrOfX - 50;

	if (left + 250 > 800)
		left -= 250;
	
	
	theOutsideDiv.style.left = left + "px";
	theOutsideDiv.style.display = "block";
	
   
	theInsideDiv.style.display = "block";
	
	theInsideDiv.style.top = theOutsideDiv.style.top;
	theInsideDiv.style.left = theOutsideDiv.style.left;
	
	theInsideDiv.innerHTML = "Loading...";
	xmlQuery("/Ajax/calendarevents.aspx?evts=" + evts + "&revts=" + revts + "&date=" + date, updateDivCallback, theInsideDiv);
}


var to = 0;

function eventViewClicked(evt)
{
	if (!evt) var evt = window.event;
	evt.cancelBubble = true;
	if (evt.stopPropagation) evt.stopPropagation();	
}

function documentClickHide(evt)
{
	hideEventsTimeout("transp","eventView");
}

/*
function hideEvents(el1,el2)
{
	to = setTimeout("hideEventsTimeout('" + el1 + "','"+el2+"')", 1);
}
*/

function hideEventsTimeout(el1, el2)
{
	document.getElementById(el1).style.display = "none";
	document.getElementById(el2).style.display = "none";
}

function updateDivCallback(req,el)
{el.innerHTML = req.responseText; }

function showHelp(evt, identifier)
{
	var helpDiv = document.getElementById("helpDiv");
	if (!helpDiv)
	{
		helpDiv = document.createElement('div');
		helpDiv.id = "helpDiv";
		document.body.appendChild(helpDiv);
	}
	
	var isIE = true;
	if (!evt)
	{  
		var evt = window.event;
		isIE = false;
	}
	
	// calculate top
	helpDiv.style.top = evt.clientY + (isIE ? document.body.scrollTop : document.pageYOffset) + 5 + "px";

	// calculate left	
	var left = evt.clientX + (isIE ? document.body.scrollLeft : document.pageXOffset) + 5;
	if (left + 250 > document.body.clientWidth)
		left -= 260;
	helpDiv.style.left = left + "px";
	
	// make sure the div will be visible
	helpDiv.style.display = "block";		
	
	helpDiv.innerHTML = "Loading...";
	xmlQuery("../ajax/Help.aspx?Identifier=" + identifier, showHelpCallback, helpDiv);
	
	return false;
}

function showHelpCallback(req,el)
{ el.innerHTML = req.responseText + "<a href='javascript:hideHelp()'>Close</a>"; }

function hideHelp()
{
	document.getElementById("helpDiv").style.display = "none";
}



/* MEMBER DIRECTORY FUNCTIONS */

var page = 0;
var totalPages = 0;

function initializeDirectory(el,target)
{
	searchDir(null,el,target);
}

var lastEl;
var lastTimeout;
function searchDir(e,el,target)
{
	if (e != null)
	{
		var keynum;
		if(window.event) // IE
			keynum = e.keyCode;
		else if(e.which) // Netscape/Firefox/Opera
			keynum = e.which;
			
		if (keynum == 13)
		{
			showLoadGraphic(el);
			xmlQuery("../ajax/MemberDirectory.aspx?s=" + lastEl.value, updateDivCallback,document.getElementById(target));
			return false;
		}
	}
		
	if (lastTimeout != null)
		clearTimeout(lastTimeout);

	lastEl = el;

	lastTimeout = setTimeout(function(){if (lastEl.value.length < 2){return;} showLoadGraphic(el); xmlQuery("../ajax/MemberDirectory.aspx?s=" + lastEl.value, updateDivCallback,document.getElementById(target));},500);
	return true;
}

function searchLetter(letter,target)
{
	showLoadGraphic(document.getElementById(target));
	xmlQuery("../ajax/MemberDirectory.aspx?lname=true&s=" + letter, updateDivCallback,document.getElementById(target));
}


function viewAllDirectory(target)
{
	showLoadGraphic(document.getElementById(target));
	xmlQuery("../ajax/MemberDirectory.aspx?s=", updateDivCallback,document.getElementById(target));
}

function showLoadGraphic(el)
{
	el.innerHTML = "<div align='center'><br><br><br><img src='/virtual/images/ajaxload.gif' border='0'></div>";
}

/* MEMBER DIRECTORY SELECTOR FUNCTIONS */
function updateDivCallbackSelector(req,el)
{
	el.innerHTML = req.responseText;
	
	var inputs = el.getElementsByTagName("input");
	for(var i = 0; i < inputs.length; i++)
		if (inputs[i].type == "checkbox")
			checkSelection(inputs[i]);
}


function initializeDirectorySelector(el,target,ids)
{
	if (ids != null)
	{
		xmlQuery("../ajax/MemberDirectorySelector.aspx?ids=" + ids, updateDivCallbackSelector,document.getElementById(target));		
	}
	else
		searchDirSelector(null,el,target);
}

function searchDirSelector(e,el,target)
{
	if (e != null)
	{
		var keynum;
		if(window.event) // IE
			keynum = e.keyCode;
		else if(e.which) // Netscape/Firefox/Opera
			keynum = e.which;
			
		if (keynum == 13)
		{
			xmlQuery("../ajax/MemberDirectorySelector.aspx?s=" + lastEl.value, updateDivCallbackSelector,document.getElementById(target));
			return false;
		}
	}
		
	if (lastTimeout != null)
		clearTimeout(lastTimeout);

	lastEl = el;

	lastTimeout = setTimeout(function(){if (lastEl.value.length < 2){return;} xmlQuery("../ajax/MemberDirectorySelector.aspx?s=" + lastEl.value, updateDivCallbackSelector,document.getElementById(target));},500);
	return true;
}

function searchLetterSelector(letter,target)
{
	showLoadGraphic(document.getElementById(target));
	xmlQuery("../ajax/MemberDirectorySelector.aspx?lname=true&s=" + letter, updateDivCallbackSelector,document.getElementById(target));
}

function viewAllDirectorySelector(target)
{
	showLoadGraphic(document.getElementById(target));
	xmlQuery("../ajax/MemberDirectorySelector.aspx?s=", updateDivCallbackSelector,document.getElementById(target));
}

function selectAllCheckboxes(sender)
{
	var DoCheck = true;
	if (sender != null)
	{
		if (sender.value != "Select All")
		{
			sender.value = "Select All";
			DoCheck = false;
		}
		else
		{
			sender.value = "Unselect All";
			DoCheck = true;
		}
	}
	
	var els = document.getElementsByTagName("input");
	for(var i = 0; i < els.length; i++)
	{
		if (els[i].type == "checkbox" && els[i].getAttribute("group") == "cb")
		{
			els[i].checked = DoCheck;
			toggleSelection(els[i]);
		}
	}
}

function toggleSelection(chkCtl)
{
	var hdnSelection = document.getElementById('SelectedMemberIDs');
	if (hdnSelection != null)
	{
		if (chkCtl.checked)
		{
			// add to list
			hdnSelection.value += chkCtl.value + ",";
		}
		else
		{
			// remove from list
			var position = hdnSelection.value.indexOf(chkCtl.value + ",");
			if (position > -1)
				hdnSelection.value = hdnSelection.value.substring(0,position) + hdnSelection.value.substring(position+chkCtl.value.length+1);
		}
	}
}

function checkSelection(chkCtl)
{
	var hdnSelection = document.getElementById('SelectedMemberIDs');
	var position = hdnSelection.value.indexOf(chkCtl.value + ",");
	if (position > -1 || hdnSelection.value == chkCtl.value)
		chkCtl.checked = true;
	else
		chkCtl.checked = false;
}


var popContent;
function showPhoto(id,evt)
{
	var scrOfX = 0, scrOfY = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
	//Netscape compliant
	scrOfY = window.pageYOffset;
	scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
	//DOM compliant
	scrOfY = document.body.scrollTop;
	scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
	//IE6 standards compliant mode
	scrOfY = document.documentElement.scrollTop;
	scrOfX = document.documentElement.scrollLeft;
	}
	
	if (popContent == null)
	{
		popContent = document.createElement("div");
		popContent.id = "popContent";
		popContent.className = "popContent";
		popContent.style.top = (evt.clientY + scrOfY) + "px";
		popContent.style.left = (evt.clientX + scrOfX) + "px";
		document.body.appendChild(popContent);
	}
	else
	{
		popContent.style.top = (evt.clientY + scrOfY) + "px";
		popContent.style.left = (evt.clientX + scrOfX) + "px";
	}
	popContent.innerHTML = ""; // ajax will append to this string
	xmlQuery("../ajax/GetPhoto.aspx?UserID=" + id, showPhotoCallback,popContent);
	return false;
}

function showPhotoGalleryPhoto(id,evt)
{
	var isIE = true;
	if (!evt)
	{  
		var evt = window.event;
		isIE = false;
	}
	
	if (popContent == null)
	{
		popContent = document.createElement("div");
		/*
		popContent.id = "popContent";
		popContent.className = "popContent_PhotoGallery";
		*/
		document.body.appendChild(popContent);
	}
	
	popContent.innerHTML = "";
	xmlQuery("../ajax/GetPhoto.aspx?PhotoGalleryPhotoId=" + id, showPhotoCallback,popContent);
	return false;
}

function showPhotoCallback(req,el)
{
	el.innerHTML = "<div class='popContent_PhotoGallery'></div><table width=100% height=100% class='popContent_Photo' onClick='javascript:hidePhotoGalleryPhoto()'><tr><td valign=center align=center>" + req.responseText + "</td></tr></table>";
	el.style.display = "block";
}

function hidePhoto()
{
	popContent.style.display = "none";
}

function hidePhotoGalleryPhoto()
{
	popContent.innerHTML = "";
}

function doUpload(ctl,extensions)
{
	if (extensions != null)
	{
		var emsg = "";
		var validated = false;
		for(var i = 0; i < extensions.length; i++)
		{
			emsg += extensions[i] + " "; 
			if (ctl.value.indexOf(extensions[i]) > -1)
				validated = true;
		}
		
		if (!validated)
		{
			alert("Only the following file types are supported: " + emsg);
			ctl.value = "";
			return false;
		}
	}
	
	
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++)
	{
		if (inputs[i].type == "submit")
		{
			inputs[i].disabled = true;
		}
	}
	
	document.getElementById('fileUploadMsg').style.display = 'block';
	document.forms[0].submit();
	return true;
}

function toggleOn(ctl)
{
    document.getElementById(ctl).style.display = '';
    return true;
}

function toggleOff(ctl)
{
    document.getElementById(ctl).style.display = 'none';
    return true;
}

function setFocus(ctl)
{
    document.getElementById(ctl).focus();
    return true;
}

function getDocumentSize()
{
	if (window.innerHeight && window.scrollMaxY) {// Firefox
		yWithScroll = window.innerHeight + window.scrollMaxY;
		xWithScroll = window.innerWidth + window.scrollMaxX;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		yWithScroll = document.body.scrollHeight;
		xWithScroll = document.body.scrollWidth;
	} else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari
		yWithScroll = document.body.offsetWidth + document.body.offsetLeft;
		xWithScroll = document.body.offsetHeight + document.body.offsetTop;	
  	}

	return { width: xWithScroll,height: yWithScroll };
}
function getWindowSize()
{
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  return {width: myWidth,height: myHeight};
}
