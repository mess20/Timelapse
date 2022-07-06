//链接

function a() {
var a = prompt("输入链接内容","");
        if(a!=null&&a!=''){
var content = window.getSelection().toString();
var html='<a href="'+ a + '">' + content + '<i class="fa fa-mail-forward" aria-hidden="true" style="color:#1d65b1;display:none"></i> </a>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     document.selection.createRange().pasteHTML(html);
    };
};
}
//更改自动链接行为（伪）
//function aud() {
var anniu =document.getElementById('self-anniu');
var kaiguan = document.getElementById('self-kaiguan');
var tip = document.getElementById('aud-tip');      
var as = document.getElementsByTagName("a");
           

var temp = 1;
anniu.addEventListener('click',function(){
if(temp==1){
this.className = 'hei';              
temp=0;                
kaiguan.style.border= '2px solid  #be002f';    
tip.style.display="block";
setTimeout("myFunction()",5000);

for(var i=0;i<as.length;i++){      
var a=as[i];      
a.style.color="black";
a.style.textDecoration="none";
a.style.borderBottom="none";
    }
            
}else{                
this.className = 'bai';               
temp=1;               
kaiguan.style.border= '2px solid black';               
for(var i=0;i<as.length;i++){      
var a=as[i];      
a.style.color="black";
a.style.textDecoration="none";
a.style.borderBottom="4px solid #6483B0";
}
}
})
//}
<!--外链后缀-->
window.setInterval('aa()', 1000);
function aa(){
var a = document.querySelectorAll('a[href^="http"] i');
var i;
for (i = 0; i < a.length; i++){
a[i].style.display="inline";
};
}

function open1(){
document.getElementById("button2").style.zIndex="1";
document.getElementById("self-nav").style.display="flex";
};
function close1(){
document.getElementById("button2").style.zIndex="4";
document.getElementById("self-nav").style.display="none";
}

var t
= document.getElementById("textarea");
var button2
= document.getElementById("button2");
var button3
= document.getElementById("button3");
var output
= document.getElementById("wordcourt");
var fsbutton
= document.getElementById("fullView-button");
var temp = 1;
document.getElementById("fullView-button").addEventListener('click',function(){
if(temp==1){
temp=0;
t.className="t1";
button2.className="b1";
button3.className="b3";
output.className="output1";
fsbutton.className="fullView-button2";
fsbutton.innerHTML="半屏"
}else{
temp=1;
t.className="t2";
button2.className="b2";
button3.className="b4";
output.className="output2";
fsbutton.className="fullView-button1";
fsbutton.innerHTML="全屏"
}
})
function ts1(){
document.getElementById("button2").style.zIndex="1";
document.getElementById("ts-nav").style.display="flex";
};
function ts2(){
document.getElementById("ts-nav").style.display="none";
document.getElementById("button2").style.zIndex="4";
}
function insert1(){
document.getElementById("button2").style.zIndex="1";
document.getElementById("insert-nav").style.display="flex";
};
function insert2(){
document.getElementById("insert-nav").style.display="none";
document.getElementById("button2").style.zIndex="4";
}
<!-- 获取html代码-->
function codeOut(){
var code = document.getElementById("c");
var e = document.getElementById("textarea").innerHTML;
code.innerText = e.replace(new RegExp('contenteditable="true"', "g"), '');
code.select();
document.execCommand("Copy");
} 

function open8(){
document.getElementById("f-nav").style.display="flex";
};
function close8(){
document.getElementById("f-nav").style.display="none";
}




<!--添加参考文献 -->
function reference() {
var n = prompt("锚点名","");
var c = prompt("参考文献","");
        if(n!=null&&c!=null){
var content = window.getSelection().toString();
var html='<element id="'+ n + '">' + content + '</element>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     document.selection.createRange().pasteHTML(html);
    };

var node=document.createElement("a");
var textnode=document.createTextNode(c);
node.appendChild(textnode);
document.getElementById("ol").appendChild(node);
node.href = "#"+n;

var nodeList = document.getElementsByTagName('a');
var arrNodes = Array.prototype.slice.call(nodeList);  
var order=arrNodes.indexOf(node);

var e = node.outerHTML;
node.outerHTML= "<li>" + e +"</li>";

var e = document.getElementById(n).innerHTML;
document.getElementById(n).innerHTML= e + "<span style='color:#6483B0;vertical-align:super;margin:0 0.2rem 0 0rem;zoom:0.5'>" + order + "</span>";
}}

<!-- 查看html代码-->

