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

