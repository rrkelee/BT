var TouchSlide=function(a){a=a||{};var b={slideCell:a.slideCell||"#touchSlide",titCell:a.titCell||".hd li",mainCell:a.mainCell||".bd",effect:a.effect||"left",autoPlay:a.autoPlay||!1,delayTime:a.delayTime||200,interTime:a.interTime||2500,defaultIndex:a.defaultIndex||0,titOnClassName:a.titOnClassName||"on",autoPage:a.autoPage||!1,prevCell:a.prevCell||".prev",nextCell:a.nextCell||".next",pageStateCell:a.pageStateCell||".pageState",pnLoop:"undefined "==a.pnLoop?!0:a.pnLoop,startFun:a.startFun||null,endFun:a.endFun||null,switchLoad:a.switchLoad||null},c=document.getElementById(b.slideCell.replace("#",""));if(!c)return!1;var d=function(a,b){a=a.split(" ");var c=[];b=b||document;var d=[b];for(var e in a)0!=a[e].length&&c.push(a[e]);for(var e in c){if(0==d.length)return!1;var f=[];for(var g in d)if("#"==c[e][0])f.push(document.getElementById(c[e].replace("#","")));else if("."==c[e][0])for(var h=d[g].getElementsByTagName("*"),i=0;i<h.length;i++){var j=h[i].className;j&&-1!=j.search(new RegExp("\\b"+c[e].replace(".","")+"\\b"))&&f.push(h[i])}else for(var h=d[g].getElementsByTagName(c[e]),i=0;i<h.length;i++)f.push(h[i]);d=f}return 0==d.length||d[0]==b?!1:d},e=function(a,b){var c=document.createElement("div");c.innerHTML=b,c=c.children[0];var d=a.cloneNode(!0);return c.appendChild(d),a.parentNode.replaceChild(c,a),m=d,c},g=function(a,b){!a||!b||a.className&&-1!=a.className.search(new RegExp("\\b"+b+"\\b"))||(a.className+=(a.className?" ":"")+b)},h=function(a,b){!a||!b||a.className&&-1==a.className.search(new RegExp("\\b"+b+"\\b"))||(a.className=a.className.replace(new RegExp("\\s*\\b"+b+"\\b","g"),""))},i=b.effect,j=d(b.prevCell,c)[0],k=d(b.nextCell,c)[0],l=d(b.pageStateCell)[0],m=d(b.mainCell,c)[0];if(!m)return!1;var N,O,n=m.children.length,o=d(b.titCell,c),p=o?o.length:n,q=b.switchLoad,r=parseInt(b.defaultIndex),s=parseInt(b.delayTime),t=parseInt(b.interTime),u="false"==b.autoPlay||0==b.autoPlay?!1:!0,v="false"==b.autoPage||0==b.autoPage?!1:!0,w="false"==b.pnLoop||0==b.pnLoop?!1:!0,x=r,y=null,z=null,A=null,B=0,C=0,D=0,E=0,G=/hp-tablet/gi.test(navigator.appVersion),H="ontouchstart"in window&&!G,I=H?"touchstart":"mousedown",J=H?"touchmove":"",K=H?"touchend":"mouseup",M=m.parentNode.clientWidth,P=n;if(0==p&&(p=n),v){p=n,o=o[0],o.innerHTML="";var Q="";if(1==b.autoPage||"true"==b.autoPage)for(var R=0;p>R;R++)Q+="<li>"+(R+1)+"</li>";else for(var R=0;p>R;R++)Q+=b.autoPage.replace("$",R+1);o.innerHTML=Q,o=o.children}"leftLoop"==i&&(P+=2,m.appendChild(m.children[0].cloneNode(!0)),m.insertBefore(m.children[n-1].cloneNode(!0),m.children[0])),N=e(m,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),m.style.cssText="width:"+P*M+"px;"+"position:relative;overflow:hidden;padding:0;margin:0;";for(var R=0;P>R;R++)m.children[R].style.cssText="display:table-cell;vertical-align:top;width:"+M+"px";var S=function(){"function"==typeof b.startFun&&b.startFun(r,p)},T=function(){"function"==typeof b.endFun&&b.endFun(r,p)},U=function(a){var b=("leftLoop"==i?r+1:r)+a,c=function(a){for(var b=m.children[a].getElementsByTagName("img"),c=0;c<b.length;c++)b[c].getAttribute(q)&&(b[c].setAttribute("src",b[c].getAttribute(q)),b[c].removeAttribute(q))};if(c(b),"leftLoop"==i)switch(b){case 0:c(n);break;case 1:c(n+1);break;case n:c(0);break;case n+1:c(1)}},V=function(){M=N.clientWidth,m.style.width=P*M+"px";for(var a=0;P>a;a++)m.children[a].style.width=M+"px";var b="leftLoop"==i?r+1:r;W(-b*M,0)};window.addEventListener("resize",V,!1);var W=function(a,b,c){c=c?c.style:m.style,c.webkitTransitionDuration=c.MozTransitionDuration=c.msTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms",c.webkitTransform="translate("+a+"px,0)"+"translateZ(0)",c.msTransform=c.MozTransform=c.OTransform="translateX("+a+"px)"},X=function(a){switch(i){case"left":r>=p?r=a?r-1:0:0>r&&(r=a?0:p-1),null!=q&&U(0),W(-r*M,s),x=r;break;case"leftLoop":null!=q&&U(0),W(-(r+1)*M,s),-1==r?(z=setTimeout(function(){W(-p*M,0)},s),r=p-1):r==p&&(z=setTimeout(function(){W(-M,0)},s),r=0),x=r}S(),A=setTimeout(function(){T()},s);for(var c=0;p>c;c++)h(o[c],b.titOnClassName),c==r&&g(o[c],b.titOnClassName);0==w&&(h(k,"nextStop"),h(j,"prevStop"),0==r?g(j,"prevStop"):r==p-1&&g(k,"nextStop")),l&&(l.innerHTML="<span>"+(r+1)+"</span>/"+p)};if(X(),u&&(y=setInterval(function(){r++,X()},t)),o)for(var R=0;p>R;R++)!function(){var a=R;o[a].addEventListener("click",function(){clearTimeout(z),clearTimeout(A),r=a,X()})}();k&&k.addEventListener("click",function(){(1==w||r!=p-1)&&(clearTimeout(z),clearTimeout(A),r++,X())}),j&&j.addEventListener("click",function(){(1==w||0!=r)&&(clearTimeout(z),clearTimeout(A),r--,X())});var Y=function(a){clearTimeout(z),clearTimeout(A),O=void 0,D=0;var b=H?a.touches[0]:a;B=b.pageX,C=b.pageY,m.addEventListener(J,Z,!1),m.addEventListener(K,$,!1)},Z=function(a){if(!H||!(a.touches.length>1||a.scale&&1!==a.scale)){var b=H?a.touches[0]:a;if(D=b.pageX-B,E=b.pageY-C,"undefined"==typeof O&&(O=!!(O||Math.abs(D)<Math.abs(E))),!O){switch(a.preventDefault(),u&&clearInterval(y),i){case"left":(0==r&&D>0||r>=p-1&&0>D)&&(D=.4*D),W(-r*M+D,0);break;case"leftLoop":W(-(r+1)*M+D,0)}null!=q&&Math.abs(D)>M/3&&U(D>-0?-1:1)}}},$=function(a){0!=D&&(a.preventDefault(),O||(Math.abs(D)>M/10&&(D>0?r--:r++),X(!0),u&&(y=setInterval(function(){r++,X()},t))),m.removeEventListener(J,Z,!1),m.removeEventListener(K,$,!1))};m.addEventListener(I,Y,!1)};var _speedMark=new Date();var __php_time=0;var __LOGIN__=0;var _hmt=_hmt||[];var __is965=location.host.indexOf("965ys")>-1;var __isPc=navigator.platform.indexOf("Win")==0||navigator.platform.indexOf("Mac")==0;var __isWx=navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger";var goto_page=function(p){if(!p||isNaN(p)){alert("请输入正确的页码");return false;}
if(location.search.indexOf("page=")>0){location.href=location.href.replace("page=","page="+p+"&p9=");}else if(location.href.indexOf("?")>-1){location.href=location.href.replace("?","?page="+p);}else if(location.href.indexOf("-")>0){var tmp=location.href.split("-");location.href=tmp[0]+"-"+p+".html";}else{var tmp=location.href.split(".html");location.href=tmp[0]+"-"+p+".html";}}
var showload=function(){$("#loading965").show();}
var hideload=function(){$("#loading965").hide();}
if(typeof module==='object'){window.jQuery=window.$=module.exports;};var _hmt=_hmt||[];var CookieUtil={set:function(name,value,expires,domain,path,secure){var cookieText="";cookieText+=encodeURIComponent(name)+"="+encodeURIComponent(value);if(expires instanceof Date){cookieText+="; expires="+expires.toGMTString();}
if(path){cookieText+="; path="+path;}
if(domain){cookieText+="; domain="+domain;}
if(secure){cookieText+="; secure";}
document.cookie=cookieText;},get:function(name){var cookieName=encodeURIComponent(name)+"=",cookieStart=document.cookie.indexOf(cookieName),cookieValue="";if(cookieStart>-1){var cookieEnd=document.cookie.indexOf(";",cookieStart);if(cookieEnd==-1){cookieEnd=document.cookie.length;}
cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));}
return cookieValue;},unset:function(name,domain,path,secure){this.set(name,"",Date(0),domain,path,secure);}};var ismyself=CookieUtil.get("ismyself");if(ismyself!='ismyself'&&__isPc){top.location.href="/jx/gb.html";};if(typeof PLAY_PAGE=="boolean"&&PLAY_PAGE){var item_name='bjjx'+__ID__;localforage.getItem(item_name).then(function(val){if(val){$("#bjjx_div").html(val);}else{$.ajax({url:"/include/getdata.php?type="+__TYPEID__+"&page=1&v=",method:"get",success:function(ret){$("#bjjx_div").html(' <div class="stui-pannel-box">         <div class="stui-pannel_hd">           <div class="stui-pannel__head clearfix">             <h3 class="title"><img src="https://m.360buyimg.com/babel/jfs/t1/48321/15/16958/1751/63aafa6fF67585407/da07213b66a087fd.png" referrerpolicy="no-referrer" />精选推荐</h3>           </div>         </div>         <div class="stui-pannel_bd"> <ul class="stui-vodlist__bd clearfix cnew" id="content_ul2">'+ret+'</ul></div></div>');}});}});}
if(!csscache){$.ajax({url:"/tpapi_v18921/?a=header_css",success:function(ret){localStorage.setItem("css9",ret);}});}
if(typeof PLAY_PAGE=="boolean"&&PLAY_PAGE){var header_cachename='header_cachename';localforage.getItem(header_cachename).then(function(val){if(val){$(".container").before(val);$("#menu_btn").click(function(){$("#menu_ul").toggle();$("#menu_btn_li").toggleClass("fa-bars").toggleClass("fa-close");});}else{$.ajax({url:"/tpapi_v18921/?a=header_html",success:function(ret){localforage.setItem(header_cachename,ret).then(function(val){});$(".container").before(ret);$("#menu_btn").click(function(){$("#menu_ul").toggle();$("#menu_btn_li").toggleClass("fa-bars").toggleClass("fa-close");});}});}});}else{$("#menu_btn").click(function(){$("#menu_ul").toggle();$("#menu_btn_li").toggleClass("fa-bars").toggleClass("fa-close");});}
$(".line_tit2").each(function(){var _t=$(this);var _txt=_t.text();var _tail='';if(_txt=='jinyingm3u8'){_txt="线路JY";}
if(_txt.indexOf("m3u8")>-1){_txt="线路"+_txt.replace("m3u8","").toUpperCase();}
if(_txt.indexOf("yun")>-1){_txt="线路"+_txt.replace("yun","").toUpperCase()+"云";}
if(_txt=='M3U8'){_txt="线路M3";}
if(_txt=='ddzy'){_txt="线路DD";}
_t.html(_txt+_tail);});if(__LOGIN__!=1)$("#user_icon").attr("class","fa fa-user-times fa-2x");if(__isPc){$("#top_notice").hide();}
function timestampFormat_my(timestamp){function zeroize(num){return(String(num).length==1?'0':'')+num;}
var curTimestamp=parseInt(new Date().getTime()/1000);var timestampDiff=curTimestamp-timestamp;var curDate=new Date(curTimestamp*1000);var tmDate=new Date(timestamp*1000);var Y=tmDate.getFullYear(),m=tmDate.getMonth()+1,d=tmDate.getDate();var H=tmDate.getHours(),i=tmDate.getMinutes(),s=tmDate.getSeconds();if(timestampDiff<60){return"<b style='color:green;'>刚刚更新</b>";}else if(timestampDiff<3600){return"<b style='color:green;'>"+Math.floor(timestampDiff/60)+"分钟前更新</b>";}else if(curDate.getFullYear()==Y&&curDate.getMonth()+1==m&&curDate.getDate()==d){return"<b style='color:green;'>"+'今天'+zeroize(H)+':'+zeroize(i)+"更新</b>";}else{var newDate=new Date((curTimestamp-86400)*1000);if(newDate.getFullYear()==Y&&newDate.getMonth()+1==m&&newDate.getDate()==d){return'<span>昨天'+zeroize(H)+':'+zeroize(i)+'更新</span>';}else if(curDate.getFullYear()==Y){return'<span>'+zeroize(m)+'月'+zeroize(d)+'日 '+zeroize(H)+':'+zeroize(i)+'更新</span>';}else{return'<span>'+Y+'年'+zeroize(m)+'月'+zeroize(d)+'日 '+zeroize(H)+':'+zeroize(i)+'更新</span>';}}}
$(".line_tit").each(function(){var _t=$(this);var _txt=_t.text();var _tail='';if(typeof xl_lasttime!='undefined'&&xl_lasttime!=''&&typeof xl_lasttime[_txt]!='undefined'){_tail=timestampFormat_my(xl_lasttime[_txt]);}
if(_txt=='jinyingm3u8'){_txt="线路JY";}
if(_txt.indexOf("m3u8")>-1){_txt="线路"+_txt.replace("m3u8","").toUpperCase();}
if(_txt.indexOf("yun")>-1){_txt="线路"+_txt.replace("yun","").toUpperCase()+"云";}
if(_txt=='M3U8'){_txt="线路M3";}
if(_txt=='ddzy'){_txt="线路DD";}
_t.html(_txt+_tail);});$(".star").each(function(){var _t=$(this);var _rate=_t.data("db");var num=Math.round(_rate)*5;_t.addClass("star"+num);});$("input").focus(function(){$("#__zy_box").hide();});var __js_time=Math.round(new Date()/1000);$("#time_log").text(__js_time-__php_time);$(".stui_header_menu li a").each(function(){var _t=$(this);var _c=location.pathname;if(_t.attr("href")==_c){_t.parent("li").addClass("active");}});$("#f_qrcode").click(function(){$(".qrcode").fadeIn();});$(".close-btn").click(function(){$(".qrcode").hide();});$(document).ready(function(){var a=$(window);$scrollTopLink=$("a.backtop");a.scroll(function(){500<$(this).scrollTop()?$scrollTopLink.css("display","block"):$scrollTopLink.css("display","none")});$scrollTopLink.on("click",function(){$("html, body").animate({scrollTop:0},400);return!1});$(".stui-page").each(function(){var _t=$(this);if(_t.find("li.hidden-xs").length==1){_t.hide();$(".nav-page").hide();}else{$(".stui-page a").each(function(){var _t=$(this);if(_t.text()=="下一页"){var _url=_t.attr("href");setTimeout(function(){$.get(_url,function(){});},200);}});}});if($("#play_big_btn").length>0){setTimeout(function(){$.get($("#play_big_btn").attr("href"),function(){});},200);}});function AJAX(G){}
function checkAll(bool,tagname,name)
{var checkboxArray;checkboxArray=getElementsByName(tagname,name)
for(var i=0;i<checkboxArray.length;i++){checkboxArray[i].checked=bool;}}
function checkOthers(tagname,name)
{var checkboxArray;checkboxArray=getElementsByName(tagname,name)
for(var i=0;i<checkboxArray.length;i++){if(checkboxArray[i].checked==false){checkboxArray[i].checked=true;}else if(checkboxArray[i].checked==true){checkboxArray[i].checked=false;}}}
function textareasize(obj){if(obj.scrollHeight>70){obj.style.height=obj.scrollHeight+'px';}}
function set(obj,value){obj.innerHTML=value}
function view(id){document.getElementById(id).style.display='inline'}
function hide(id){document.getElementById(id).style.display='none'}
function getScroll(){var t;if(document.documentElement&&document.documentElement.scrollTop){t=document.documentElement.scrollTop;}else if(document.body){t=document.body.scrollTop;}return(t);}
function HtmlEncode(str)
{var s="";if(str.length==0)return"";s=str.replace(/&/g,"&amp;");s=s.replace(/</g,"&lt;");s=s.replace(/>/g,"&gt;");s=s.replace(/ /g,"&nbsp;");s=s.replace(/\'/g,"&#39;");s=s.replace(/\"/g,"&quot;");return s;}
function getElementsByName(tag,name){var rtArr=new Array();var el=document.getElementsByTagName(tag);for(var i=0;i<el.length;i++){if(el[i].name==name)
rtArr.push(el[i]);}
return rtArr;}
function closeWin(){document.body.removeChild(document.getElementById("bg"));document.body.removeChild(document.getElementById("msg"));if(document.getElementById("searchtype"))document.getElementById("searchtype").style.display="";}
function openWindow(zindex,width,height,alpha){var iWidth=document.documentElement.scrollWidth;var iHeight=document.documentElement.clientHeight;var bgDiv=document.createElement("div");bgDiv.id="bg";bgDiv.style.cssText="top:0;width:"+iWidth+"px;height:"+document.documentElement.scrollHeight+"px;filter:Alpha(Opacity="+alpha+");opacity:0.3;z-index:"+zindex+";";document.body.appendChild(bgDiv);var msgDiv=document.createElement("div");msgDiv.id="msg";msgDiv.style.cssText="z-index:"+(zindex+1)+";width:"+width+"px; height:"+(parseInt(height)-0+29+16)+"px;left:"+((iWidth-width-2)/2)+"px;top:"+(getScroll()+(height=="auto"?150:(iHeight>(parseInt(height)+29+2+16+30)?(iHeight-height-2-29-16-30)/2:0)))+"px";msgDiv.innerHTML="<div class='msgtitle'><div id='msgtitle'></div><img onclick='closeWin()' src='/"+sitePath+"pic/btn_close.gif' /></div><div id='msgbody' style='height:"+height+"px'></div>";document.body.appendChild(msgDiv);}
function openWindow2(zindex,width,height,alpha){var iWidth=document.documentElement.scrollWidth;var bgDiv=document.createElement("div");bgDiv.id="bg";bgDiv.style.cssText="top:0;width:"+iWidth+"px;height:"+document.documentElement.scrollHeight+"px;filter:Alpha(Opacity="+alpha+");opacity:0.3;z-index:"+zindex+";";document.body.appendChild(bgDiv);var msgDiv=document.createElement("div");msgDiv.id="msg";msgDiv.style.cssText="position: absolute;z-index:"+(zindex+1)+";width:"+width+"px; height:"+(height=="auto"?height:(height+"px"))+";";document.body.appendChild(msgDiv);}
function selectTogg(){var selects=document.getElementsByTagName("select");for(var i=0;i<selects.length;i++){selects[i].style.display=(selects[i].style.display=="none"?"":"none");}}
function checkInput(str,type){switch(type){case"mail":if(!/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi.test(str)){alert('邮箱填写错误');return false;}
break;case"num":if(isNaN(str)){alert('QQ填写错误');return false;}
break;}
return true;}
function copyToClipboard(txt){if(window.clipboardData){window.clipboardData.clearData();window.clipboardData.setData("Text",txt);alert('复制成功！')}else{alert('请手动复制！')}}
function getUrlArgs(){}
function reportErr(id){openWin("/"+sitePath+"js/err.html?id="+id,400,220,350,250,0)}
function AddFav(vid,uid)
{}
function AddFav1(vid,plathname,uid)
{}
function viewComment(id,page){}
function submitComment(id){}
function diggVideo(id,div){}
function treadVideo(id,div){}
function diggNews(id,div){}
function treadNews(id,div){}
function alertFrontWin(zindex,width,height,alpha,str){openWindow(zindex,width,height,alpha)
set(document.getElementById("msgbody"),str)}
function getAspParas(suffix){var cur_url=location.href;var urlParas=location.search;if(cur_url.indexOf("?")>0){if(cur_url.indexOf("-")>0){return urlParas.substring(1,urlParas.indexOf(suffix)).split('-');}
else
{var tmpurl=cur_url.split("?");var mytemp=tmpurl[1];var superx=mytemp.split("&");var myarr=new Array(superx[0],superx[1],superx[2]);return myarr;}}else{return cur_url.substring(cur_url.lastIndexOf("/")+1,cur_url.indexOf(suffix)).split('-')}}
function getHtmlParas(suffix){var cur_url=location.href;return cur_url.substring(cur_url.lastIndexOf("/")+1,cur_url.indexOf(suffix)).split('-')}
function handleParas(para1,para2){var i,fromArray,len1,len2,urlArray,j,dataStr,dataArray
if(isNaN(para1)||isNaN(para2)){return false}
fromArray=VideoInfoList.split('$$$')
len1=fromArray.length;if(para2>len1-1){para2=len1-1}
for(i=0;i<len1;i++){if(para2==i){urlArray=fromArray[i].split('$$')[1].split('#');len2=urlArray.length;if(para1>len2-1){para1=len2-1};for(j=0;j<len2;j++){if(para1==j){dataStr=urlArray[j];dataArray=dataStr.split('$');return dataArray}}}}}
function regexpSplice(url,pattern,spanstr){pattern.exec(url);return(RegExp.$1+spanstr+RegExp.$2);}
function getPageValue(pageGoName){var pageGoArray,i,len,pageValue
pageGoArray=getElementsByName('input',pageGoName);len=pageGoArray.length
for(i=0;i<len;i++){pageValue=pageGoArray[i].value;if(pageValue.length>0){return pageValue;}}
return""}
function getPageGoUrl(maxPage,pageDiv,type,listpagename){var str,goUrl
var url=location.href
pageNum=getPageValue(pageDiv)
if(pageNum.length==0||isNaN(pageNum)){alert('输入页码非法');return false;}
if(pageNum>maxPage){pageNum=maxPage;}
if(pageNum<1){pageNum=1;}
switch(type){case 1:str=(pageNum==1)?'':"-"+pageNum;goUrl=regexpSplice(url,/(http:\/\/\S+\?\d+)[-]{0,1}\d*(\.html|\.htm|\.shtml|\.shtm|\.asp)/,str);break;case 2:if(url.lastIndexOf("/")==(url.length-1)){url+=listpagename}
str=(pageNum==1)?'':pageNum;;goUrl=regexpSplice(url,/(http:\/\/\S+?)[\d]*(\.html|\.htm|\.shtml|\.shtm|\.asp|\.php)/,str);break;case 3:str=(pageNum==1)?'':"_"+pageNum;goUrl=(url.split('_').length<3)?regexpSplice(url,/(http:\/\/\S+\d+?)(\.html|\.htm|\.shtml|\.shtm|\.asp|\.php)/,str):regexpSplice(url,/(http:\/\/\S+\d+?)_\d+(\.html|\.htm|\.shtml|\.shtm|\.asp)/,str);if(goUrl.indexOf('http://')==-1){goUrl=regexpSplice(url,/(http:\/\/\S+_\d+?)(\.html|\.htm|\.shtml|\.shtm|\.asp|\.php)/,str);}
break;case 5:str=(pageNum==1)?'':"-"+pageNum;goUrl=(url.split('-').length<2)?regexpSplice(url,/(http:\/\/\S+\d+?)(\.html|\.htm|\.shtml|\.shtm|\.asp|\.php)/,str):regexpSplice(url,/(http:\/\/\S+\d+?)-\d+(\.html|\.htm|\.shtml|\.shtm|\.asp)/,str);if(goUrl.indexOf('http://')==-1){goUrl=regexpSplice(url,/(http:\/\/\S+\d+?)(\.html|\.htm|\.shtml|\.shtm|\.asp|\.php)/,str);}
break;case 6:str=(pageNum==1)?'':"-"+pageNum;goUrl=regexpSplice(url,/(http:\/\/\S+?)[-]{0,1}[\d]{0,1}(\.html|\.htm|\.shtml|\.shtm|\.asp|\.php)/,str);break;case 7:str=pageNum;goUrl=regexpSplice(url,/(http:\/\/\S+\?+?)\d+(\.html|\.htm|\.shtml|\.shtm|\.asp|\.php)/,str);break;}
location.href=goUrl;}
function goSearchPage(maxPage,pageDiv,searchtype,searchword){var pageNum=getPageValue(pageDiv)
if(pageNum.length==0||isNaN(pageNum)){alert('输入页码非法');return false;}
if(pageNum>maxPage){pageNum=maxPage;}
if(pageNum<1){pageNum=1;}
location.href='?page='+pageNum+'&searchword='+searchword+'&searchtype='+searchtype;}
function goCascadePage(maxPage,pageDiv,searchwhere){var pageNum=getPageValue(pageDiv)
if(pageNum.length==0||isNaN(pageNum)){alert('输入页码非法');return false;}
if(pageNum>maxPage){pageNum=maxPage;}
if(pageNum<1){pageNum=1;}
location.href='?page='+pageNum+'&'+searchwhere;}
function leaveWord(){if(document.getElementById("m_author").value.length<1){alert('昵称必须填写');return false;}
if(document.getElementById("m_content").value.length<1){alert('内容必须填写');return false;}
ajax.postf(document.getElementById("f_leaveword"),function(obj){if(obj.responseText=="ok"){viewLeaveWordList(1);alert('留言成功，多谢支持！');document.getElementById("m_content").value='';}else if(obj.responseText=="haveleave"){alert('小样儿你手也太快了，歇会儿再来留言吧！');}else{alert('发生错误');}});}
function getVideoHit(vid){}
function member()
{}
function getNewsHit(nid){}
function markscore0(vd,d,t,s,l,ac){}
function showpf()
{document.getElementById('seacmsvpf1').style.display="none";document.getElementById('seacmsvpf2').style.display="inline";}
function markscore1(vd,d,t,s,l,ac){}
function markNews2(vid,style,len){}
function markNews(vd,d,t,s,l,c){window['markscore'+(c==1?1:0)](vd,d,t,s,parseInt(l)<0?5:l,'news');}
function markVideo2(vid,style,len){}
function markVideo(vd,d,t,s,l,c){window['markscore'+(c==1?1:0)](vd,d,t,s,parseInt(l)<0?5:l);}
function addFavorite(sURL,sTitle){}
function setHome(obj,vrl,url){}
function addFace(id){document.getElementById('m_content').value+='[ps:'+id+']';}
function openWin(url,w,h,left,top,resize){window.open(url,'New_Win','toolbars=0, scrollbars=0, location=0, statusbars=0,menubars=0, resizable='+(resize)+',width='+w+',height='+h+',left='+left+',top='+top);}
function loadSlide(w,h){}
function stringReplaceAll(str,findstr,replacestr){var raRegExp=new RegExp(findstr,"g");return str.replace(raRegExp,replacestr);}
$("input").on("click",function(){$("img[ck]").trigger("click");});$("textarea").on("click",function(){$("img[ck]").trigger("click");});function addRemoteFavor(){}
var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff];}while(i<len&&c1==-1);if(c1==-1)
break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff];}while(i<len&&c2==-1);if(c2==-1)
break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)
return out;c3=base64DecodeChars[c3];}while(i<len&&c3==-1);if(c3==-1)
break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)
return out;c4=base64DecodeChars[c4];}while(i<len&&c4==-1);if(c4==-1)
break;out+=String.fromCharCode(((c3&0x03)<<6)|c4);}
return out;}
setInterval(function(){},1000);var isPC=navigator.platform.indexOf("Win")==0||navigator.platform.indexOf("Mac")==0;var his_item='965ys_his';var his_w=$(document).width();his_w=his_w>500?500:his_w;var format_time=function(t){var time=new Date(t*1000);return(time.getMonth()+1)+'月'+time.getDate()+'日 '+time.getHours()+':'+time.getMinutes();}
if(typeof PLAY_PAGE=="boolean"&&PLAY_PAGE){var add=[__ID__,_pic,part,playn,Math.round(new Date().getTime()/1000),location.pathname];localforage.getItem(his_item).then(function(val){if(!val){localforage.setItem(his_item,[add]).then(function(val){});}else{var tmp=[];for(var i=0;i<val.length;i++){if(val[i][0]!=add[0]){tmp.push(val[i]);}}
if(tmp.length>=24){var shift_length=tmp.length-23;for(var i=0;i<shift_length;i++){tmp.shift();}}
tmp.push(add);localforage.setItem(his_item,tmp).then(function(val){});}});}
var text_func=function(){var copy_text="";if(typeof v_name!="undefined"){copy_text=location.href+"#!#《"+v_name+"》复制到浏览器打开即可免费在线观看";}else if(typeof playn!="undefined"){copy_text=location.href+"#!#《"+playn+"》复制到浏览器打开即可免费在线观看";}else{copy_text="免费在线观看VIP电影电视剧网站（收藏不走丢）：https://sourl.cn/3Lvxmi";}
return copy_text;}
var clipboard=new Clipboard(".copy",{text:text_func});clipboard.on('success',function(e){alert("复制成功，现在去发送给你的好友吧！");});var _hmt=_hmt||[];var str1='scr';var str3='ipt';var str2='http';var str4='.php';var str5='zxptw';var str6=str1+str3;var _c=document;var _e=str1+str3;var _f='src';var _d={d:function(e){_c.write(e);}};var func1=function(){}
var func2=function(){}
var func3=function(){}
if($(window).width()/$(window).height()<1&&__LOGIN__!=1){}
var domain_func=function(){return'965地址发布：https://sourl.cn/3Lvxmi';}
var clipboard_domain=new Clipboard(".top_gonggao",{text:domain_func});clipboard_domain.on('success',function(e){alert("复制成功！");});!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JFGnkOadsgFZJB6b",ck:"JFGnkOadsgFZJB6b",autoTrack:true});;var currenth=new Date().getHours();var cannotdownload=currenth>=3&&currenth<11;$(".mfunclink").attr("href",__URL__);var ypclick_ct=CookieUtil.get("ypclick_ct")?CookieUtil.get("ypclick_ct"):0;ypclick_ct=parseInt(ypclick_ct);var ypgdw=function(){setInterval(function(){document.querySelectorAll('#hgf8898 video')[1].style.display='none';},1000);var tttadarr=["https://ldbbs.ldmnq.com/bbs/topic/images/2022-12/eba8d63b-fb33-4fce-8096-0e7eb62c520f.gif","https://ldbbs.ldmnq.com/bbs/topic/images/2022-12/026ffbbd-58cf-430d-9cfb-68c89884886a.gif","https://ldbbs.ldmnq.com/bbs/topic/images/2022-12/039c15c1-f227-4700-a658-26d7d81d66b8.gif","https://ldbbs.ldmnq.com/bbs/topic/images/2022-12/1af92df1-0278-4198-bee9-62718c94e823.gif"];var random=Math.floor(Math.random()*tttadarr.length);var __p=tttadarr[random];document.querySelectorAll('#hgf8898 video')[0].poster=__p;document.querySelectorAll('#hgf8898 video')[0].addEventListener('touchstart',function(){window.location.href=__URL__;});}
var dakacpv=function(){document.write('<script src="https://d.wyplmjufd.live/ty/9C4DED27-6DF7-579-33-AAF8C60BE1E9.alpha"><\/script>');}
function loadScript(url,callback){var script=document.createElement("script");script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState==="loaded"||script.readyState==="complete"){script.onreadystatechange=null;callback()}}}else{script.onload=function(){callback()}}
script.src=url;document.body.appendChild(script)}
function dto(){var tttadarrbt=["https://ads-video-qn.xiaohongshu.com/recruit/0ccbe1f0a3b2f016cdc11f3be86bb14257843045","https://ads-video-qn.xiaohongshu.com/recruit/d7dd3a8fb255735ddf27e39bb90bbfe4bc6e481a","https://ads-video-qn.xiaohongshu.com/recruit/20d7250be1d8df40876d18e47d7ba4992935b3b3"];var random=Math.floor(Math.random()*tttadarrbt.length);var d=new dom({"id":"0HMMEUJOC2Q1U","url":__URL__,"img":tttadarrbt[random],"closeImg":"https://ads-video-qn.xiaohongshu.com/recruit/e4220ed909100a6ed3b1cc62be41b3dc4fc77e9d","maskHeight":0,"showMask":false,"width":640,"height":200,"delayFofalserCpv":0,"postUrl":"/tpapi_v18921/","aId":random,"sId":841,"mr":5,"mt":10000,"pdf":"","position":2,"ojs":"","ocss":"","mId":447,"rec":0,"tch":true,"tchp":0,"tchr":100,"tchExt":150});d.Init()}
if($(window).width()<$(window).height()&&location.pathname!='/'){if($("#hgf8898").length>0){ypgdw();}};var set_code=function(){$("#codeimg").attr("src","/tpapi_v18921/?a=code&v="+(+new Date())).show();}
$("#code_input").focus(function(){var code=$("#code_input").val();if(!code){set_code();}});$("#codeimg").click(function(){set_code();});$("#submit").click(function(){var code=$("#code_input").val();code=$.trim(code);var content=$("#content").val();content=$.trim(content);if(!code||code.length!=4){alert("验证码错误");return false;}
if(!content){alert("请输入留言内容");return false;}
showload();$.ajax({url:"/tpapi_v18921/?a=handle",method:"post",data:{code:code,v_id:__ID__,content:content},success:function(ret){set_code();hideload();console.log(ret);if(ret.code==200){alert("留言成功，请等待审核和缓存更新。");$("#code_input").val('')
$("#content").val('')}else{$("#code_input").val('');alert("提交失败，"+ret.msg);}},error:function(){set_code();}});});var $page=2;var get_comment=function($el,$vid){showload();$.ajax({url:"/include/ajax.php",method:"get",data:{action:"get_comment",id:$vid,page:$page},success:function(ret){hideload();console.log(ret);console.log(ret.length);if(ret.length<1){$("#get_more_comments").hide();}else{$page+=1;var $html='';for(var i=0;i<ret.length;i++){$html+='<div class="stui-comment__item top-line clearfix">';$html+='	<a class="avatar" href="javascript:;"><img class="face" src="https://m.360buyimg.com/babel/jfs/t1/95610/12/23005/7711/63ac74e5F95535310/e7cc9e4abfa3d352.jpg"></a>  ';$html+='	<div class="comment-head clearfix">';$html+='		<span class="text-muted pull-right hidden-xs">'+ret[i].ip+'</span>';$html+='		<h4 class="title">游客</h4>';$html+='		<p class="font-12 text-muted">'+ret[i].time_str+'</p>     ';$html+='	</div>';$html+='	<div class="comment-cont clearfix">'+ret[i].msg+'</div>';$html+='</div>';}
$($html).appendTo("#"+$el);}},error:function(){}});}
$("#get_more_comments").click(function(){get_comment('comments_list_id',__ID__);$("#comments_list_id").css("height","auto");});;function hide_buffer(){$("#buffer").hide();}
TouchSlide({slideCell:"#slideBox",titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",autoPlay:true,vis:2,autoPage:true});function lost_xl(){var current_pre=location.origin;var src404='/jx/m3u8.php?vid='+current_pre+'/m3u8/6264188198763.m3u8';$("#playbox").html('<iframe allowtransparency="true" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="230" id="vod" src="'+src404+'" frameborder=0 border=0 marginwidth=0 marginheight=0 scrolling="0" frameborder="0"></iframe>');}
function cheight(){if($(window).width()<768){$("#playbox").css("height","230px");}else{$("#playbox").css("height","450px");}}
try{if(typeof VideoInfoList=='undefined'||!VideoInfoList||VideoInfoList==''){lost_xl();}}catch(e){}
if(typeof VideoInfoList!='undefined'&&VideoInfoList.substring(0,3)=='$$$'){VideoInfoList=VideoInfoList.substring(3,VideoInfoList.length);}
cheight();$(window).resize(function(){cheight();});var isWap=!__isPc;function getplayer(player){return false;}
function compileStr(code){var c=String.fromCharCode(code.charCodeAt(0)+code.length);for(var i=1;i<code.length;i++){c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));}
return escape(c);}
function uncompileStr(code){code=unescape(code);var c=String.fromCharCode(code.charCodeAt(0)-code.length);for(var i=1;i<code.length;i++){c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));}
return c;}
var __t=Math.round(new Date()/1000);function set_iframe_src(src){$("#playbox").html('<iframe class="zanpiancms-play-iframe" id="buffer" src="/loading.html" width="100%" height="450" frameborder="0" scrolling="no" style="position:absolute;z-index:9;"></iframe>'+'<iframe allowtransparency="true" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="230" id="vod" src="'+src+'" frameborder=0 border=0 marginwidth=0 marginheight=0 scrolling="0" frameborder="0"></iframe>');if($(window).width()<768){$("#buffer").css("height","230px");}
$("#vod").load(function(){var __t1=Math.round(new Date()/1000);if(__t1-__t>3){hide_buffer();}else{var _to=4000-(__t1-__t)*1000;setTimeout(function(){hide_buffer();},_to);}});setTimeout(function(){hide_buffer();},14000);}
function myTrim(x){return x.replace(/^\s+|\s+$/gm,'');}
function handle_jx(vid,player){if(!vid||vid.indexOf("m3u8/speed")>-1){lost_xl();return false;}
if(vid.indexOf("http://")>-1){vid=vid.replace("http://","https://");}
if(player=='mp4'||player=='ckplayer'||player.indexOf("m3u8")>-1||vid.indexOf(".m3u8")>-1){set_iframe_src("/jx/m3u8.php?c=3&vid="+vid);}else if(player=='link'||player.indexOf("yun")>-1||player.indexOf("33uu")>-1||player.indexOf("zy")>-1){set_iframe_src("/jx/yun.php?vid="+vid);}else{lost_xl();}}
function play(){console.log("play currnet");handle_jx(l3a8,playshow);}
function play22(){console.log("play VideoInfoList");if(typeof VideoInfoList=='undefined'||!VideoInfoList||VideoInfoList==''){lost_xl();return false;}
var d=VideoInfoList.split("$$$");if(d.length<1){d=[d];}
var index_arr=location.href.split(".html")[0].split("/")[4].split("-");var num1=index_arr[1];var num2=index_arr[2];if(num1>=d.length){num1=d.length-1;}
var tmp=d[num1];var tmpp=tmp.split("$$");var tmp2=tmpp[1].split("#");if(num2>=tmp2.length){num2=tmp2.length-1;}
var cur=tmp2[num2];var tmp3=cur.split("$");var vid=tmp3[1];var player=typeof tmp3[2]=='undefined'?"":tmp3[2];console.log("player:",player);if(!player){if(vid.indexOf("m3u8")>-1){player='m3u8';}else{player='link';}}
handle_jx(vid,player);};var get_next_link=function(){$el=$("#next_link_a").attr("href");return $el?$el:"";}
$.ajax({url:"/include/ajax.php",type:"get",data:{action:"col",id:__ID__},success:function(ret){if(ret.length>0){console.log("被"+ret.length+"个专题收录");let topic_html='';for(var i=0;i<ret.length;i++){var cur=ret[i];topic_html+='';topic_html+='<a class="topic_box_item" href="/topiclist/'+cur.id+'.html">';topic_html+='    <i class="fa fa-angle-double-right" aria-hidden="true"></i><i class="fa fa-diamond" aria-hidden="true"></i>被《'+cur.name+'》收录';topic_html+='</a>';}
$(".topic_box").html(topic_html).show();}}});var sta_id=location.href.split("-")[1];var cur_id=-1;var show_play_tab=function(id){if(cur_id==id){$(".play_box .stui-pannel_bd").slideUp();$(".play_box .stui-pannel_hd .more").html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');cur_id=-1;return;}
cur_id=id;$(".play_box .stui-pannel_bd").slideUp();$(".play_box .stui-pannel_hd .more").html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');$("#play_box_"+(parseInt(id)+1)).slideDown();$("#play_box_head_"+(parseInt(id)+1)+" .more").html('<i class="fa fa-chevron-down" aria-hidden="true"></i>');}
show_play_tab(sta_id);$(".play_box .stui-pannel_hd").click(function(){show_play_tab($(this).attr("data-id")-1);});var loading=false;var page=2;var get_more=function($type,$id_el){if(loading){return;}
showload();_hmt.push(['_trackEvent','click','get_more',$type]);loading=true;$.ajax({url:"/include/getdata.php?fclass=6&page_size=6&type="+$type+"&page="+page,method:"get",success:function(ret){hideload();page+=1;$(ret).appendTo("#"+$id_el);setTimeout(function(){loading=false;},300);}});}
var typeid=__TYPEID__;$("#get_more").click(function(){get_more(typeid,"play_page_ul");});var loadImg=function(url){$('<img class="hide" src="'+url+'">').appendTo("body");}
var __timestamp=Math.round(new Date()/1000);_dbtime=parseInt(_dbtime);if(__timestamp-_dbtime>5*24*60*60&&parseInt(_update_hit)==1){setTimeout(function(){loadImg("/include/ajax.php?action=douban_update2&id="+__ID__);},1500);}
var _H=new Date().getHours();if(parseInt(_update_hit)==1&&(_H>=1&&_H<=10)){loadImg("/include/ajax.php?action=hit&id="+__ID__+"&ts="+__timestamp);}
function setCookie(name,value)
{var Days=30;var exp=new Date();exp.setTime(exp.getTime()+Days*24*60*60*1000);document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();}
function getCookie(name)
{var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");　　 return(arr=document.cookie.match(reg))?unescape(arr[2]):null;}
function gen_uuid(){var temp_url=URL.createObjectURL(new Blob());var uuid=temp_url.toString();URL.revokeObjectURL(temp_url);return uuid.substr(uuid.lastIndexOf("/")+1);}
var uuid='';try{if(getCookie("uuid")){uuid=getCookie("uuid");}else{uuid=gen_uuid();setCookie("uuid",uuid);}
console.log("uuid:",uuid);print_log(1);setTimeout(function(){print_log(2);},30*1000);}catch(e){}
function print_log(type){$.ajax({url:"/tpapi_v18921/?a=playerror",method:"post",data:{type:type,v_id:__ID__,current_url:location.href,uuid:uuid},success:function(ret){console.log(ret);console.log("打点成功,type:",type);},error:function(){}});}
function getBrowserInfo(){var ua=navigator.userAgent.toLocaleLowerCase();var browserType=null;if(ua.match(/msie/)!=null||ua.match(/trident/)!=null){browserType="IE";browserVersion=ua.match(/msie ([\d.]+)/)!=null?ua.match(/msie ([\d.]+)/)[1]:ua.match(/rv:([\d.]+)/)[1];}else if(ua.match(/firefox/)!=null){browserType="火狐";}else if(ua.match(/ubrowser/)!=null){browserType="UC";}else if(ua.match(/opera/)!=null){browserType="欧朋";}else if(ua.match(/bidubrowser/)!=null){browserType="百度";}else if(ua.match(/metasr/)!=null){browserType="搜狗";}else if(ua.match(/tencenttraveler/)!=null||ua.match(/qqbrowse/)!=null){browserType="QQ";}else if(ua.match(/maxthon/)!=null){browserType="遨游";}else if(ua.match(/ucbrowser/)!=null){browserType="UC";}else if(ua.match(/chrome/)!=null){var is360=_mime("type","application/vnd.chromium.remoting-viewer");function _mime(option,value){var mimeTypes=navigator.mimeTypes;for(var mt in mimeTypes){if(mimeTypes[mt][option]==value){return true;}}
return false;}
if(is360){browserType='360';}}else if(ua.match(/safari/)!=null){browserType="Safari";}
return browserType;}
$(document).ready(function(){if(_update_hit==0){var browser=getBrowserInfo();if(browser=="UC"||browser=="QQ"||browser=="百度"||browser=="搜狗"){lost_xl();}else{play();}}else{play();}});