function getCode() {
var code = document.getElementById("textarea").innerHTML;
document.getElementById("code").innerText = code;
} 


function copy() {
document.execCommand("Copy")
};



function myFunction(){
tip.style.display="none"
}






<!--注音-->
function ruby() {
var n = prompt("填写注音","");
        if(n!=null&&n!=''){
var content = window.getSelection().toString();
var html='<ruby>'+ content + '<rp>(</rp><rt>'+n+'</rt><rp>)</rp></ruby>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     
document.selection.createRange().pasteHTML(html);
    }
}}

<!--注释-->
function abbr() {
var n = prompt("填写注释","");
        if(n!=null&&n!=''){
var content = window.getSelection().toString();
var html='<abbr title>'+ content +'<note>'+n+'</note></abbr>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     
document.selection.createRange().pasteHTML(html);
    }
}}
<!--术语-->
function dfn() {
var n = prompt("填写术语","");
        if(n!=null&&n!=''){
var content = window.getSelection().toString();
var html='<dfn>'+ content +'<note>'+n+'</note></dfn>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     
document.selection.createRange().pasteHTML(html);
    }
}}




<!--标识书名-->

function book(){
document.execCommand('insertText', 'false', "【】");
};

function quote(){
document.execCommand('insertText', 'false', "「」");
};



function em1(){
document.execCommand("ForeColor","false",'#fa947d');
};
function em2(){
var content = window.getSelection().toString();
var html='<em2><i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:#f3f2f2;"></i>  ' + content + '</em2>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     
document.selection.createRange().pasteHTML(html);
    };
};
function strong1(){
document.getElementById("strong-nav").style.display="flex";

var content = window.getSelection().toString();
var html='<blockstrong>' + content + '</blockstrong>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     
document.selection.createRange().pasteHTML(html);
    };
};

function strong2(){
document.getElementById("strong-nav").style.display="none";
}
function strongSpclFont1(){
document.execCommand("ForeColor","false",'cornflowerblue');
};
function strongSpclFont2(){
document.execCommand("ForeColor","false",'#a83654');
};
function strongSpclFont3(){
var content = window.getSelection().toString();
var html='<span class="strongSpclFont3">' + content + '</span>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     
document.selection.createRange().pasteHTML(html);
    };
};



<!-- 书签（锚点链接）-->

function bookmark() {
var n = prompt("填写锚点名称","");
        if(n!=null&&n!=''){
var content = window.getSelection().toString();
var html='<element id="'+ n + '">' + content + '</element>';
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     
document.selection.createRange().pasteHTML(html);
    };
document.getElementById("button2").style.zIndex="0";
document.getElementById("mark2-button").style.display="block";
document.getElementById("mark-tip").style.display="block";
document.getElementById("mark2-button").addEventListener("click", function(){
document.getElementById("mark-tip").style.display="none";
document.execCommand('CreateLink', true, "#"+n);
document.getElementById("mark2-button").style.display="none";
document.getElementById("button2").style.zIndex="4"
});



}}





<!--替换-->
function replace() {
var A = prompt("替换内容","");
var B = prompt("替换为","");
        if(A!=null&&A!=''&&B!=null&&B!=''){
var str = document.getElementById("textarea").innerHTML;
document.getElementById("textarea").innerHTML= str.replace(new RegExp(A , "g"), B);
}
}
<!--查找-->
function search() {
var C = prompt("查找内容","");
        if(C!=null&&C!=''){
var str = document.getElementById("textarea").innerHTML;
var D = "<k>" + C + "</k>";
document.getElementById("textarea").innerHTML= str.replace(new RegExp(C , "g"), D);

document.getElementById("searched-button").addEventListener('click',function searched() {
document.getElementById("textarea").innerHTML= str.replace(new RegExp(D , "g"), C);})

}
}




<!--字数统计 -->
function wordCount() {
var length = document.getElementById("textarea");
document.getElementById("output").innerHTML= length.innerHTML.length;
}




//字体;
function ff() {
document.execCommand("FontName","false",sFontName);
};



