/* global Yun, CONFIG */

Yun.boot = {
  /**
   * 显示版权
   */
  copyright() {
    console.log(
      `%c ☁️ hexo-theme-yun ${CONFIG.version} %c https://github.com/YunYouJun/hexo-theme-yun`,
      "color: white; background: #0078E7; padding:5px 0;",
      "padding:4px;border:1px solid #0078E7;"
    );
  },
};

function initPage() {
  Yun.utils.registerToggleSidebar();
  Yun.utils.registerScrollPercent();

  Yun.utils.insertCopyCodeBtn();
  Yun.utils.wrapTable();
}

Yun.boot.copyright();
document.addEventListener("DOMContentLoaded", initPage);

// 下面是Adkinsm新增内容

 let OriginTitle = document.title,
     titleTime;

 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '502 | 页面已崩溃！';
         clearTimeout(titleTime);
     }
     else {
         document.title = '已恢复连接！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

document.body.addEventListener('copy', function (e) {
    if (window.getSelection().toString() && window.getSelection().toString().length > 42) {
        setClipboardText(e);
        alert('商业转载请联系作者获得授权，非商业转载请注明出处哦~\n\n谢谢合作~(｡・`ω´･)');
    }
}); 
function setClipboardText(event) {
    var clipboardData = event.clipboardData || window.clipboardData;
    if (clipboardData) {
        event.preventDefault();
        var htmlData = ''
            + '著作权归作者所有。<br>'
            + '商业转载请联系作者获得授权，非商业转载请注明出处。<br>'
            + '作者：Adkinsm <br>'
            + '链接：' + window.location.href + '<br>'
            + '来源：Adkinsm 部落格<br><br>'
            + window.getSelection().toString();
        var textData = ''
            + '著作权归作者所有。\n'
            + '商业转载请联系作者获得授权，非商业转载请注明出处。\n'
            + '作者：Adkinsm\n'
            + '链接：' + window.location.href + '\n'
            + '来源：Adkinsm 部落格\n\n'
            + window.getSelection().toString();
 
        clipboardData.setData('text/html', htmlData);
        clipboardData.setData('text/plain',textData);
    }
}
