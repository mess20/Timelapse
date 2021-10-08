var t = document.getElementById("article").innerHTML;
document.getElementById("article").innerHTML=t
//代码
.replace(new RegExp('“' , "g"), '<textarea>')
.replace(new RegExp('”' , "g"), '</textarea>')
.replace(new RegExp('‘' , "g"), '<blockquote>')
.replace(new RegExp('’' , "g"), '</blockquote>')
//分割线
.replace(new RegExp('---' , "g"), '<hr>')
//分点
.replace(new RegExp('‹' , "g"), '<div style="display:flex;margin:4rem 0;"><div style="background-color: rgb(31, 73, 125); color: rgb(255, 255, 255);padding:0rem 1.4rem;margin:0.5rem 2rem 0.5rem 0;height:4rem;width:auto;line-height:4rem;align-items:center;font-size:2.4rem;">')
.replace(new RegExp('›' , "g"),'</div>')
.replace(new RegExp('«' , "g"), '<div style="color: rgb(51,51, 51);font-size:3rem;">')
.replace(new RegExp('»' , "g"), '</div></div>')
//强调
.replace(new RegExp('【' , "g"), '<l>')
.replace(new RegExp('】' , "g"), '</l>')
//特殊
.replace(new RegExp('！（' , "g"), '<span style="color:rgba(199,77,70,100%);">')
.replace(new RegExp('）' , "g"), '</span>')
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

var t = document.body.innerHTML;
document.body.innerHTML=t
.replace(new RegExp('“' , "g"), '<textarea>')
.replace(new RegExp('”' , "g"), '</textarea>')
.replace(new RegExp('‘' , "g"), '<blockquote>')
.replace(new RegExp('’' , "g"), '</blockquote>');

var main = document.getElementById("article");
var str = main.innerHTML;


function keyword1() {
document.getElementById("keyword-ul").style.display="block";
};

function keyword2() {
var C = prompt("输入关键词","");
        if(C!=null&&C!=''){
document.getElementById("searched-button").style.display="block";
var D = "<k>" + C + "</k>";
document.getElementById("article").innerHTML= str.replace(new RegExp(C , "g"), D);

document.getElementById("searched-button").addEventListener('click',function searched() {
document.getElementById("article").innerHTML= str.replace(new RegExp(D , "g"), C);
document.getElementById("searched-button").style.display="none";
})
}
};

function key1() {
var D = "<k>我</k>";
main.innerHTML= str.replace(new RegExp("我", "g"), D);
document.getElementById("searched-button").style.display="block";
document.getElementById("searched-button").addEventListener('click',function f1() {
main.innerHTML= str.replace(new RegExp(D, "g"), "我");
document.getElementById("searched-button").style.display="none";
document.getElementById("keyword-ul").style.display="none";})
};

function key2() {
main.innerHTML= str.replace(new RegExp("内", "g"), "2");
document.getElementById("searched-button").style.display="block";
document.getElementById("searched-button").addEventListener('click',function f2() {
main.innerHTML= str.replace(new RegExp("2" , "g"), "内");
document.getElementById("searched-button").style.display="none";})
};

function key3() {
main.innerHTML= str.replace(new RegExp("容", "g"), "3");
document.getElementById("searched-button").style.display="block";

document.getElementById("searched-button").addEventListener('click',function f3() {
main.innerHTML= str.replace(new RegExp("3" , "g"), "容");
document.getElementById("searched-button").style.display="none";})
}


function copy_allow(){
document.getElementById('copy-button').style.display="block";
document.getElementById('copy-area').style.display="block";
document.getElementById("copy-area").oncopy ="";
};
function copy() {
            var e = document.getElementById("copy-area");
            e.select(); document.execCommand("Copy");             document.getElementById('copy-finish').style.display="block";
setTimeout("document.getElementById('copy-finish').style.display=\"none\" ", 700);}