function ff1() {
document.execCommand("FontName","false","sans-serif");
};
function ff2() {
document.execCommand("FontName","false","serif");
};
function ff3() {
document.execCommand("FontName","false","cursive");
};
function ff4() {
document.execCommand("FontName","false","monospace");
};
function ff5() {
document.execCommand("FontName","false","courier");
};

       
//字体大小;
function fs() {
document.execCommand("FontSize","false","7");
};
function fs1() {
document.execCommand("FontSize","false","1");
};
function fs2() {
document.execCommand("FontSize","false","2");
};
function fs3() {
document.execCommand("FontSize","false","3");
};
function fs4() {
document.execCommand("FontSize","false","4");
};
function fs5() {
document.execCommand("FontSize","false","5");
};
function fs6() {
document.execCommand("FontSize","false","6");
};
function fs7() {
document.execCommand("FontSize","false","7");
};

//加粗;
function b() {
document.execCommand("Bold","false",null);
}; 
//斜体   
function i(){
document.execCommand('Italic');   
};
//下划线
function u() {
document.execCommand("Underline")
} ;
//删除线
function s() {
document.execCommand("StrikeThrough")
} ;
//上标
function superscript(){
document.execCommand("SuperScript")
} ;
//下标
function subscript(){
document.execCommand('subscript', 'false', null);
};
//设置文字颜色;
function fc(){
var color =document.getElementById("fc-thecolor").value;
document.execCommand("ForeColor","false",color);
};
//设置背景颜色;
function bc(){
var color =document.getElementById("bc-thecolor").value;
document.execCommand("BackColor","false",color);
};

//图片
function img(){
if(typeof FileReader=='undifined'){result.innerHTML="<p>抱歉，你的浏览器不支持 FileReader</p>";return false;}var file=document.getElementById("imagefile").files[0];
if(!/image\/\w+/.test(file.type))           
{alert("请确保文件为图像文件");return false;}
var reader=new FileReader();
reader.readAsDataURL(file);
reader.onload=function(e){
document.execCommand("insertImage",true,this.result)
}}
//显示代码
function pre(){
document.execCommand("FormatBlock",false,"<PRE>")
};
//标题
function h1(){
document.execCommand("FormatBlock","false","<h1>")
};
function h2(){
document.execCommand("FormatBlock","false","<h2>")
};
function h3(){
document.execCommand("FormatBlock","false","<h3>")
};
function h4(){
document.execCommand("FormatBlock","false","<h4>")
};
function h5(){
document.execCommand("FormatBlock","false","<h5>")
};
function h6(){
document.execCommand("FormatBlock","false","<h6>")
};
function hh(){
document.execCommand('insertText', 'false', "«»");
}
//缩进
function indent(){
document.execCommand('Indent');  
};
//减少缩进
function outdent(){
document.execCommand('outdent', 'false', null );
};
//分割线
function hr() {
document.execCommand("InsertHorizontalRule")
} ;
//换行
function p() {
document.execCommand("InsertParagraph")
} 
//文本对齐
function jf() {
document.execCommand('justifyFull', 'false', null );
};
//文本居中
function jc(){
document.execCommand('justifyCenter', 'false', null );
};
//文本左对齐
function jl(){
document.execCommand('justifyLeft', 'false', null );
};
//文本右对齐
function jr(){
document.execCommand('justifyRight', 'false', null );
};
//无序列排列   
function iu(){
document.execCommand('InsertUnorderedList');   
};

//有序列排列   
function io(){
document.execCommand('InsertOrderedList');   
};


//撤销
function un() {
document.execCommand('undo', 'false', null );
} ;
//恢复
function redo() {
document.execCommand('redo', 'false', null );
} ;
//清除格式
function rf() {
document.execCommand('RemoveFormat')
} 
//表格
function creatTab(){
var rows = prompt("rows"," ");
var cols = prompt("cols"," ");


var th = document.createElement('th');

    var tab = '<table id="tfhover" class="tftable" border="1" contenteditable="true">'
/* 表头*/
            tab=tab+"<tr>";
        for(var j=0;j<cols;j++){
            tab+="<th>"+1+j+"</th>";
        }
        tab+="<tr/>";
    

/*主体*/
    for(var i=0;i<rows;i++){
        tab=tab+"<tr>";
        for(var j=0;j<cols;j++){
            tab+="<td>"+i+j+"</td>";
        }
        tab+="<tr/>";
    }
    tab+='</table>';

var html=tab;
/*来源：https://blog.csdn.net/fesfsefgs/article/details/109540259?utm_medium=distribute.wap_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.wap_blog_relevant_pic&depth_1-utm_source=distribute.wap_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.wap_blog_relevant_pic*/
var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);

            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {     document.selection.createRange().pasteHTML(html);
    }
}





<!--不会使用-->
function open() {
document.execCommand("Open")
} ;
function saveas() {
document.execCommand("SaveAs","hi.txt")
};
