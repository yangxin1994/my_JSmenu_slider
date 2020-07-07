//获取节点
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");


//事件监听
//侧边菜单栏
toggle.addEventListener("click",() => 
document.body.classList.toggle("show-nav")
);


//modal 
open.addEventListener("click",() => modal.classList.add
("show-modal"));

close.addEventListener("click",() => modal.classList.remove
("show-modal"));


//点击其他区域退出
window.addEventListener("click", e=>
e.target == modal ? modal.classList.remove("show-modal") : false
);

