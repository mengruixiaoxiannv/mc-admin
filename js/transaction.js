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
