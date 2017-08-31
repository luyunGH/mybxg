define(['jquery'],function($){
    //实现登录功能
 $('#login').click(function(){
        console.log('1111');
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : $('#loginFrom').serialize(),
            dataType : 'json',
            success : function(data){
                if(data.code == 200){
                    location.href = '/main/index'
                }else{
                    alert('用户或密码错误');
                }
            }
        })
        return false;
    })
})