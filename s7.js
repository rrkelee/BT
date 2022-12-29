$("#code_input").focus();
var shis_item = "shis_item";
var add = [_kw,Math.round(new Date().getTime()/1000)];
localforage.getItem(shis_item).then(function(val){
  if (!val) {
    localforage.setItem(shis_item,[add]).then(function(val){});
  }else{
    var tmp = [];
    for (var i = 0; i <val.length; i++) {
      if (val[i][0]!=add[0]) {
        tmp.push(val[i]);
      }
    }
    if ( tmp.length >=12 ) {
    	var shift_length = tmp.length -11;
    	for (var i = 0; i < shift_length; i++) {
    		tmp.shift();
    	}
    }
    tmp.push(add);
    localforage.setItem(shis_item,tmp).then(function(val){});
  }
});
// 刷新验证码
var set_code = function(){
    ///tpapi_v18921/?a=code
    $("#codeimg").attr("src","/tpapi_v18921/?a=code&v="+  (Math.random()*100000000)  ).show();
    $("#code_input").val("");
}
$("#codeimg").click(function(){
    set_code();
});
var submitsearch = function(){
    var _code = $("#code_input").val();
    
    if( !_code || _code.length !=4 ){
        alert("验证码错误");
        return false;
    }
    var _post = {
        page:_page,
        kw:_kw,
        code:_code
    };
    console.log(_post);

    showload();
    $.ajax({
        url:"/tpapi_v18921/?a=search_data",
        method:"post",
        data:_post,success:function(ret){
            set_code();
            hideload();
            console.log(ret);
            if(ret.code==200){
                $(".submit-box").hide();
                var _html = '';
                if( ret.data.ct < 1 ){
                    alert("没有相关结果，换个词试试吧~");
                    window.location.href='/single_s.html';
                    return false;
                }
                var val = ret.data.list;
                for (var i = 0; i < val.length; i++) { 
                    var cur = val[i];
                    _html += '<li class="activeclearfix" >';
                    _html += '<div class="thumb"><a class="v-thumb stui-vodlist__thumb lazyload" href="/movie/index'+cur["v_id"]+'.html" alt="'+cur["v_name"]+'" > <img class="vlistpic" referrerpolicy="no-referrer" src="'+cur["v_pic"]+'" /> <span class="play hidden-xs"></span></a></div>';
                    _html += '<div class="detail">';
                    _html += '<h3 class="title"><a href="/movie/index'+cur["v_id"]+'.html">'+cur["v_name"]+'</a></h3>';
                    _html += '<p><span class="text-muted">导演：</span>'+cur["v_director"]+'</p>';
                    _html += '<p  style="word-break:break-all;"><span class="text-muted">主演：</span>'+cur["v_actor"]+'</p>';
                    if( cur["v_nickname"] ){
                        _html += '<p><span class="text-muted">别名：</span>'+cur["v_nickname"]+'</p>';
                    }
                    _html += '<p><span class="text-muted">地区：</span>'+cur["v_publisharea"]+'</p>';
                    _html += '<p><span class="text-muted">年份：</span>'+cur["v_publishyear"]+'</p>';
                    
                    _html += '</div></li>';
                }

                $("#search_res").html(_html);
                if( ret.data.total_page > 1 ){
                    var _tpage = ret.data.total_page;
                    $(".stui-page").show();
                    // jspage1 上一页
                    var _pre_page = _page-1 < 1?1:_page-1;
                    var _pre_page_link = '/search/'+_kw+'-'+_pre_page+'.html';
                    var _next_page_link = '/search/'+_kw+'-'+(_page+1)+'.html';
                    var _last_link = '/search/'+_kw+'-'+_tpage+'.html';
                    $(".jspage1").attr("href",_pre_page_link);
                    $(".jspage2").attr("href",_next_page_link);
                    $(".jspage3").attr("href",_last_link);
                    $(".jspage4").text(_page+'/'+_tpage);
                    $("#tnum").text(ret.data.ct);
                }
            }else{
                $("#code_input").val('');
                alert("提交失败，"+ret.msg);
            }
        },error:function(){
            set_code();
        }
    });
}   
$("#code_input").keyup(function(e){
    if( e.keyCode ==13 ){
        submitsearch();
    }
});
$("#submitsearch").click(function(){
    submitsearch();
});
$(".keyboard a").each(function(){
    var _t = $(this);
    var _v = _t.text();
    $(this).click(function(e){
    console.log(_v);
    var old = $("#code_input").val();
    var __new = '';
    if( _v != '删除' ) {
    if(old.length==4) {
    return false;
    }
    __new = old+""+_v;
    }
    if( _v =='删除' ) {
    __new = old.substr(0,old.length-1);
    }
    if( _v =='刷新' ) {
    set_code();
    return false;
    }
    $("#code_input").val(__new);
    });
});
