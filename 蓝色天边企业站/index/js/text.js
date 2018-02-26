function rem(){
	var html=document.getElementsByTagName('html')[0];
	var Ww=document.documentElement.clientWidth;
	if(Ww<750){
		var scale=Ww/750;
	}else{
		var scale=Ww/1920;
	}
	html.style.fontSize=scale*100+"px";
}
rem();
window.onresize=function(){
	rem();
}
var outer=document.getElementById('outer');
var meng=document.getElementById('meng');
document.onmousemove=function(ev){
	var ev=event||window.event;
	var x=-ev.clientX/1000;
	var y=-ev.clientY/1000;	
	outer.style.backgroundPositionX=x+'rem';
	outer.style.backgroundPositionY=y+'rem';
}



