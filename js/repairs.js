//点击清除按钮时，将input的值清空
$(".cancel").click(function(){
    $("input").val("");
    $("textarea").val("");
});

//点击提交按钮
$(".submit").click(function(){
    var code = $('input[name="g-code"]').val();
    var describe = $('input[name="g-describe"]').val();
    var remark = $('input[name="g-remark"]').val();
    if(code == "" || describe == "" || remark == ""){
        myAlert('您的报修信息填写不完整</br>请返回继续填写')
    }else{
        myAlert('您的报修已经提交成功</br>三个工作日内</br>会有维修人员联系您');
    }
});












