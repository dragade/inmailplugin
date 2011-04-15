/* 

  ================================================
  PVII Horizontal Scroll Magic scripts
  Copyright (c) 2007 Project Seven Development
  www.projectseven.com
  Version: script build: 1-13
  ================================================
  
 */

var p7HSMi=false,p7HSMctl=[],p7hsmobj,p7hsmofX,p7hsmuA=navigator.userAgent.toLowerCase();
function P7_setHSM(){
	var h;
	if(!document.getElementById){
		return;
	}
	h='\n<st'+'yle type="text/css">\n';
	h+='.p7HSM_vp {overflow:hidden;}\n';
	h+='.p7HSMdragchannel, .p7HSMtoolbar{display: block !important;}\n';
	h+='</s'+'tyle>';
	document.write(h);
}
P7_setHSM();
function P7_HSMrsz(){
	var i,b,tB;
	for(i=0;i<p7HSMctl.length;i++){
		tB=document.getElementById(p7HSMctl[i][0]);
		P7_HSMsetDrag(tB);
	}
}
function P7_HSMaddLoad(){
	if(!document.getElementById){
		return;
	}
	if(window.addEventListener){
		window.addEventListener("load",P7_initHSM,false);
		window.addEventListener("resize",P7_HSMrsz,false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",P7_initHSM);
		window.attachEvent("onresize",P7_HSMrsz);
	}
	else if(typeof window.onload=='function'){
		var p7vloadit=onload;
		window.onload=function(){
			p7vloadit();
			P7_initHSM();
		};
		p7vloadit=onresize;
		window.onresize=function(){
			P7_HSMrsz();
		};
	}
	else{
		window.onload=P7_initHSM;
	}
	p7HSMi=true;
}
function P7_opHSM(){
	var h='',hh,b,cn,sD,d,tB,cTD,mD;
	if(!document.getElementById){
		return;
	}
	p7HSMctl[p7HSMctl.length]=arguments;
	mD=document.getElementById(arguments[0].replace("b",''));
	mD.innerHTML=' <table width="100%" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed;position:relative;"><tr><td>'+mD.innerHTML+'</td></tr></table>';
	tB=document.getElementById(arguments[0]);
	d=tB.id.replace('b','d')+'_c'+arguments[8];
	sD=document.getElementById(d);
	if(sD){
		sD.innerHTML='<table border="0" cellspacing="0" cellpadding="0"><tr><td>'+sD.innerHTML+'</td></tr></table>';
		if(arguments[15]==1){
			sD=document.getElementById(d);
			cTD=sD.getElementsByTagName("TD")[0];
			if(window.opera){
				cTD.setAttribute("nowrap","nowrap");
			}
			else if(!P7_HSMgpv(cTD,"whiteSpace","white-space")){
				cTD.noWrap=true;
			}
			else{
				cTD.style.whiteSpace="nowrap";
			}
		}
	}
	if(!p7HSMi){
		P7_HSMaddLoad();
	}
}
function P7_initHSM(){
	var i,j,tB,d,sD,t,oh,dB,pp,dD,h,sf,w,nw,mD;
	for(i=0;i<p7HSMctl.length;i++){
		tB=document.getElementById(p7HSMctl[i][0]);
		if(tB){
			tB.p7opt=p7HSMctl[i];
			tB.p7acdv='';
			tB.p7dragbar=false;
			tB.p7resume='no';
			tB.p7status='none';
			tB.p7box=tB.id;
			d=tB.id.replace('b','d')+'_c'+tB.p7opt[8];
			sD=document.getElementById(d);
			if(sD){
				t=tB.p7opt[9];
				sD.style.left=t+'px';
				tB.p7acdv=d;
				if(t<tB.offsetLeft*-1){
					tB.p7dir='left';
				}
				else{
					tB.p7dir='right';
				}
				if(tB.p7opt[7]==1){
					tB.onmouseover=function(){
						if(this.p7status=='moving'){
							this.p7resume='yes';
						}
						P7_HSMpause(this,1);
					};
					tB.onmouseout=function(){
						if(this.p7resume=='yes'){
							P7_HSMplay(this,1);
						}
					};
				}
				dD=P7_HSMgbc(tB.id,"a",true);
				if(dD){
					dD.p7status='show';
					dD.onclick=function(){
						return P7_HSMshowall(this);
					};
				}
				d=tB.id.replace("b","dc");
				dB=document.getElementById(d);
				dD=P7_HSMgbc(tB.id,"db",true);
				dD=P7_HSMgbc(tB.id,"dc",true);
				if(dD){
					dDa=dD.getElementsByTagName("A")[0];
					tB.p7dragbar=d;
					if(tB.p7opt[14]===1){
						dDa.removeAttribute("href");
					}
					else{
						dDa.onmousedown=P7_HSMeng;
						dDa.onkeydown=P7_HSMkey;
						dDa.onkeyup=P7_HSMkeyup;
						dD.parentNode.onmousedown=P7_HSMeng;
					}
					P7_HSMsetDrag(tB);
				}
				dD=P7_HSMgbc(tB.id,"du",true);
				if(dD){
					dD.onmousedown=function(){
						P7_HSMmoveLeft(this);
					};
					dD.onmouseup=function(){
						P7_HSMpause(this);
					};
					dD.onkeydown=P7_HSMkey;
					dD.onkeyup=P7_HSMkeyup;
				}
				dD=P7_HSMgbc(tB.id,"dd",true);
				if(dD){
					dD.onmousedown=function(){
						P7_HSMmoveRight(this);
					};
					dD.onmouseup=function(){
						P7_HSMpause(this);
					};
					dD.onkeydown=P7_HSMkey;
					dD.onkeyup=P7_HSMkeyup;
				}
				dD=P7_HSMgbc(tB.id,"bu",true);
				if(dD){
					dD.onmousedown=function(){
						P7_HSMmoveLeft(this);
					};
					dD.onkeydown=P7_HSMkey;
					if(tB.p7opt[3]<3){
						dD.onmouseup=function(){
							P7_HSMpause(this);
						};
						dD.onkeyup=P7_HSMkeyup;
					}
				}
				dD=P7_HSMgbc(tB.id,"bd",true);
				if(dD){
					dD.onmousedown=function(){
						P7_HSMmoveRight(this);
					};
					dD.onkeydown=P7_HSMkey;
					if(tB.p7opt[3]<3){
						dD.onmouseup=function(){
							P7_HSMpause(this);
						};
						dD.onkeyup=P7_HSMkeyup;
					}
				}
				dD=P7_HSMgbc(tB.id,"bpp",true);
				if(dD){
					dD.onmousedown=function(){
						P7_HSMpp(this);
					};
					dD.onkeydown=P7_HSMppkey;
				}
				tB.accum=0;
				tB.autostarting=false;
				tB.p7hsmMode='manual';
				if(tB.p7opt[10]==1){
					tB.p7hsmMode='auto';
					tB.p7status='moving';
					tB.p7HSMtimer=setTimeout("P7_HSMplay('"+tB.id+"')",tB.p7opt[11]);
				}
			}
		}
	}
	P7_HSMaddEvts();
}
function P7_HSMgbc(bx,rp,fl){
	var d,ret;
	d=bx.replace("b",rp);
	ret=document.getElementById(d);
	if(ret&&fl){
		ret.p7box=bx;
	}
	return ret;
}
function P7_HSMaddEvts(){
	if(window.addEventListener){
		document.addEventListener("mousemove",P7_HSMdrg,false);
		document.addEventListener("mouseup",P7_HSMrel,false);
		document.addEventListener("DOMMouseScroll",P7_HSMwheel,false);
		if(window.opera || p7hsmuA.indexOf("applewebkit")>-1){
			document.addEventListener("mousewheel",P7_HSMwheel,false);
		}
	}
	else if(window.attachEvent){
		document.attachEvent("onmousemove",P7_HSMdrg);
		document.attachEvent("onmouseup",P7_HSMrel);
		document.attachEvent("onmousewheel",P7_HSMwheel);
	}
	else{
		document.onmousemove=P7_HSMdrg;
		document.onmouseup=P7_HSMrel;
	}
}
function P7_HSMshowall(a){
	var i,b,tB,tD,tC,tT,mv,dV,fl,cTD;
	b=a.p7box;
	tB=document.getElementById(b);
	tD=document.getElementById(tB.p7acdv);
	tC=P7_HSMgbc(tB.id,"cn");
	tT=P7_HSMgbc(tB.id,"tb");
	mv=tB.p7status;
	cTD=tD.getElementsByTagName("TD")[0];
	if(a.p7status=="show"){
		P7_HSMpause(b);
		tB.p7restore=mv;
		tB.p7restorepx=tD.style.left;
		a.p7status="restore";
		a.innerHTML="Restore Scroller";
		a.setAttribute("title","Restore Scroller");
		tD.style.left="0px";
		if(tB.p7dragbar){
			P7_HSMsetDrag(tB);
		}
		if(tB.p7opt[15]==1){
			if(window.opera){
				cTD.removeAttribute("nowrap");
			}
			else if(!P7_HSMgpv(cTD,"whiteSpace","white-space")){
				cTD.noWrap=false;
			}
			else{
				cTD.style.whiteSpace="normal";
			}
		}
		else{
			dV=tD.getElementsByTagName("DIV");
			for(i=0;i<dV.length;i++){
				fl=P7_HSMgpv(dV[i],'styleFloat','float');
				if(fl&&fl!="none"){
					dV[i].p7restoreFL=fl;
					if(p7hsmuA.indexOf('msie')>-1&&p7hsmuA.indexOf('windows')>-1){
						dV[i].style.styleFloat = 'none';
					}
					else{
						dV[i].style.cssFloat = 'none';
					}
				}
			}
		}
		if(tC){
			tC.style.visibility="hidden";
			tC.style.height="0";
		}
		if(tT){
			tT.style.visibility="hidden";
			tT.style.height="0";
		}
	}
	else{
		a.p7status="show";
		a.innerHTML="Show All";
		a.setAttribute("title","Show All Scroller Content");
		if(tB.p7opt[15]==1){
			if(window.opera){
				cTD.setAttribute("nowrap","nowrap");
			}
			else if(!P7_HSMgpv(cTD,"whiteSpace","white-space")){
				cTD.noWrap=true;
			}
			else{
				cTD.style.whiteSpace="nowrap";
			}
		}
		else{
			dV=tD.getElementsByTagName("DIV");
			for(i=0;i<dV.length;i++){
				if(dV[i].p7restoreFL){
					if(p7hsmuA.indexOf('msie')>-1&&p7hsmuA.indexOf('windows')>-1){
						dV[i].style.styleFloat=dV[i].p7restoreFL;
					}
					else{
						dV[i].style.cssFloat=dV[i].p7restoreFL;
					}
				}
			}
		}
		if(tB.p7restorepx){
			tD.style.left=tB.p7restorepx;
		}
		if(tC){
			tC.style.visibility="visible";
			tC.style.height="auto";
		}
		if(tT){
			tT.style.visibility="visible";
			tT.style.height="auto";
		}
		if(tB.p7dragbar){
			P7_HSMsetDrag(tB);
		}
		if(tB.p7restore=='moving'){
			P7_HSMplay(tB);
		}
	}
	return false;
}
function P7_HSMplay(b,ov){
	var tB,tS,t,ct,bh,sh,dy;
	if(typeof(b)=='object'){
		b=b.p7box;
	}
	tB=document.getElementById(b);
	tB.p7hsmMode='auto';
	P7_HSMpause(b,ov);
	tS=document.getElementById(tB.p7acdv);
	bh=tB.offsetWidth;
	sh=tS.firstChild.offsetWidth;
	t=bh-sh;
	dy=tB.p7opt[2];
	if(t>=0){
		return;
	}
	ct=parseInt(tS.style.left,10);
	if(ct==t){
		if(tB.p7opt[3]===0 || tB.p7opt[3]==3){
			ct=0;
			P7_HSMmoveTo(tB.p7box,ct);
			dy=(tB.p7opt[3]==3)?tB.p7opt[13]:1000;
		}
	}
	t=(tB.p7dir=='right')?t:0;
	if(tB.p7opt[3]==2){
		t=t-bh;
		if(ct<t){
			ct=bh;
		}
		else if(ct>bh){
			ct=bh;
		}
		tS.style.left=ct+"px";
		tB.p7dir='right';
	}
	if(tB.p7opt[3]>2){
		var m=true;
		var x=tB.p7opt[12];
		while (m){
			if(ct>x){
				m=false;
				if(tB.p7dir=='right'){
					tB.accum=(x+tB.p7opt[12])-ct;
				}
				else{
					tB.accum=ct - x;
				}
			}
			if(x<=(tB.offsetWidth-tS.firstChild.offsetWidth)){
				m=false;
			}
			x-=tB.p7opt[12];
		}
	}
	P7_HSMspp(b,'play');
	if(tB.p7HSMtimer){
		clearTimeout(tB.p7HSMtimer);
	}
	tB.p7HSMtimer=setTimeout("P7_HSMscroll('"+tB.id+"',"+ct+","+t+","+false+")",dy);
}
function P7_HSMpp(b){
	var a,cl;
	if(typeof(b)=='object'){
		b=b.p7box;
	}
	a=P7_HSMgbc(b,"bpp");
	cl=a.className;
	if(a.className=='pause'){
		a.className='play';
		P7_HSMpause(b);
	}
	else{
		a.className='pause';
		P7_HSMplay(b);
	}
}
function P7_HSMspp(b,m){
	var a=P7_HSMgbc(b,"bpp");
	if(a&&a.className&&a.className==m){
		a.className=(m=='play')?'pause':'play';
	}
}
function P7_HSMpause(b,ov){
	if(typeof(b)=='object'){
		b=b.p7box;
	}
	var dB=document.getElementById(b);
	if(dB.p7HSMtimer){
		clearTimeout(dB.p7HSMtimer);
		dB.p7status='stopped';
	}
	if(ov!=1){
		dB.p7resume='no';
	}
	P7_HSMspp(b,'pause');
}
function P7_HSMctrl(op,b,y){
	if(op=='pause'){
		P7_HSMpause(b);
	}
	else if(op=='play'){
		P7_HSMplay(b);
	}
	else if(op=='scrollLeft'){
		P7_HSMmoveLeft(b);
	}
	else if(op=='scrollRight'){
		P7_HSMmoveRight(b);
	}
	else if(op=='panelLeft'){
		P7_HSMmoveBy(b,'left');
	}
	else if(op=='panelRight'){
		P7_HSMmoveBy(b,'right');
	}
	else if(y&&op=='moveBy'){
		P7_HSMmoveBy(b,y);
	}
	else if(y&&op=='goTo'){
		P7_HSMmoveTo(b,y);
	}
	else if(op=='goToElement'){
		P7_HSMmovetoId(b);
	}
}
function P7_HSMmovetoId(d){
	var tB,tS,ct,tD,pp,tt,y=0,m=false,bx;
	pp=document.getElementById(d);
	while(pp){
		y+=pp.offsetLeft;
		if(pp.className&&pp.className=='p7HSM_scrolling'){
			m=true;
			break;
		}
		pp=pp.offsetParent;
	}
	if(m){
		tB=pp.parentNode;
		tS=document.getElementById(tB.p7acdv);
		ct=parseInt(tS.style.left,10);
		tt=ct-y;
		P7_HSMmoveTo(tB.id,tt);
	}
}
function P7_HSMwheel(evt){
	var g,m=false,r=true,delta=0,s,tS;
	evt=(evt)?evt:event;
	g=(evt.target)?evt.target:evt.srcElement;
	while(g){
		if(g.id&&g.id.indexOf("p7HSMb_")>-1){
			m=true;
			break;
		}
		g=g.parentNode;
	}
	if(m){
		tS=document.getElementById(g.p7acdv);
		if(tS.firstChild.offsetWidth>g.offsetWidth){
			r=false;
			if(evt.wheelDelta){
				delta=evt.wheelDelta/120;
				if(window.opera&&parseFloat(navigator.appVersion)<9.20){
					delta=delta*-1;
				}
			}
			else if(evt.detail){
				delta= -evt.detail/3;
			}
			s=delta*16;
			P7_HSMmoveBy(g.id,s);
			if(evt.preventDefault){
				evt.preventDefault();
			}
		}
	}
	return r;
}
function P7_HSMmoveBy(b,y){
	var tS,t,tB,rr;
	tB=document.getElementById(b);
	if(tB.p7status!="stopped"){
		P7_HSMpause(b);
	}
	tS=document.getElementById(tB.p7acdv);
	rr=tB.offsetWidth-tS.firstChild.offsetWidth;
	if(rr>=0){
		return;
	}
	if(y=='left'){
		y=tB.offsetWidth;
	}
	if(y=='right'){
		y=tB.offsetWidth*-1;
	}
	if(rr<0){
		t=parseInt(tS.style.left,10);
		t+=y;
		t=(t<=rr)?rr:t;
		t=(t>=0)?0:t;
		tS.style.left=t+"px";
		if(tB.p7dragbar){
			P7_HSMsetDrag(tB);
		}
	}
}
function P7_HSMmoveTo(b,y){
	var tB,tS,rr,t;
	P7_HSMpause(b);
	tB=document.getElementById(b);
	tS=document.getElementById(tB.p7acdv);
	rr=tB.offsetWidth-tS.firstChild.offsetWidth;
	if(rr>=0){
		return;
	}
	if(y=='start'){
		y=0;
	}
	else if(y=='end'){
		y=rr;
	}
	if(rr<0){
		t=parseInt(tS.style.left,10);
		y=(y<=rr)?rr:y;
		y=(y>=0)?0:y;
		tS.style.left=y+"px";
		if(tB.p7dragbar){
			P7_HSMsetDrag(tB);
		}
	}
}
function P7_HSMmoveLeft(b){
	var tS,t,tB,fl=1,a;
	if(typeof(b)=='object'){
		a=b;
		b=b.p7box;
	}
	P7_HSMpause(b);
	tB=document.getElementById(b);
	tS=document.getElementById(tB.p7acdv);
	if(tS.firstChild.offsetWidth<=tB.offsetWidth){
		return;
	}
	if(tB.p7opt[3]>2){
		if(a&&a.id&&a.id.indexOf("p7HSMbu_")>-1){
			fl=2;
		}
	}
	P7_HSMscroll(tB.id,parseInt(tS.style.left,10),0,fl);
}
function P7_HSMmoveRight(b){
	var tS,t,tB,fl=1,a;
	P7_HSMpause(b);
	if(typeof(b)=='object'){
		a=b;
		b=b.p7box;
	}
	tB=document.getElementById(b);
	tS=document.getElementById(tB.p7acdv);
	t=tB.offsetWidth-tS.firstChild.offsetWidth;
	if(t>=0){
		return;
	}
	if(tB.p7opt[3]>2){
		if(a&&a.id&&a.id.indexOf("p7HSMbd_")>-1){
			fl=2;
		}
	}
	P7_HSMscroll(tB.id,parseInt(tS.style.left,10),t,fl);
}
function P7_HSMscroll(b,ct,tt,dd){
	var fr,dy,dB,dD,nt,dr,r,m=true,op;
	if(!dd){
		dd=false;
	}
	dB=document.getElementById(b);
	dD=document.getElementById(dB.p7acdv);
	dB.p7status='moving';
	op=dB.p7opt[3];
	r=dB.offsetWidth-dD.firstChild.offsetWidth;
	if(r>=0){
		return;
	}
	if(!dd){
		fr=dB.p7opt[1];
		dy=dB.p7opt[2];
	}
	else{
		fr=dB.p7opt[4];
		dy=dB.p7opt[5];
	}
	if(tt!==0){
		if(op>2&&dd!==1){
			dB.accum+=fr;
			if(dB.accum>=dB.p7opt[12]){
				fr-=dB.accum-dB.p7opt[12];
				dB.accum=0;
				m=false;
			}
		}
		ct-=fr;
		if(ct<=tt){
			ct=tt;
			m=false;
		}
	}
	else{
		if(dd!=1&&op>2){
			dB.accum+=fr;
			if(dB.accum>=dB.p7opt[12]){
				fr-=dB.accum-dB.p7opt[12];
				dB.accum=0;
				m=false;
			}
		}
		ct+=fr;
		if(ct>=tt){
			ct=tt;
			m=false;
		}
	}
	dD.style.left=ct+"px";
	if(dB.p7dragbar){
		P7_HSMsetDrag(dB);
	}
	if(!m&&dd!==1){
		if(op>2){
			dB.accum=0;
			dy=dB.p7opt[13];
			if(dd!==2){
				if(ct!==0&&ct!=r){
					m=true;
				}
			}
			if(op==4 && (ct===0||ct==r)){
				op=1;
			}
		}
		if(op==1){
			tt=(ct===0)?r:0;
			dB.p7dir=(tt===0)?'left':'right';
			if(dd!==2){
				m=true;
			}
		}
		else if(op==2){
			ct=dB.offsetWidth;
			dB.p7dir='right';
			m=true;
		}
	}
	if(m){
		dB.p7HSMtimer=setTimeout("P7_HSMscroll('"+b+"',"+ct+","+tt+","+dd+")",dy);
	}
	else{
		dB.p7status='stopped';
		P7_HSMpause(dB.p7box);
	}
}
function P7_HSMkey(evt){
	var tg,m=true;
	evt=(evt)?evt:event;
	tg=(evt.target)?evt.target:evt.srcElement;
	if(tg&&tg.p7box){
		if(evt.keyCode==37){
			P7_HSMmoveLeft(tg.p7box);
			m=false;
		}
		else if(evt.keyCode==39){
			P7_HSMmoveRight(tg.p7box);
			m=false;
		}
		else if(evt.keyCode==34||evt.keyCode==40|| (evt.keyCode==32&&evt.shiftKey) ){
			P7_HSMmoveBy(tg.p7box,'left');
			m=false;
		}
		else if(evt.keyCode==33||evt.keyCode==38||(evt.keyCode==32)){
			P7_HSMmoveBy(tg.p7box,'right');
			m=false;
		}
		else if(evt.keyCode==36){
			P7_HSMmoveTo(tg.p7box,'start');
			m=false;
		}
		else if(evt.keyCode==35){
			P7_HSMmoveTo(tg.p7box,'end');
			m=false;
		}
		if(!m){
			if(evt.preventDefault){
				evt.preventDefault();
			}
		}
	}
	return m;
}
function P7_HSMkeyup(evt){
	var tg;
	evt=(evt)?evt:event;
	tg=(evt.target)?evt.target:evt.srcElement;
	if(tg&&tg.p7box){
		if(evt.keyCode!=9&&evt.keyCode!=16){
			P7_HSMpause(tg.p7box);
		}
	}
}
function P7_HSMppkey(evt){
	var tg;
	evt=(evt)?evt:event;
	tg=(evt.target)?evt.target:evt.srcElement;
	if(tg&&tg.p7box){
		if(evt.keyCode==13){
			P7_HSMpp(tg.p7box);
		}
	}
}
function P7_HSMeng(evt){
	var tg,x,g,pp,m=true,dr,dc,dL=0;
	evt=(evt)?evt:event;
	p7hsmobj=null;
	tg=(evt.target)?evt.target:evt.srcElement;
	g=tg.parentNode;
	if(evt.clientX){
		if(tg&&tg.id&&tg.id.indexOf('p7HSMcn_')>-1){
			g=document.getElementById(tg.id.replace("cn","db"));
			dc=document.getElementById(tg.id.replace("cn","dc"));
			P7_HSMpause(g.p7box);
			pp=dc;
			while(pp){
				dL+=pp.offsetLeft;
				pp=pp.offsetParent;
			}
			x=evt.clientX-dL;
			dr='right';
			if(x<=g.offsetLeft){
				dr='left';
			}
			P7_HSMmoveBy(g.p7box,dr);
			m=false;
		}
		else if(g&&g.id&&g.id.indexOf('p7HSMdb_')>-1){
			p7hsmobj=g;
			P7_HSMpause(g.p7box);
			x=(p7hsmobj.offsetLeft)?p7hsmobj.offsetLeft:0;
			p7hsmofX=evt.clientX-x;
			if(!document.addEventListener&&document.attachEvent){
				g.setCapture();
			}
			m=false;
		}
	}
	return m;
}
function P7_HSMdrg(evt){
	evt=(evt)?evt:event;
	var m=true;
	if(p7hsmobj){
		if(evt.clientX){
			P7_HSMshift(p7hsmobj,(evt.clientX-p7hsmofX));
		}
		evt.cancelBubble=true;
		m=false;
	}
	return true;
}
function P7_HSMrel(){
	if(p7hsmobj){
		if(!document.addEventListener&&document.attachEvent){
			p7hsmobj.releaseCapture();
		}
		p7hsmobj=null;
	}
}
function P7_HSMshift(obj,x){
	var tC,d,b,bT,s,sT,bh,sh,p,xx,r,rr,cw;
	d=obj.id.replace("db","dc");
	tC=document.getElementById(d);
	b=obj.id.replace("db","b");
	bT=document.getElementById(b);
	cw=P7_HSMdbw(bT,tC);
	r=cw-obj.offsetWidth;
	x=(x<=0)?0:x;
	x=(x>=r)?r:x;
	s=bT.p7acdv;
	sT=document.getElementById(s);
	rr=bT.offsetWidth-sT.firstChild.offsetWidth;
	if(rr>=0){
		x=0;
		rr=0;
	}
	p=x/r;
	xx=parseInt(rr*p,10);
	obj.style.left=x+"px";
	sT.style.left=xx+"px";
}
function P7_HSMsetDrag(sB){
	var dC,s,dB,x,xx,rr,r,p,sD,cw;
	if(sB.p7dragbar){
		dC=document.getElementById(sB.p7dragbar);
		s=dC.id.replace("dc","db");
		dB=document.getElementById(s);
		sD=document.getElementById(sB.p7acdv);
		x=parseInt(sD.style.left,10);
		rr=sB.offsetWidth-sD.firstChild.offsetWidth;
		cw=P7_HSMdbw(sB,dC);
		r=cw-dB.offsetWidth;
		p=x/rr;
		xx=parseInt(r*p,10);
		xx=(xx<=0)?0:xx;
		xx=(xx>=r)?r:xx;
		if(!isNaN(xx)){
			dB.style.left=xx+"px";
		}
	}
}
function P7_HSMdbw(tB,dB){
	var pp,ow=0,w,j,sf;
	ow=tB.offsetWidth;
	if(dB){
		pp=dB.parentNode.childNodes;
		for(j=0;j<pp.length;j++){
			if(pp[j].nodeName=='DIV'&&pp[j]!=dB){
				w=pp[j].offsetWidth;
				if(!w||w===0){
					w=parseInt(P7_HSMgpv(pp[j].getElementsByTagName("A")[0],'width','width'),10);
				}
				w=(w>0)?w:0;
				ow-=w;
			}
		}
	}
	return ow;
}
function P7_HSMgpv(ob,prop,prop2){
	var h,v=null;
	if(ob){
		if(ob.currentStyle){
			v=eval('ob.currentStyle.'+prop);
		}
		else if(document.defaultView.getComputedStyle(ob,"")){
			v=document.defaultView.getComputedStyle(ob,"").getPropertyValue(prop2);
		}
		else{
			v=eval("ob.style."+prop);
		}
	}
	return v;
}
