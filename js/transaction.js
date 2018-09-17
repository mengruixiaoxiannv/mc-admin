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
    $('.layui-laydate').css('right','0px')
})

var meng = function(){
    setTimeout(function(){
        // $('#test1').focus();
        $('#test1').click();
        console.log($('#test1'))
    },0)
}