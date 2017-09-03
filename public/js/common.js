define(['jquery', 'template', 'cookie'], function ($, template) {
    /*在引入template时要放在cookie的前面 因cookie无返回值,没返回值的统一写到后面
     * 'jquery', 'template',有返回值
     * */
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
    if (!sessionId && location.pathname != '/main/login') {
        //sessionID不存在重新跳转到登录页面
        location.href = '/main/login';
    }
    //获取登录信息
    var loginInfo = $.cookie('loginInfo');
    //console.log(loginInfo);
    //从cookie中拿到的数据是字符串，故需要转成对象
    //注意：有获取值的需求时就要判断一下这个值是否存在，如果不存在要做一下非空判断和数据类型格式的判断
    var info = loginInfo ? JSON.parse(loginInfo) : {};
    //console.log(info);
    //当模板内容比较少时 直接用render这种方法渲染数据
    //渲染头部头像信息
    var tplstr = ' <div class="avatar img-circle"> <img src="{{tc_avatar}}"> </div> <h4>{{tc_name}}</h4>';
    var html = template.render(tplstr,info);
    $('.aside .profile').html(html);
    /*$('.profile img').attr('src', info.tc_avatar);
    $('.profile h4').html(info.tc_name);*/
});