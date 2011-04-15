// JScript File

function HomepageSearch()
{
    this.StartDate = null;
    this.calendarStartDate = null;
    this.calendarEndDate = null;
    this.DisplayBy = "Week";
    this.SchoolsAndCentersID = 1;
    
    this.initialize = function(startDate, displayBy, schoolsAndCentersID)
    {
        this.DisplayBy = displayBy;
        this.SchoolsAndCentersID = schoolsAndCentersID;
        
        this.StartDate = startDate;
        this.calendarStartDate = new Date(startDate);
        
        if(displayBy == 'Week')
        {
            this.calendarEndDate = new Date(startDate);
            this.calendarEndDate.setTime(this.calendarStartDate.getTime() + 518400000);
            this.renderDateHeader();
        }
        else
        {           
            var lastDate = new Date((new Date(this.calendarStartDate.getFullYear(), (this.calendarStartDate.getMonth()+1),1))-1).getDate();
            this.calendarEndDate = new Date();
            this.calendarEndDate.setFullYear(this.calendarStartDate.getFullYear(), this.calendarStartDate.getMonth(), this.MonthDays(this.calendarStartDate));
            this.renderMonthHeader();
        }
        this.renderEvents();   
        //this.setFirstLastDates()
       
    }
    
    this.setFirstLastDates = function()
    {
        $.getJSON('Ajax/HomepageCalendar.aspx', {action:"getFirstAndLast"}, 
        function (data) 
        {
            if(!data.Error)
            {
                $.each(data.Head, function (i, item){
                    $("#firstEvent").value = item.first;
                    $("#lastEvent").value = item.last;
                });
            }
        } );
    }
    
    this.renderDateHeader = function()
    {
        var HomepageCalendarContent = $("#HomepageCalendarContent").html("").get(0);
            
        var HomepageCalendarHeader = $("#HomepageCalendarHeader").get(0);
        
        HomepageCalendarHeader.setAttribute("style", "font-weight:bold");
        HomepageCalendarHeader.innerHTML = "Week of "+this.ConvertMonth(this.calendarStartDate.getMonth()) + " " + this.calendarStartDate.getDate() + ", " + this.calendarStartDate.getFullYear() + " to " + this.ConvertMonth(this.calendarEndDate.getMonth()) + " " + this.calendarEndDate.getDate() + ", " + this.calendarEndDate.getFullYear();
    }
    
    this.renderMonthHeader = function()
    {
        var HomepageCalendarContent = $("#HomepageCalendarContent").html("").get(0);
            
        var HomepageCalendarHeader = $("#HomepageCalendarHeader").get(0);
        
        HomepageCalendarHeader.setAttribute("style", "font-weight:bold");
        HomepageCalendarHeader.innerHTML = "Month of "+ this.ConvertToFullMonth(this.calendarStartDate.getMonth()) + " " + this.calendarStartDate.getFullYear();
    }
    
    this.renderEvents = function()
    {
        var sdate = (this.calendarStartDate.getMonth()+1) + "/"+this.calendarStartDate.getDate() + "/"+this.calendarStartDate.getFullYear();
        var edate = (this.calendarEndDate.getMonth()+1) + "/"+this.calendarEndDate.getDate() + "/"+this.calendarEndDate.getFullYear();
        var schoolID = this.SchoolsAndCentersID;
        
        $.getJSON('Ajax/HomepageCalendar.aspx', {action:"getEvents", startDate:sdate, endDate:edate, schoolsAndCentersID: schoolID}, 
        function (data) 
        {
            var HomepageCalendarContent = $("#HomepageCalendarContent").html("").get(0);
            
            if(data.Error)
            {
                $(HomepageCalendarContent).html("No events for this week");
            }
            else
            {
                $.each(data.Head, function (i, item){
                    var divTitle = document.createElement("div");
                    

                    if(schoolID != 1)
                    {
                        // bold owned items
                        if(schoolID == item.OwnerID)
                            divTitle.innerHTML = "<strong><a href=\"#\" title=\"\" onclick=\"showEvents(event, '"+item.CalendarEventsSingleID+"','','"+item.Tariq+"','transp','eventView'); return false;\">"+item.EventTitle+"</a> ("+item.DisplayName+")</strong>";
                        else
                            divTitle.innerHTML = "<strong><a href=\"#\" title=\"\" onclick=\"showEvents(event, '"+item.CalendarEventsSingleID+"','','"+item.Tariq+"','transp','eventView'); return false;\">"+item.EventTitle+"</a> ("+item.DisplayName+")</strong>";
                    }
                    else
                    {
                        // do not bold anything
                        divTitle.innerHTML = "<strong><a href=\"#\" title=\"\" onclick=\"showEvents(event, '"+item.CalendarEventsSingleID+"','','"+item.Tariq+"','transp','eventView'); return false;\">"+item.EventTitle+"</a> ("+item.DisplayName+")</strong>";
                    }                    
                        
                    HomepageCalendarContent.appendChild(divTitle);
                    var divDate = document.createElement("div");
                    divDate.innerHTML = item.DateDisplay;
                    HomepageCalendarContent.appendChild(divDate);
                    var bk = document.createElement("br");
                    HomepageCalendarContent.appendChild(bk);
                });
            }
            
            
        } );
        
        
    }
    
    this.MonthDays=function(startDate)
    {
	    var d=new Date(startDate.getFullYear(),startDate.getMonth(),32);
	    return 32- d.getDate();
    }
    
    this.ConvertMonth = function(monthIndex)
    {
        var month=new Array(12);
        month[0]="Jan";
        month[1]="Feb";
        month[2]="Mar";
        month[3]="Apr";
        month[4]="May";
        month[5]="Jun";
        month[6]="Jul";
        month[7]="Aug";
        month[8]="Sep";
        month[9]="Oct";
        month[10]="Nov";
        month[11]="Dec";
        return month[monthIndex]; 
    }
    
    this.ConvertToFullMonth = function(monthIndex)
    {
        var month=new Array(12);
        month[0]="January";
        month[1]="February";
        month[2]="March";
        month[3]="April";
        month[4]="May";
        month[5]="June";
        month[6]="July";
        month[7]="August";
        month[8]="September";
        month[9]="October";
        month[10]="November";
        month[11]="December";
        return month[monthIndex]; 
    }
    
    this.Previous = function ()
    {        
        if(this.DisplayBy == "Week")
        {
            this.calendarStartDate.setTime(this.calendarStartDate.getTime() - 604800000);
            this.calendarEndDate.setTime(this.calendarStartDate.getTime() + 518400000);
            this.renderDateHeader();
             
        }
        else
        {
            this.calendarStartDate = new Date(this.calendarStartDate.getFullYear(), this.calendarStartDate.getMonth() -1, 1);
            this.calendarEndDate = new Date();
            this.calendarEndDate.setFullYear(this.calendarStartDate.getFullYear(), this.calendarStartDate.getMonth(), this.MonthDays(this.calendarStartDate));
            this.renderMonthHeader();
        }
        this.renderEvents(); 
    }
    
    this.Next = function()
    {
        if(this.DisplayBy == "Week")
        {
            this.calendarStartDate.setTime(this.calendarStartDate.getTime() + 604800000);
            this.calendarEndDate.setTime(this.calendarStartDate.getTime() + 518400000);
            this.renderDateHeader();
            
        }
        else
        {
            this.calendarStartDate = new Date(this.calendarStartDate.getFullYear(), this.calendarStartDate.getMonth() +1, 1);
            this.calendarEndDate = new Date();
            this.calendarEndDate.setFullYear(this.calendarStartDate.getFullYear(), this.calendarStartDate.getMonth(), this.MonthDays(this.calendarStartDate));
            this.renderMonthHeader();
        }
        
        this.renderEvents();
    }    
    
    this.clearSearch = function()
    {
        this.initialize(this.StartDate, this.DisplayBy, this.SchoolsAndCentersID);
        var HomepageCalendarPreviousLink = $("#HomepageCalendarPreviousLink").get(0);
        HomepageCalendarPreviousLink.href = "javascript:HomepageSearch.Previous()";
        var HomepageCalendarNextLink = $("#HomepageCalendarNextLink").get(0);
        HomepageCalendarNextLink.href = "javascript:HomepageSearch.Next()";
    }
    
    this.Search = function()
    {
        var schoolID = this.SchoolsAndCentersID;
    
        var query = $("#HomepageCalendarSearchBox").val();
        $.getJSON('Ajax/HomepageCalendar.aspx', {action:"Search", query:query, schoolsAndCentersID: schoolID}, 
        function (data) 
        {
            var HomepageCalendarContent = $("#HomepageCalendarContent").html("").get(0);
            
            var HomepageCalendarHeader = $("#HomepageCalendarHeader").get(0);
            HomepageCalendarHeader.innerHTML = "Search Results  [<a href='javascript:HomepageSearch.clearSearch()'>clear</a>]";
            
            if(data.Error)
            {
                $(HomepageCalendarContent).html("No results");
            }
            else
            {
                $.each(data.Head, function (i, item){
                    var divTitle = document.createElement("div");
                    if(schoolID != 1)
                    {
                        // bold owned items
                        if(schoolID == item.OwnerID)
                            divTitle.innerHTML = "<strong><a href=\"#\" title=\"\" onclick=\"showEvents(event, '"+item.CalendarEventsSingleID+"','','"+item.Tariq+"','transp','eventView'); return false;\">"+item.EventTitle+"</a> ("+item.DisplayName+")</strong>";
                        else
                            divTitle.innerHTML = "<strong><a href=\"#\" title=\"\" onclick=\"showEvents(event, '"+item.CalendarEventsSingleID+"','','"+item.Tariq+"','transp','eventView'); return false;\">"+item.EventTitle+"</a> ("+item.DisplayName+")</strong>";
                    }
                    else
                    {
                        // do not bold anything
                        divTitle.innerHTML = "<strong><a href=\"#\" title=\"\" onclick=\"showEvents(event, '"+item.CalendarEventsSingleID+"','','"+item.Tariq+"','transp','eventView'); return false;\">"+item.EventTitle+"</a> ("+item.DisplayName+")</strong>";
                    }  
                                                           
                    HomepageCalendarContent.appendChild(divTitle);
                    var divDate = document.createElement("div");
                    divDate.innerHTML = item.DateDisplay;
                    HomepageCalendarContent.appendChild(divDate);
                    var bk = document.createElement("br");
                    HomepageCalendarContent.appendChild(bk);
                });
                
                var script = document.createElement("p");
                script.innerHTML = "<script>document.getElementById('eventView').onclick=eventViewClicked; document.onclick = documentClickHide;</script>";
                HomepageCalendarContent.appendChild(script);
            }
        } );
        
        var HomepageCalendarPreviousLink = $("#HomepageCalendarPreviousLink").get(0);
        HomepageCalendarPreviousLink.href = "javascript:HomepageSearch.clearSearch()";
        var HomepageCalendarNextLink = $("#HomepageCalendarNextLink").get(0);
        HomepageCalendarNextLink.href = "javascript:HomepageSearch.clearSearch()";
    }
    
    this.SearchKeyPress = function(e)
    {
        var code;
	    if (!e) var e = window.event;
	    if (e.keyCode) code = e.keyCode;
	    else if (e.which) code = e.which;
	    if(code == 13)
	    {
	        this.Search();
	        return false;
	    }
	    return true;
    }
}

var HomepageSearch = new HomepageSearch;