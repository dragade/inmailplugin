
var __adroll=window.__adroll||{exp:50000,eexp:720,pv:Math.random()*100000000000,__adc:"__ar_v4",_nad:0,_lce:null,_broken:false,_url:2000,_r:{},_cdn:"http://a.adroll.com",_scdn:"https://s.adroll.com",_kwl:200,_logs:[],log:function(a){this._logs.push(a)},read_log:function(a){a=typeof a=="undefined"?"<br>\n":"\n";return this._logs.join(a)},cookieEnabled:function(a){if(adroll_ext_network=="r"){return false}if(adroll_optout){return false}if(this._broken){return false}if(this._nad>=2||a){return this._lce}this.set("_te_","1");var d=this.get("_te_");if(d=="1"){this.del("_te_");if(this._nad>0){var b=this.get(this.__adc);if(!b){this._lce=false;return false}}this._lce=true;return true}this._lce=false;return false},parseUri:function(f){var a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(f),e={},d=14,c=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],b="queryKey",g=/(?:^|&)([^&=]*)=?([^&]*)/g;while(d--){e[c[d]]=a[d]||""}e[b]={};e[c[12]].replace(g,function(i,h,j){if(h){e[b][h]=j}});return e},get_keywords:function(){try{if(this._nad>0){return""}var b=document.referrer||"";if(!b){return""}var a=this.parseUri(b);if(a.host.indexOf("google.com")!=-1){if(a.queryKey.q.length>=this._kwl){return""}return a.queryKey.q}else{return""}}catch(c){return""}},get:function(f){if(document.cookie==null){this._broken=true;return null}var d,c,a,e,b;d=document.cookie.indexOf(f+"=");if(d<0){b=null}else{c=document.cookie.indexOf(f+"=")+f.length+1;a=document.cookie.indexOf(";",c);if(a==-1){a=document.cookie.length}e=document.cookie.substring(c,a);b=(e=="")?null:unescape(e)}return b},set:function(h,e,d){var b,f,a,c,g;if(!d||typeof d!="number"){b=""}else{var f=new Date();f.setTime(f.getTime()+(d*60*60*1000));a=f.toGMTString();b="; expires="+a}c="; path=/";g="; domain="+window.location.hostname;e=escape(e);document.cookie=h+"="+e+b+c+g},del:function(a){this.set(a,"",-8760)},generate_link:function(a,d,b,e){if(!adroll_render_link){return""}var g='<div class="adroll-link" style="width: ';g=g+e+'px; text-align: center; margin: auto;">';var f='<a target="_blank" href="';var c=Math.round(Math.random()*8);f=f+d+"?utm_source=publisher&utm_medium=ads&utm_campaign=wrapper&lt="+c+'" style="font-size: 10px; font-family: sans-serif;">';g=g+f;if(c==1){g=g+"Roll with "+b}else{if(c==2){g=g+"Roll with "+b+"-aholics"}else{if(c==3){g=g+"Roll with "+b+" junkies"}else{if(c==4){g=g+"Reach "+b+"-aholics"}else{if(c==5){g=g+"Reach "+b+" junkies"}else{if(c==6){g=g+"Contact "+b+"-aholics"}else{if(c==7){g=g+"Contact "+b+" junkies"}else{g=g+"Get props on "+b}}}}}}}g=g+"</a></div>";return g},get_base_url:function(h,e,i,d,c,f){var a=h+"/"+e+"/"+i+(d?"/"+d:"")+(c?"/"+c:"");var b="?no-cookies=1&pv=";var g="";if(!this.cookieEnabled(false)){a+=b+this.pv}else{g=escape(this.get_eids());a+="?pv="+this.pv+"&cookie="+g}if(f){a+="&"+f.join("&")}if(a.length>this._url){this.del(this.__adc);if((a.length-g.length)>this._url){return"#"}this.log("Url was too big, shrinking it");return this.get_url(e,i,d,c,f)}this.log("Generated url: "+a);return a},get_url:function(b,c,e,a,d){if(e==null){return this.get_base_url("http://d.adroll.com/r",b,c,e,a,d)}else{return this.get_base_url("http://d.adroll.com/c",b,c,e,a,d)}},get_eids:function(){if(adroll_ext_network=="r"){return""}if(adroll_optout){return""}try{var c=this.get(this.__adc);var d=c?c.split("|"):"";var g=[];for(var b=d.length-1;b>=0;b--){if(d[b]){var a=d[b].split(":");g.push([a[0],a[2]].join(":"))}}return g.join("|")}catch(f){this.del(this.__adc);return""}},get_date:function(b){var f=new Date();if(typeof b!="undefined"){f.setTime(f.getTime()+(b*60*60*1000))}var e=""+f.getUTCFullYear();var a=f.getUTCMonth();a=a>=10?a:"0"+a;var c=f.getUTCDate();c=c>=10?c:"0"+c;return[e,a,c].join("")},check_cookie:function(d,a){if(adroll_ext_network=="r"){return""}if(adroll_optout){return""}var e=d.split("|");for(var c=e.length-1;c>=0;c--){if(e[c]){var b=e[c].split(":");if(a==b[0]){b[2]=""+(parseInt(b[2])+1);e[c]=b.join(":")}}}return e.join("|")},handle:function(b){var d=this.get(this.__adc)||"";var a=d.indexOf(b);if(a!=-1){this.set(this.__adc,this.check_cookie(d,b),this.exp)}else{var c=[d,[b,this.get_date(this.eexp),"1"].join(":")].join("|");this.set(this.__adc,c,this.exp)}},expire_old:function(){if(adroll_ext_network=="r"){return}if(adroll_optout){return}var a=this.get_date();var e=this.get(this.__adc);e=e?e.split("|"):[""];var d=[];for(var c=e.length-1;c>=0;c--){if(e[c]){var b=e[c].split(":");if(b[1]>a){d.push(e[c])}}}this.set(this.__adc,d.join("|"),this.exp)},render_ad_code:function(h,l,d,g){g=typeof g=="undefined"?null:g;if(typeof this._r[l]!="undefined"){if(!g){return}}try{var b="ar-"+Math.random();b=b.replace(".","-");document.write('<span id="'+b+'" style="display: none"></span>');var f=document.getElementById(b);if(f==null){var k=[0,0]}else{var k=this.findPosXY(f.parentNode);f.parentNode.removeChild(f)}}catch(i){var k=[0,0]}var j=this.get_keywords();if(d){this.log("Rendering test ad "+d+" in space "+l);var a=this.get_url(h,l,null,"ad",["width="+adroll_width,"height="+adroll_height,"x="+k[0],"y="+k[1],"keyw="+j,"test_ad="+d])}else{if(g){this.log("Rendering campaign "+g);var c=this.format_macros(false,false,false,false);var a=this.get_url(h,l,g,null,["width="+adroll_width,"height="+adroll_height,"x="+k[0],"y="+k[1],"keyw="+j,c])}else{this.log("Rendering ad space "+l);var a=this.get_url(h,l,null,"ad",["width="+adroll_width,"height="+adroll_height,"x="+k[0],"y="+k[1],"keyw="+j])}}this.expire_old();document.write('<script src="'+a+'"><\/script>');this._nad=this._nad+1;this._r[l]=1},format_macros:function(j,c,f,d){adroll_cpm_macro=typeof adroll_cpm_macro=="undefined"?null:adroll_cpm_macro;adroll_url_macro=typeof adroll_url_macro=="undefined"?null:adroll_url_macro;adroll_c_macro=typeof adroll_c_macro=="undefined"?null:adroll_c_macro;adroll_ext_network=typeof adroll_ext_network=="undefined"?null:adroll_ext_network;var d=typeof d=="undefined"?false:d;var a=f?escape:function(m){return m};var g={r:/^\$\{.*\}$/i,g:/^%%.*%%$/i,b:/^\[.*\]$/i,x:/^\$\{.*\}$/i};var e=g[adroll_ext_network];e=typeof e=="undefined"?/CANNOT_MATCH_THIS/:e;var i=c?null:adroll_cpm_macro;var b=adroll_url_macro;var k=c?adroll_c_macro:null;var l=[];if(d){l.push(["desturl",""])}if(i&&!e.test(i)){l.push(["cpm",adroll_ext_network+")))"+i])}if(b&&!e.test(b)){var h=this.parseUri(unescape(b));l.push(["site_url",a("http://"+h.host)]);if(c){l.push(["adroll_width",a(adroll_width)]);l.push(["adroll_height",a(adroll_height)])}}if(k&&!e.test(k)&&k.indexOf("http")===0){if(adroll_ext_network=="g"){var a=f?function(m){return m}:unescape}l.push(["clickurl",a(k)])}this.log("Macros found "+this.serialize(l));return j?this.buildurl(j,l):this.serialize(l)},view:function(a){var c="http://d.adroll.com/view/"+a;var b=new Image();b.src=c;b.setAttribute("width","1");b.setAttribute("height","1");b.setAttribute("border","0");document.documentElement.firstChild.appendChild(b)},serialize:function(a){if(a.length){var c=[];for(var b=a.length-1;b>=0;b--){c.push(a[b].join("="))}return c.join("&")}return""},buildurl:function(d,c){var b=this.serialize(c);if(!b){return d}if(d.indexOf("?")==d.length-1){return d+b}else{if(d.indexOf("?")!=-1){if(d[d.length-1]=="&"){return d+b}else{return d+"&"+b}}else{return d+"?"+b}}},set_cookie:function(a,b,d,c){if(adroll_ext_network=="r"){return}if(adroll_optout){return}this.handle(d);this.handle(c);this.handle(a);this.handle(b)},reset:function(){adroll_c_id=null;adroll_url_macro="";adroll_c_macro="";adroll_cpm_macro="";adroll_ext_network=null},findPosX:function(a){var b=0;if(a.offsetParent){while(a.offsetParent){b+=a.offsetLeft;a=a.offsetParent}}else{if(a.x){b+=a.x}}return b},findPosY:function(a){var b=0;if(a.offsetParent){while(a.offsetParent){b+=a.offsetTop;a=a.offsetParent}}else{if(a.y){b+=a.y}}return b},findPosXY:function(a){return[this.findPosX(a),this.findPosY(a)]},addLoadEvent:function(a){if(typeof __adroll_loaded!="undefined"&&__adroll_loaded){return a()}if(typeof _adroll_ie!="undefined"&&_adroll_ie){return a()}if(/msie/i.test(navigator.userAgent)){return a()}if(/WebKit/i.test(navigator.userAgent)){load_timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(load_timer)}a()},10);return}var b=window.onload;window.onload=function(){a();if(b){b()}}},render_pixel_code:function(a,b){if(a=="CHOL76QN5FE3NCWR2VP7EU"){this.render_z_pixel_code(a,b);return}this.expire_old();var c=(("https:"==document.location.protocol)?"https://d.adroll.com/pixel":"http://d.adroll.com/pixel");var d=document.createElement("script");d.setAttribute("async","true");d.type="text/javascript";this.addLoadEvent(function(){var g=[];try{if(typeof adroll_segments!="undefined"){g.push("name="+escape(adroll_segments.toLowerCase()))}}catch(h){}try{if(typeof adroll_conversion_value!="undefined"){if(!isNaN(parseInt(adroll_conversion_value))){g.push("conv_value="+adroll_conversion_value)}}else{if(typeof adroll_conversion_value_in_dollars!="undefined"){if(!isNaN(parseFloat(adroll_conversion_value_in_dollars))){g.push("conv_value="+parseInt(adroll_conversion_value_in_dollars*100))}}}}catch(h){}var f=__adroll.get_base_url(c,a,b,null,"",g);d.src=f;document.documentElement.firstChild.appendChild(d)})},set_pixel_cookie:function(a,b,c){if(adroll_optout){return}this.handle(a);this.handle(b);this.handle(c)},render_z_pixel_code:function(a,e){if(typeof adroll_segments=="undefined"){return}var b={FBgame1:"label=3jvGCJrLzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame2:"label=scioCJLMzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame3:"label=kp6-CIrNzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame4:"label=4EsLCILOzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame5:"label=qRW2CPrOzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame6:"label=al8HCPLPzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame7:"label=SCnwCOrQzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame8:"label=v4wSCOLRzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame9:"label=Ok3VCNrSzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]",FBgame10:"label=i3X0CNLTzQEQ4OCx7AM&amp;guid=ON&amp;script=0&amp;ord=[ord]"};var f=Math.random()*10000000000000000;var c=(("https:"==document.location.protocol)?"https":"http");var d=new Image(1,1);d.alt="";var g="[protocol]://www.googleadservices.com/pagead/conversion/1032613984/?"+b[adroll_segments].replace(/\[ord\]/gi,f);g=g.replace(/\[protocol\]/gi,c);d.src=g;document.documentElement.firstChild.appendChild(d)}};
adroll_optout = false;
adroll_ext_network = null;
__adroll.render_pixel_code(adroll_adv_id, adroll_pix_id);
