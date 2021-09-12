var t = document.getElementById("article").innerHTML;
document.getElementById("article").innerHTML=t
//大标题
.replace(new RegExp('‹' , "g"), '<h3>')
.replace(new RegExp('›' , "g"), '</h3>')
//小标题
.replace(new RegExp('«' , "g"), '<h4>')
.replace(new RegExp('»' , "g"), '</h4><br>')
//分割线*
.replace(new RegExp('---' , "g"), '<hr>')
//强调*
.replace(new RegExp('【' , "g"), '<l>')
.replace(new RegExp('】' , "g"), '</l>')
//注释
.replace(new RegExp('「（' , "g"), '<dfn class="reference-index"><span>')
.replace(new RegExp('）」' , "g"), '</span><note class="reference">')
.replace(new RegExp('↓）' , "g"), '</note></dfn>')
//链接
.replace(new RegExp('「a（' , "g"), '<a href="')
.replace(new RegExp('）a」' , "g"), '"><i class="fa fa-paperclip" aria-hidden="true"></i></a>')
//特殊*
.replace(new RegExp('『' , "g"), '<n>')
.replace(new RegExp('』' , "g"), '</n>')
//dfn*
.replace(new RegExp('「' , "g"), '<dfn>')
.replace(new RegExp('」' , "g"), '<note>')
.replace(new RegExp('（' , "g"), '')
.replace(new RegExp('）' , "g"), '</note></dfn>')
