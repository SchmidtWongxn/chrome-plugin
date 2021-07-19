(function () {
  'use strict';
  'use strict';
  console.log('我的脚本加载了');
  var div = document.createElement("div");
  div.id = "ui-container";
  div.textContent = "pop2up";
  div.style.width = "500px";
  div.style.height = "420px";
  div.style.position = "fixed";
  div.style.right = "150px";
  div.style.top = "150px";
  div.style.backgroundColor = "#ccc";

  var body = document.getElementsByTagName('body')[0];
  //在浏览器控制台可以查看所有函数，ctrl+shift+I 调出控制台，在Console窗口进行实验测试
  body.appendChild(div);

  //var y = document.getElementById('s_btn_wr');
  //y.appendChild(button);
})();