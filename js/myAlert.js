function myAlert(str,click,useCancel){
    var overflow="";
    var $hidder=null;
    var clickHandler=click||$.noop;
    var myClickHandler=function(){
        $hidder.remove();
        $("body").css("overflow",overflow);
        clickHandler($(this).html()=="确定");
    };
    var init=function(){
        $hidder = $("<div style='width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:1000;text-align: center;position:fixed;left:0;top:0;'></div>");
        var $myalert = $("<div style='width:60%;position:absolute;top:30%;left:50%;margin-left:-30%;padding:.2rem;padding-bottom:.1rem;background:rgba(36,55,74);border-radius:.05rem;'>"+
            "</div>")
            .appendTo($hidder);
        $("<div style='padding:.1rem 0 .15rem 0;color:rgba(239,103,103);border-bottom:1px solid rgba(255,255,255,.2);line-height: .25rem;'>"+str+"</div>").appendTo($myalert);
        var $myalert_btn_div = $("<div style='padding-top:.08rem;'></div>").appendTo($myalert);
        var $okBtn = $("<div style='float:left;width:100%;color:rgba(0,155,219);border-radius:2px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;' class='bluebg1'>确定</div>")
            .appendTo($myalert_btn_div).click(myClickHandler);
        if(useCancel){
            $okBtn.css({"width":"50%","border-right":"5px solid #fff"});
            $("<div style='float:left;width:50%;border-left:5px solid #fff;border-radius:2px;color:#fff;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background:#ccc;'>取消</div>")
            .appendTo($myalert_btn_div).click(myClickHandler);
        }
        overflow=$("body").css("overflow");
        $("body").css("overflow","hidden").append($hidder);
    };
    init();
}