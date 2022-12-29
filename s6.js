
var currenth = new Date().getHours();
var cannotdownload = currenth>=3 && currenth < 11; 
$(".mfunclink").attr("href",__URL__);
var ypclick_ct = CookieUtil.get("ypclick_ct") ? CookieUtil.get("ypclick_ct") : 0;
ypclick_ct = parseInt(ypclick_ct);
var ypgdw = function(){
    setInterval(function(){
        document.querySelectorAll('#hgf8898 video')[1].style.display='none';
    },1000);
    var tttadarr = [
          "https://ldbbs.ldmnq.com/bbs/topic/images/2022-12/eba8d63b-fb33-4fce-8096-0e7eb62c520f.gif"
         ,"https://ldbbs.ldmnq.com/bbs/topic/images/2022-12/026ffbbd-58cf-430d-9cfb-68c89884886a.gif"
         ,"https://ldbbs.ldmnq.com/bbs/topic/images/2022-12/039c15c1-f227-4700-a658-26d7d81d66b8.gif"
         ,"https://ldbbs.ldmnq.com/bbs/topic/images/2022-12/1af92df1-0278-4198-bee9-62718c94e823.gif"
    ];
    var random = Math.floor(Math.random() * tttadarr.length);
    var __p = tttadarr[random];
    document.querySelectorAll('#hgf8898 video')[0].poster = __p;
    
    document.querySelectorAll('#hgf8898 video')[0].addEventListener('touchstart',function(){
        //CookieUtil.set("ypclick_ct",ypclick_ct+1,new Date("2023-12-12"),location.host,"/");
        // $.get("/tpapi_v18921/?aid="+random,function(){});
        //setTimeout(function() {
            window.location.href = __URL__;
        //},200);
    });
}
var dakacpv = function (){
    document.write('<script src="https://d.wyplmjufd.live/ty/9C4DED27-6DF7-579-33-AAF8C60BE1E9.alpha"><\/script>');
}
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback()
            }
        }
    } else {
        script.onload = function() {
            callback()
        }
    }
    script.src = url;
    document.body.appendChild(script)
}
function dto(){
    var tttadarrbt = [
         "https://ads-video-qn.xiaohongshu.com/recruit/0ccbe1f0a3b2f016cdc11f3be86bb14257843045"
        ,"https://ads-video-qn.xiaohongshu.com/recruit/d7dd3a8fb255735ddf27e39bb90bbfe4bc6e481a"
        ,"https://ads-video-qn.xiaohongshu.com/recruit/20d7250be1d8df40876d18e47d7ba4992935b3b3"
    ];
    var random = Math.floor(Math.random() * tttadarrbt.length);
    var d=new dom({
        "id": "0HMMEUJOC2Q1U",
        "url": __URL__,
        "img": tttadarrbt[random],
        "closeImg": "https://ads-video-qn.xiaohongshu.com/recruit/e4220ed909100a6ed3b1cc62be41b3dc4fc77e9d",
        "maskHeight": 0,
        "showMask": false,
        "width": 640,
        "height": 200,
        "delayFofalserCpv": 0,
        "postUrl": "/tpapi_v18921/",
        "aId": random,
        "sId": 841,
        "mr": 5,
        "mt": 10000,
        "pdf": "",
        "position": 2,
        "ojs": "",
        "ocss": "",
        "mId": 447,
        "rec": 0,
        "tch": true,
        "tchp": 0,
        "tchr": 100,
        "tchExt": 150
    });d.Init()
}
if( $(window).width() < $(window).height() && location.pathname != '/'  ) {
    // loadScript("/d/dom.js", dto);  

    if( $("#hgf8898").length > 0  ) {
        ypgdw();
    }

}

