!function(n){
    var  e=n.document,
         t=e.documentElement,
         i=375,
         d=i/100,
         o="orientationchange"in n?"orientationchange":"resize",
         a=function(){
             var n=t.clientWidth||320;n>375&&(n=375);
             t.style.fontSize=n/d+"px"
         };
         e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);


// !function(win,doc){
//     var d=doc.documentElement;
//     function change(){
//         d.style.fontSize= d.clientWidth/96+'px';
//     }
//     win.addEventListener('resize',change,false);
//     change();
// }(window,document);


// window.onload=function(){
//     resize(750,"x");
// }
// function resize(originSize,type){
//     // originSize = 750;
//     // type = x
//     type = type || "x";
//     if(type=="x"){
//         var width = document.documentElement.clientWidth;//设备的宽度
//         var scale = width/originSize*200+"px";
//         document.getElementsByTagName("html")[0].style.fontSize=scale;
//     }else if(type=="y"){
//         var height = document.documentElement.clientHeight;
//         var scale = height/originSize+"px";
//         document.getElementsByTagName("html")[0].style.fontSize=scale;
//     }
// }
// resize(750,"x");

// window.onresize = function(){
//    resize(750,"x"); 
// }