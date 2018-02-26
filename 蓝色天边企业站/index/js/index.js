function rem(){
		var html=document.getElementsByTagName('html')[0];
		var Ww=document.documentElement.clientWidth;
		var wdw=window.innerWidth;
			if (wdw>750) {
				scale=Ww/1920;
			}else if (wdw<750) {
				scale=Ww/750;
			}
		html.style.fontSize=scale*100+"px";
	}
		rem();
	window.onresize=function(){
		rem();
		$(function(){
			var x,y;
			var h=$("body").height()/2;
			var w=$("body").outerWidth()/2;
			$(window).resize(function(){
				h=$("body").height()/2;
				w=$("body").outerWidth()/2;
			});
			if (window.innerWidth >= 750) {
				$("body").mousemove(function(event){
					x=event.clientX;
					y=event.clientY;
					$("#bg").css('left',''+Math.floor((x-w)*0.02)*-1+'px').css('top',''+Math.floor((y-h)*0.05)*-1+'px');
				})
			}else if(window.innerWidth <= 750) {
				$("body").unbind(onmousemove);
			}
		});
	}