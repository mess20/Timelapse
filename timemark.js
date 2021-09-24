window.onload=function timemark(){
var t = document.getElementById("article").innerHTML;
document.getElementById("article").innerHTML=t
//分割线
.replace(new RegExp('---' , "g"), '<hr>')
//强调
.replace(new RegExp('【' , "g"), '<mark>')
.replace(new RegExp('】' , "g"), '</mark>')
//特殊
.replace(new RegExp('（' , "g"), '<n>')
.replace(new RegExp('）' , "g"), '</n>')
//dfn
.replace(new RegExp('「' , "g"), '<dfn>')
.replace(new RegExp('」' , "g"), '<note>')
.replace(new RegExp('｛' , "g"), '')
.replace(new RegExp('｝' , "g"), '</note></dfn>')
//文献
.replace(new RegExp('〔' , "g"), '<dfn class="reference-index"><span>')
.replace(new RegExp('〕' , "g"),'</span></dfn>');

var t = document.getElementById("article").innerHTML;
document.getElementById("article").innerHTML=marked(t);
};
function copy_allow(){
document.getElementById('copy-button').style.display="block";
document.getElementById('copy-area').style.display="block";
document.getElementById("copy-area").oncopy ="";
};
function copy() {
            var e = document.getElementById("copy-area");
            e.select(); document.execCommand("Copy");             document.getElementById('copy-finish').style.display="block";
setTimeout("document.getElementById('copy-finish').style.display=\"none\" ", 700);}
