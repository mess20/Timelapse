link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css'); document.body.appendChild(link);

link1 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('href', 'https://mess20.github.io/css/magic effect.css'); document.body.appendChild(link1);

$("body").append(" <div style=\"z-index:6001;display:flex;justify-content:space-around; position:fixed;bottom:1.6vh;left:80vw;width:12vw;height:2rem;\">     <btn id=\"btn-intro\" style=\"\"><i class=\"fa fa-address-card-o\" ></i></btn>  <btn id=\"btn-intro1\" style=\"display:none\"><i class=\"fa fa-address-card-o\" ></i></btn> <btn id=\"btn-bg\" style=\"\"><i class=\"fa fa-home\" ></i></btn>  <btn id=\"btn-bg1\" style=\"display:none\"><i class=\"fa fa-home\" ></i></btn>     <btn id=\"btn-music\" style=\"\"><i class=\"fa fa-music\" ></i></btn>     <btn id=\"btn-music1\" style=\"display:none\"><i class=\"fa fa-music\" ></i></btn>   <btn id=\"btn-draw\" style=\"\"><i class=\"fa fa-pencil-square-o\" ></i></btn>  <btn id=\"btn-draw1\" style=\"display:none\"><i class=\"fa fa-pencil-square-o\" ></i></btn>   <btn id=\"btn-gift\" style=\"\"><i class=\"fa fa-gift\" ></i></btn>    <btn id=\"btn-dice\" style=\"\"><i class=\"fa fa-flickr\" ></i></btn>       </div>                                <iframe id=\"canvas\" width=464 height=546 style=\"display:none;position:fixed;right:0;bottom:6vh;\" src=\"https://docs.qq.com/sheet/DZVpEd2dWeEREbHBt?tab=BB08J2&friendUin=%25252FMUNF%25252F48yWmypUvpR1gBfw%25253D%25253D&ADUIN=894585937&ADSESSION=1671534809&ADTAG=CLIENT.QQ.5657_.0&ADPUBNO=27161&u=41a94bad10e74f17adae0caa32ca5027\"> </iframe>    <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86      src=\"//music.163.com/outchain/player?type=2&id=1846238516&auto=1&height=32\" style=\'z-index:;position:fixed;left:0;bottom:16vh;\'></iframe>   <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86  src=\"//music.163.com/outchain/player?type=2&id=1949220104&auto=1&height=32\" style=\'z-index:;position:fixed;left:0;bottom:12vh;\'></iframe>         <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86 src=\"//music.163.com/outchain/player?type=2&id=1949220109&auto=1&height=32\"  style=\'z-index:;position:fixed;left:0;bottom:8vh;\'></iframe>      <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86 src=\"//music.163.com/outchain/player?type=2&id=1948287005&auto=1&height=32\"  style=\'z-index:;position:fixed;left:0;bottom:4vh;\'></iframe>      <iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86   src=\"//music.163.com/outchain/player?type=2&id=33471594&auto=1&height=32\" style=\'z-index:;position:fixed;left:0;bottom:0vh;\'></iframe>  <div id=\"intro\" style=\"position:fixed;left:28vw;right:28vw;top:17vh;bottom:7vh;background:#333;color:;border-radius:50px;display:none;z-index:100000;padding:3rem 4.5rem 4.5rem 4.5rem;font-size:1.3rem;line-height:2.6rem\"><h3>?????? Timelapse</h3><b><a href=\"https://github.com/mess20/Timelapse#readme\" style=\"color:yellow\">?????? Timelapse ????????????</a></b><b><br>Timelapse ??????????????????????????????</b><br>Timelapse ???????????????????????????</br>Timelapse ??????????????????Timelapse ????????????????????????<br>?????? Timelapse ??????QQ????????????????????????????????????????????????????????????</br>Timelapse ????????????????????????????????????????????????</br>Timelapse ????????????????????????????????????????????????????????????????????????</br></br><b>?????????????????????</b></br>????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????timelapse?????????????????????????????????????????????????????????????????????????????????????????????</br>????????????????????????????????????????????????</br>???????????????????????????????????????????????????????????????</br>???????????????????????? Timelapse ??? QQ??????????????? </br>???????????????Timelapse ???????????????????????? Timelapse ?????????????????????</div> ");  


setTimeout(function(){
//????????????
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



//????????????
$("#btn-dice").bind("click",function(){;
var n = Math.round(Math.random()*(12-1)+1);
$("[name='message']").val("/me???????????????"+ n);
$("[name='post']").submit();

});

//????????????
$("#btn-gift").bind("click",function(){
var key = prompt('?????????????????????','');
if(key == '???Timelapse???????????????????????????'){
var n = Math.round(Math.random()*(23-1)+1);
if(n=='1'){var gift = '????????????';}
if(n=='3'){var gift = '??????????????????????????';}
if(n=='4'){var gift = '??????????????????????????';}
if(n=='5'){var gift = '??????????????????????????';}
if(n=='6'){var gift = '????????????????????????????????';}
if(n=='7'){var gift = '??????????????????????????';}
if(n=='8'){var gift = '??????????????????????????';}
if(n=='9'){var gift = '??????????????????????????';}
if(n=='10'){var gift = '??????????????????????????';}
if(n=='11'){var gift = '??????????????????????????';}
if(n=='12'){var gift = '??????????????????????????';}
if(n=='13'){var gift = '??????????????????????????';}
if(n=='14'){var gift = '??????????????????????????';}
if(n=='15'){var gift = '??????????????????????????';}
if(n=='16'){var gift = '??????????????????????????';}
if(n=='17'){var gift = '??????????????????????????';}
if(n=='18'){var gift = '??????????????????????????';}
if(n=='19'){var gift = '??????????????????';}
if(n=='20'){var gift = '???????????????????????????????????????';}
if(n=='21'){var gift = '????????????????????????';}
if(n=='22'){var gift = '??????????????????';}
if(n=='23'){var gift = '??????????????????';}
if(n=='2'){var gift = '?????????????????????';}
alert("??????????????????"+gift+'???');
$("[name='message']").val("/me??????????????????" + gift + '???');
$("[name='post']").submit();
$("#btn-gift").hide();
}else{alert("????????????")}
})

//???????????????
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


//?????????
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


//????????????
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
