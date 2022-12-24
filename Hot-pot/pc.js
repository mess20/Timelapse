link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css'); document.body.appendChild(link);

link1 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('href', 'https://mess20.github.io/css/magic effect.css'); document.body.appendChild(link1);

$("body").append(" <div style=\"z-index:6001;display:flex;justify-content:space-around; position:fixed;bottom:1.6vh;left:80vw;width:12vw;height:2rem;\">     <btn id=\"btn-intro\" style=\"\"><i class=\"fa fa-address-card-o\" ></i></btn>  <btn id=\"btn-intro1\" style=\"display:none\"><i class=\"fa fa-address-card-o\" ></i></btn> <btn id=\"btn-bg\" style=\"\"><i class=\"fa fa-home\" ></i></btn>  <btn id=\"btn-bg1\" style=\"display:none\"><i class=\"fa fa-home\" ></i></btn>     <btn id=\"btn-music\" style=\"\"><i class=\"fa fa-music\" ></i></btn>     <btn id=\"btn-music1\" style=\"display:none\"><i class=\"fa fa-music\" ></i></btn>   <btn id=\"btn-draw\" style=\"\"><i class=\"fa fa-pencil-square-o\" ></i></btn>  <btn id=\"btn-draw1\" style=\"display:none\"><i class=\"fa fa-pencil-square-o\" ></i></btn>   <btn id=\"btn-gift\" style=\"\"><i class=\"fa fa-gift\" ></i></btn>    <btn id=\"btn-dice\" style=\"\"><i class=\"fa fa-flickr\" ></i></btn>       </div>                                <iframe id=\"canvas\" width=464 height=546 style=\"display:none;position:fixed;right:0;bottom:6vh;\" src=\"https://docs.qq.com/sheet/DZVpEd2dWeEREbHBt?tab=BB08J2&friendUin=%25252FMUNF%25252F48yWmypUvpR1gBfw%25253D%25253D&ADUIN=894585937&ADSESSION=1671534809&ADTAG=CLIENT.QQ.5657_.0&ADPUBNO=27161&u=41a94bad10e74f17adae0caa32ca5027\"> </iframe>    <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86      src=\"//music.163.com/outchain/player?type=2&id=1846238516&auto=1&height=32\" style=\'z-index:;position:fixed;left:0;bottom:16vh;\'></iframe>   <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86  src=\"//music.163.com/outchain/player?type=2&id=1949220104&auto=1&height=32\" style=\'z-index:;position:fixed;left:0;bottom:12vh;\'></iframe>         <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86 src=\"//music.163.com/outchain/player?type=2&id=1949220109&auto=1&height=32\"  style=\'z-index:;position:fixed;left:0;bottom:8vh;\'></iframe>      <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86 src=\"//music.163.com/outchain/player?type=2&id=1948287005&auto=1&height=32\"  style=\'z-index:;position:fixed;left:0;bottom:4vh;\'></iframe>      <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86   src=\"//music.163.com/outchain/player?type=2&id=33471594&auto=1&height=32\" style=\'z-index:;position:fixed;left:0;bottom:0vh;\'></iframe>  <div id=\"intro\" style=\"position:fixed;left:28vw;right:28vw;top:17vh;bottom:7vh;background:#333;color:;border-radius:50px;display:none;z-index:100000;padding:3rem 4.5rem 4.5rem 4.5rem;font-size:1.3rem;line-height:2.6rem\"><h3>关于 Timelapse</h3><b><a href=\"https://github.com/mess20/Timelapse#readme\" style=\"color:yellow\">来自 Timelapse 的邀请函</a></b><b><br>Timelapse 网络社交群的基本介绍</b><br>Timelapse 暂无线下联系活动。</br>Timelapse 会员可以加入Timelapse 的社群方便联络。<br>目前 Timelapse 设有QQ群、微信群两个会员联系群，两群消息同步。</br>Timelapse 的主题是乐趣、科学、理想、创造。</br>Timelapse 鼓励成员自我管理、荣辱与共、快乐共享、大胆追梦。</br></br><b>关于入会的说明</b></br>加入组织方式：以任何恰当方式提出入组织申请（或向创始人 以某一具体身份，宣布自己是timelapse成员），保证短时间段内不动摇。组织成立初期入会须经创始人同意。</br>加入组织后想法有变允许自愿离开。</br>加入组织后，自愿担任组织某项甚至多项职务。</br>加入组织后可以加群——qq，微信，微博（微博暂时有点麻烦） </br>入会要求：Timelapse 成员不得故意损害 Timelapse 的利益或荣誉。</div> ");  


