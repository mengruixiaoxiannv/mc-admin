$('.main').on('click','.submit',function(){
    var username = $('input[name="username"]').val();
    var userpwd = $('input[name="userpwd"]').val();
    if(username=="" || userpwd==""){
        alert('请完整填写登录信息');
    }
})


