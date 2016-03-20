
if (window.addEventListener) {
    window.addEventListener("scroll", function () {fix_sidemenu(); });
    window.addEventListener("resize", function () {fix_sidemenu(); });    
    window.addEventListener("touchmove", function () {fix_sidemenu(); });    
    window.addEventListener("load", function () {fix_sidemenu(); });
} else if (window.attachEvent) {
    window.attachEvent("onscroll", function () {fix_sidemenu(); });
    window.attachEvent("onresize", function () {fix_sidemenu(); });    
    window.attachEvent("ontouchmove", function () {fix_sidemenu(); });
    window.attachEvent("onload", function () {fix_sidemenu(); });
}

function start_sidemenu() {
	var w, wp;
	w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
	wp = w-getScrollbarWidth();
    document.getElementById("header").style.width = wp + "px";
	document.getElementById("foot-line").style.width = wp + "px";
	
	fix_sidemenu();
}

function fix_sidemenu() {
    var w, wp, top, left;
    w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
	wp = w-getScrollbarWidth();
    top = scrolltop()      
	left = scrollLeft()

	if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        document.getElementById("header").style.width = wp + "px";
	    document.getElementById("foot-line").style.width = wp + "px";
	}
	
	var offh = document.getElementById("header").clientHeight;
	if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || w < 517){
		if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && w < 379){
			document.getElementById("hmenu").style.fontSize = "x-small";
		} else if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && w < 517){
			document.getElementById("hmenu").style.fontSize = "small";
		} else {
			document.getElementById("hmenu").style.fontSize = "large";
		}
		if (top > offh) {       
            document.getElementById("hmenu").style.position = "fixed";  
            document.getElementById("hmenu").style.width = wp + "px"; 
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				left = left;
			} else {
				left = 0;
			}
            document.getElementById("hmenu").style.left = left + "px";
            document.getElementById("hmenu").style.top = "0";   			
			document.getElementById("inner").style.paddingTop = "56px";
        } else {
            document.getElementById("hmenu").style.position = "absolute";   
            document.getElementById("hmenu").style.width = wp + "px";  
            document.getElementById("hmenu").style.left = left + "px";
			document.getElementById("hmenu").style.top = offh + "px";
			document.getElementById("inner").style.paddingTop = "56px";
        }
	} else {
		document.getElementById("hmenu").style.fontSize = "large"; 
		if (top > offh) {       
			document.getElementById("hmenu").style.position = "fixed";  
			document.getElementById("hmenu").style.width = wp + "px";       
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				left = left;
			} else {
				left = 0;
			}  
            document.getElementById("hmenu").style.left = left + "px";
			document.getElementById("hmenu").style.top = "0";             
			document.getElementById("inner").style.paddingTop = "72px";
		} else {
			document.getElementById("hmenu").style.position = "absolute";   
			document.getElementById("hmenu").style.width = wp + "px";  
            document.getElementById("hmenu").style.left = left + "px";   		
			document.getElementById("hmenu").style.top = offh + "px";   
			document.getElementById("inner").style.paddingTop = "72px";
		}
	}
}

function scrolltop() {
    var top = 0;
    if (typeof(window.pageYOffset) == "number") {
        top = window.pageYOffset;
    } else if (document.body && document.body.scrollTop) {
        top = document.body.scrollTop;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop;
    }
    return top;
}
function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}
function scrollLeft() {
    var left = 0;
    if (typeof(window.pageXOffset) == "number") {
        left = window.pageXOffset;
    } else if (document.body && document.body.scrollLeft) {
        left = document.body.scrollLeft;
    } else if (document.documentElement && document.documentElement.scrollLeft) {
        left = document.documentElement.scrollLeft;
    }
    return left;
}