setTimeout(function(){
//火锅场景
$("#btn-bg").bind("click",function(){
$("body").css({"background":"url('https://i.328888.xyz/2022/12/24/DbIta.jpeg') no-repeat"});	
$("body").css({"background-size":"cover"});
$("body").css({"background-attachment":"fixed"});

$("#btn-bg1").css({"display":"block"});
$("#btn-bg").css({"display":"none"});

var f=setInterval(function(){
$(".tail-mask").css({"display":"none"});	
$(".tail-wrap").css({"display":"none"});	
},100);

$("#btn-bg1").bind("click",function(){
clearInterval(f);
$("body").css({"background":"black"});
$(".tail-mask").css({"display":"block"});	
$(".tail-wrap").css({"display":"block"});	
$("#btn-bg1").css({"display":"none"});
$("#btn-bg").css({"display":"block"});
})


});



//投掷骰子
$("#btn-dice").bind("click",function(){;
var n = Math.round(Math.random()*(12-1)+1);
$("[name='message']").val("/me掷出了点数"+ n);
$("[name='post']").submit();

});

//盲盒系统
$("#btn-gift").bind("click",function(){
var key = prompt('请书写开盒咒语','');
if(key == '祝Timelapse红红火火恍恍惚惚！'){
var n = Math.round(Math.random()*(23-1)+1);
if(n=='1'){var gift = '蔬菜抱枕';}
if(n=='3'){var gift = '腊八主题壁纸·糯米';}
if(n=='4'){var gift = '腊八主题壁纸·荞麦';}
if(n=='5'){var gift = '腊八主题壁纸·黄豆';}
if(n=='6'){var gift = '腊八主题情侣壁纸·栗子';}
if(n=='7'){var gift = '腊八主题壁纸·枸杞';}
if(n=='8'){var gift = '腊八主题壁纸·薏仁';}
if(n=='9'){var gift = '腊八主题壁纸·花生';}
if(n=='10'){var gift = '腊八主题壁纸·红豆';}
if(n=='11'){var gift = '腊八主题壁纸·芸豆';}
if(n=='12'){var gift = '腊八主题壁纸·桂圆';}
if(n=='13'){var gift = '腊八主题壁纸·红枣';}
if(n=='14'){var gift = '腊八主题壁纸·核桃';}
if(n=='15'){var gift = '腊八主题壁纸·莲子';}
if(n=='16'){var gift = '腊八主题壁纸·黑豆';}
if(n=='17'){var gift = '腊八主题壁纸·黑米';}
if(n=='18'){var gift = '腊八主题壁纸·大米';}
if(n=='19'){var gift = '毛绒兔子发夹';}
if(n=='20'){var gift = '兔子奶酪新春款可爱手账贴纸';}
if(n=='21'){var gift = '毛绒兔子钥匙挂件';}
if(n=='22'){var gift = '毛绒橘子发夹';}
if(n=='23'){var gift = '毛绒兔子发夹';}
if(n=='2'){var gift = '毛绒兔子钥匙扣';}
alert("恭喜您抽中【"+gift+'】');
$("[name='message']").val("/me抽中了礼品【" + gift + '】');
$("[name='post']").submit();
$("#btn-gift").hide();
}else{alert("咒语无效")}
})

//查看像素图
$("#btn-draw").bind("click",function(){
$("#canvas").css({"display": "block" });
$("#canvas").css({"z-index": "100001"});
$("#btn-draw1").css({"display": "block"});
$("#btn-draw").css({"display": "none"});

$("#btn-draw1").bind("click",function(){
$("#canvas").css({"display": "none"});
$("#btn-draw1").css({"display": "none"});
$("#btn-draw").css({"display": "block"});
})

});


//音乐栏
$("#btn-music ").bind("click",function(){
$("iframe").css({"display": "none" });
$("#btn-music1").css({"display": "block"});
$("#btn-music").css({"display": "none"});

$("#btn-music1").bind("click",function(){
$("iframe").css({"display": "block" });
$("#canvas").css({"display": "none" });
$("#btn-music1").css({"display": "none"});
$("#btn-music").css({"display": "block"});
})

});


//组织介绍
$("#btn-intro").bind("click",function(){
$("#intro").css({"display": "block" });
$("#btn-intro1").css({"display": "block"});
$("#btn-intro").css({"display": "none"});

$("#btn-intro1").bind("click",function(){
$("#intro").css({"display": "none" });
$("#btn-intro1").css({"display": "none"});
$("#btn-intro").css({"display": "block"});
})

});


},1000)
