$(function(){
    var tabs = function(tab, con){
        tab.click(function(){
            var indx = tab.index(this);
            tab.removeClass('active');
            $(this).addClass('active');
            con.hide();
            con.eq(indx).show();
        })    
    }
    tabs($(".record .list"), $('.main .manage')); 
    
})

var meng = function(){
    setTimeout(function(){
        // $('#test1').focus();
        $('#test1').click();
        $('#layui-laydate1').css({
            "left":"16%",
            "top":"18%",
            "right":"9%",
        });
        $('.layui-laydate-content td').css({
            "border-radius":"50%",
        })
    },0)
}













