window.station = "";
cookieSave = document.cookie;
window.cookieValue = cookieSave;
stationFind = window.cookieValue.indexOf("station=");
if(stationFind > -1)
{
    semiFind = window.cookieValue.indexOf(";", stationFind);
    if (semiFind == -1)
        {
            semiFind = window.cookieValue.length;
        }
    window.station = window.cookieValue.substring(stationFind + 8, semiFind);
}

if(window.station=="")
{
            //do nothing
}
else
{
    $('head').append('<script src="/stations/js/global/' + (window.station).toLowerCase() + '.js" type="text/javascript"></script>');
}
