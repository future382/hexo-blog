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
