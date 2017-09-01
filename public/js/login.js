define(['jquery','cookie'],function($){
    //实现登录功能
 $('#login').click(function(){
        //console.log('1111');
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : $('#loginFrom').serialize(),
            dataType : 'json',
            success : function(data){
                if(data.code == 200){
                    //cookie可以实现跨页面数据共享 cookie中的值只能是字符串 {path : '/'}此参数为设置成根路径
                    //先保存cookie
                    $.cookie('loginInfo',JSON.stringify(data.result),{path : '/'});
                    //登录成功，跳转到主页面
                    location.href = '/main/index'
                }else{
                    alert('用户或密码错误');
                }
            }
        })
        return false;
    })
})
