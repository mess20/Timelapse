document.addEventListener('keydown', function (event) {
        if ((event.ctrlKey === true || event.metaKey === true)
            && (event.which === 61 || event.which === 107
                || event.which === 173 || event.which === 109
                || event.which === 187 || event.which === 189)) {
            event.preventDefault();
        }
    }, false);   window.addEventListener('mousewheel', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });
window.addEventListener('DOMMouseScroll', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, { passive: false });


function sizing1(){
document.getElementById("sizing-nav").style.display="block";
}
function sizing2(){
document.getElementById("sizing-nav").style.display="none";
}

function open10(){
document.getElementById("img-nav").style.display="flex";
};
function close10(){
document.getElementById("img-nav").style.display="none";
}




function number() {
var html='<main id="main"><!--初始化--><button class="btn picBoxBtn" style="display:inline-block"><i class="fa fa-lock" aria-hidden="true"></i> </button><button class="outputmodel" style=""><i class="fa fa-unlock" aria-hidden="true"></i> </button><!--叠放次序--><button class="btn zIndexBtn" style="background:transparent !important;box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);border-radius:50px;display:inline-block">浮于文字上方</button><button class="btn zIndexBtn1" style="display:none;background:transparent !important;box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);border-radius:50px;">衬于文字下方</button><div class="picBox" style=""></div><img src="" alt="" class="outputPic" id="outputPic" style=""></main>';

var content = window.getSelection().toString();
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


    $('.picBoxBtn').click(function(){
var n = $(".picBoxBtn").index(this);
c.style.zIndex="2";    
this.style.display="none";
$(".outputmodel")[n].style.display="inline-block";                  
})


    $('.outputmodel').click(function(){
var n = $(".outputmodel").index(this);
this.style.display="none";
$(".picBoxBtn")[n].style.display="inline-block";   
})


$(".picBoxBtn").click(function(){       
var n = $(".picBoxBtn").index(this);
//document.getElementById('textarea').innerText=n;
var canvasBox = $(".picBox")[n];
    var canvas = new _Canvas({
      box: canvasBox,                  // 容器
      bgColor: 'rgba(255,255,255,100%)',   

             // 背景色
      bgPhoto: 'none',  
              // 背景图
      photoModel: 'adaption',        // 载入图片模式(设置后添加图片时默认为当前设置模式)
      model: 'Cascade'                // 编辑模式
    })
    var timer;
    canvas.init({
      dragEvent: function (e1, e2) {
        clearTimeout(timer);
        $('.event').text('当前操作事件：正在拖拽');
        timer = setTimeout(function () {
          $('.event').text('当前操作事件：无操作');
        }, 10)
      },
      zoomEvent: function (e1, e2) {
        clearTimeout(timer);
        $('.event').text('当前操作事件：正在缩放');
        timer = setTimeout(function () {
          $('.event').text('当前操作事件：无操作');
        }, 10)
      },
      rotateEvent: function (e1, e2) {
        clearTimeout(timer);
        $('.event').text('当前操作事件：正在旋转');
        timer = setTimeout(function () {
          $('.event').text('当前操作事件：无操作');
        }, 10)
      },
      callback: function () {
        console.log('图片初始化完成...')
        canvas.addPhoto({
          url: './img/pic1.jpg',
          model: 'adaption',
          callback: function () {
            console.log('成功添加一张自适应的图片')
          }
        })
      }
    });


    // 添加本地图片
    $('.file').change(function () {
      canvas.addPhoto({
        url: getUrl(this.files[0]),
        model: 200,
        callback: function () {
          console.log('成功添加本地图片')
        }
      })
    })
    // 旋转
    $('.rotate').click(function () {
      var nowPhoto = canvas.getNowPhoto();
      if (!nowPhoto) {
        alert('未选中任何图片');
        return;
      } else {
        var nowPhotoInfo = nowPhoto.getPhotoInfo();
        nowPhoto.changeInfo({
          rotate: nowPhotoInfo.rotate + 90,
          callback: function () {
            console.log('成功旋转')
          }
        })
      }
    })
    // 放大
    $('.enlarge').click(function () {
      var nowPhoto = canvas.getNowPhoto();
      if (!nowPhoto) {
        alert('未选中任何图片');
        return;
      } else {
        var nowPhotoInfo = nowPhoto.getPhotoInfo();
        nowPhoto.changeInfo({
          scale: nowPhotoInfo.scale * 1.1,
          callback: function () {
            console.log('成功放大')
          }
        })
      }
    })
    // 缩小
    $('.narrow').click(function () {
      var nowPhoto = canvas.getNowPhoto();
      if (!nowPhoto) {
        alert('未选中任何图片');
        return;
      } else {
        var nowPhotoInfo = nowPhoto.getPhotoInfo();
        nowPhoto.changeInfo({
          scale: nowPhotoInfo.scale / 1.1,
          callback: function () {
            console.log('成功缩小')
          }
        })
      }
    })

    // 重置
    $('.autoScale').click(function () {
      var nowPhoto = canvas.getNowPhoto();
      if (!nowPhoto) {
        alert('未选中任何图片');
        return;
      } else {
        var nowPhotoInfo = nowPhoto.getPhotoInfo();
        nowPhoto.init(function () {
          console.log('成功重置')
        })
      }
    })
    // 删除图片
    $('.deletePic').click(function () {
      var nowPhoto = canvas.getNowPhoto();
      if (!nowPhoto) {
        alert('未选中任何图片');
        return;
      } else {
        var nowPhotoInfo = nowPhoto.getPhotoInfo();
        nowPhoto._delete();
        console.log('成功重置')
      }
    })


    // 更改画布宽高
    $('.changeWH1').click(function () {
var w = prompt("输入宽度值","");
var h = prompt("输入高度值","");
      canvas.changeParams({
        width: w,
        height: h
      })
    })
    // 复原
    $('.changeWH2').click(function () {
      canvas.changeParams({
        width: 750,
        height: 600
      })
    })

    // 清空画布
    $('.clearCanvas').click(function () {
      canvas.clearCanvas();
    })

     

    // 输出png图
    $('.outputmodel').click(function () {
var n = $(".outputmodel").index(this);
document.getElementById('outputPic').id='outputPic'+n;
var c = "#outputPic"+n;

      canvas.toDataURL({
        width: 750,
        height: 600,
        type: 'image/png',
        callback: function (url) {
          $(c).attr('src', url);
          console.log('成功输出png图')
        }
      });
setTimeout(function(){       
var canvas = $(".picBox")[n];
var html=canvas.innerHTML;  
canvas.outerHTML='<div style="display:none;" id="editedcanvas'+n+'">'+html+'</div>';
var c = "editedcanvas"+n;
var c = document.getElementById(c);
var html=c.innerHTML;  
c.outerHTML='<div class="picBox" >'+html+"</div>";
},100)
    })



    $('.zIndexBtn').click(function(){
var n = $(".zIndexBtn").index(this);
var canvasBox = $(".picBox")[n];
var c = $(".outputPic")[n];           
canvasBox.style.zIndex="2";
c.style.zIndex="2";    
$(".zIndexBtn")[n].style.display="none";
$(".zIndexBtn1")[n].style.display="inline-block";                  
})


    $('.zIndexBtn1').click(function(){
var n = $(".zIndexBtn1").index(this);
var canvasBox = $(".picBox")[n];
var c = $(".outputPic")[n];
canvasBox.style.zIndex="-2";
c.style.zIndex="-1";    
this.style.display="none";
$(".zIndexBtn")[n].style.display="inline-block";   
})

    function getUrl (file) {
      var url = null;
      if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(file);
      } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url
    }
  })
}


