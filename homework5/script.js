document.addEventListener("DOMContentLoaded",function(){
	const deptItems=document.querySelectorAll(".dept-item");
	// 添加点击事件（onclick）
	deptItems.forEach(function(item){
		 item.onclick = function() {
      	 alert("你点击了：" + this.textContent);
	};
  });
	// 添加鼠标按下事件（onmousedown）
	deptItems.forEach(function(item) {
    item.onmousedown = function() {
      this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
    };
  });
	 // 添加鼠标移出事件（onmouseout）
  	deptItems.forEach(function(item) {
    item.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    };
  });
	// 添加鼠标悬停事件（onmouseover）
  	deptItems.forEach(function(item) {
    item.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });
	// 添加鼠标松开事件（onmouseup）
  	deptItems.forEach(function(item) {
    item.onmouseup = function() {
      this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
    };
  });

});