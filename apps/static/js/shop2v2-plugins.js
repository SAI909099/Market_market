/*/g/printme.js*/
var s3=s3||{};
s3.printMe=function(){function a(g,b){var c=[],e;var d=document.getElementById(g||"printMe");if(!d)return!1;b=b||{};b.doctype=b.doctype||a.doctype;b.stylesheet=b.stylesheet||a.stylesheet;b.window=a.extend(b.window,a.window);b.styles=a.extend(b.styles,a.styles);c.push(a.doctypes[b.doctype]);if(b.stylesheet){a.isArray(b.stylesheet)||(b.stylesheet=[b.stylesheet]);var f=0;for(e=b.stylesheet.length;f<e;f++)c.push('<link rel="stylesheet" href="'+b.stylesheet[f]+'" />')}else c.push("<style>"),c.push(a.join(b.styles,
"\n","{","}")),c.push("</style>");c.push('<body onload="print()">');c.push(d.innerHTML);c.push("</body>");c.push("</html>");d=window.open("","printMe",a.join(b.window,",","="));d.document.write(c.join("\n"));d.document.close();d.focus()}a.doctypes={"html:5":'<!doctype html>\n<html lang="en">',"html:xt":'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">'};a.doctype="html:5";
a.styles={"body, td":"font-size:12px; font-family: verdana;","table.table1":"font-size:8pt; border-collapse: collapse; font-family: verdana;","table.table1 td":"padding: 4px; border: 1px solid #333333;","table.table0":"font-size:8pt; border-collapse: collapse; font-family: verdana;"};a.window={width:700,height:600,toolbar:0,directories:0,menubar:0,status:0,resizable:1,location:0,scrollbars:"yes",copyhistory:0,top:10,left:10};a.extend=function(a,b){var c;a=a||{};for(c in b)a.hasOwnProperty(c)||(a[c]=
b[c]);return a};a.join=function(a,b,c,e){var d,f=[];b=b||"\n";c=c||"";e=e||"";for(d in a)f.push(d+c+a[d]+e);return f.join(b)};a.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)};return a}();var printMe=printMe||s3.printMe;
/*/g/shop2v2/default/js/tpl.js*/
(function(b){b.runQueue=function(c){b.each(c,function(a){a=c[a];b.isFunction(a)&&a.call(c)})}})(jQuery);
(function(b,c){var a={init:function(){b(function(){b.runQueue(a.queue)})},queue:{rating:function(){b("form .tpl-stars").each(function(){function a(a){a=b(a);e.removeClass("tpl-active");a.addClass("tpl-active").prevAll().addClass("tpl-active")}var c=b(this),d=null,e=c.children("span"),f=c.children("input");c.on({click:function(a){d=a.target;f.val(b(d).index()+1)},mousemove:function(b){a(b.target)},mouseleave:function(b){a(d)}})})}}};a.init();c.tpl=a})(jQuery,window);
/*/g/shop2v2/default/js/baron.min.js*/
!function(w){var h=function(f,c){var l=[];f[0]||(f=[f]);for(var g=0;g<f.length;g++)l[g]=new h.init(f[g],c);return l};h.init=function(f,c){function l(a){a?k(d).addClass(c.barOnCls||""):k(d).removeClass(c.barOnCls||"")}function g(a,b){var r=c.barMinHeight||20;k(d).css("top",a+"px");b!==w&&(0<b&&b<r&&(b=r),k(d).css({height:b+"px"}))}function h(){return!1}function t(a){b(document,"selectstart",h,a?"off":"")}var u,m,b,k,a,e,d,n,q,v;this.viewport=function(){};this.updateScrollBar=function(){n=- -(a.pageYOffset||
a.scrollTop)/(e.offsetHeight-a.clientHeight)*(a.clientHeight-d.offsetHeight-(c.barTop||0))+(c.barTop||0);var b=a.clientHeight*a.clientHeight/e.offsetHeight;a.clientHeight>=e.offsetHeight&&(b=0);void 0!==b?g(n,b):g(n)};var p=window.jQuery;if(m=c.selector||p)if(b=c.event||function(a,b,c,d){p(a)[d||"on"](b,c)},c.event||p)if(k=c.dom||p)if(a=m(c.scroller,f)[0],e=m(c.container,a)[0],d=m(c.bar,a)[0],a&&e&&d)return l(a.clientHeight<e.offsetHeight),k(a).css("width",a.parentNode.clientWidth+a.offsetWidth-a.clientWidth+
"px"),this.viewport(),b(a,"scroll",this.updateScrollBar),b(window,"resize",function(){clearTimeout(u);u=setTimeout(function(){this.viewport();this.updateScrollBar();l(e.offsetHeight>a.clientHeight)},200)}),b(d,"mousedown",function(a){a.preventDefault();t();q=1}),b(document,"mouseup blur",function(){t(1);q=0}),b(document,"mousedown",function(a){v=a.clientY-n}),b(document,"mousemove",function(b){q&&(a.scrollTop=(b.clientY-v-(c.barTop||0))/(a.clientHeight-d.offsetHeight-(c.barTop||0))*(e.offsetHeight-
a.clientHeight))}),this.updateScrollBar(),this};h.init.prototype.reinit=function(){this.viewport();this.updateScrollBar()};window.baron=h}();