define(['jquery', 'cookie'], function ($) {
    /* NProgress.start();
     NProgress.done();*/
    //控制左侧菜单的折叠和展开
    /* $('.navs ul').prev('a').on('click', function () {
     $(this).next().slideToggle();
     });
     //退出功能*/
    $('#logoutBtn').click(function () {
        //console.log(111112);
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function (data) {
                // console.log(data);
                if (data.code == 200) {
                    location.href = '/main/login';
                }
            }
        });
    });
    //登录过会有PHPSESSID属性 退出登录此属性就消失
    //验证是否登录
    var sessionId = $.cookie('PHPSESSID');
    //console.log(location.pathname);// /main/login 获取的是当前URL的路径部分
    if(!sessionId && location.pathname != '/main/login'){
        //sessionID不存在重新跳转到登录页面
        location.href = '/main/login';
    }
    //获取登录信息
    var loginInfo = $.cookie('loginInfo');
    //console.log(loginInfo);
    //从cookie中拿到的数据是字符串，故需要转成对象
    var info = JSON.parse(loginInfo);
    //console.log(info);
    $('.profile img').attr('src',info.tc_avatar);
    $('.profile h4').html(info.tc_name);
});