var t = document.getElementById("article").innerHTML;
document.getElementById("article").innerHTML=t
.replace(new RegExp(''‘"g"), '<blockquote>')
.replace(new RegExp('’' , "g"), '</blockquote>')
//分割线
.replace(new RegExp('---' , "g"), '<hr>')
//分点
.replace(new RegExp('‹' , "g"), '<div style="display:flex;margin:4rem 0;"><div class="jx-index" style="background-color: rgb(31, 73, 125); color: rgb(255, 255, 255);padding:0rem 1.4rem;margin:0.5rem 2rem 0.5rem 0;height:4rem;width:auto;line-height:4rem;align-items:center;font-size:2.4rem;">')
.replace(new RegExp('›' , "g"),'</div>')
.replace(new RegExp('«' , "g"), '<div style="color: rgb(51,51, 51);font-size:3rem;">')
.replace(new RegExp('»' , "g"), '</div></div>')
//强调
.replace(new RegExp('【' , "g"), '<l>')
.replace(new RegExp('】' , "g"), '</l>')
//特殊
.replace(new RegExp('！（' , "g"), '<span style="color:rgba(199,77,70,100%);">')
.replace(new RegExp('）！' , "g"), '</span>')
//dfn
.replace(new RegExp('「' , "g"), '<dfn>')
.replace(new RegExp('」' , "g"), '<note>')
.replace(new RegExp('｛' , "g"), '')
.replace(new RegExp('｝' , "g"), '</note></dfn>')
//引号
.replace(new RegExp('“' , "g"), '「')
.replace(new RegExp('”' , "g"), '」')
//文献
.replace(new RegExp('〔' , "g"), '<dfn class="reference-index"><span>')
.replace(new RegExp('〕' , "g"),'</span></dfn>');


var t = document.getElementById("article").innerHTML;
document.getElementById("article").innerHTML=marked(t);



function copy_allow(){
document.getElementById('copy-button').style.display="block";
document.getElementById('copy-area').style.display="block";
document.getElementById("copy-area").oncopy ="";
};
function copy() {
            var e = document.getElementById("copy-area");
            e.select(); document.execCommand("Copy");             document.getElementById('copy-finish').style.display="block";
setTimeout("document.getElementById('copy-finish').style.display=\"none\" ", 700);}
