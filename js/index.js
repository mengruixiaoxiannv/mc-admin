$(function() {
    //   引入首页
    $('.home-index').load('../homepage.html');
    //   引入交易管理
    $('.transaction-manage').load('../transaction.html');
    //   引入我的设备
    $('.my-equipment').load('../myEquipment.html');
    //   引入个人中心
    $('.personal-center').load('../adminCenter.html');
    //   引入我的账户
    $('#account').load('../myAccount.html');
    $('#account').hide()
    //   引入共同的底部
    $('#footer').load('../footer.html');
})